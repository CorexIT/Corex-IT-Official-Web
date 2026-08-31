"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  setDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "@/lib/firebase";
import {
  COLLECTIONS,
  SETTINGS_DOC_ID,
  type Testimonial,
  type ContactMessage,
  type CompanySettings,
} from "@/lib/firestore-types";
import { defaultCompanySettings } from "@/lib/site-settings";

// Types for admin UI
type Tab = "dashboard" | "testimonials" | "messages" | "settings";

function formatDate(value: Timestamp | Date | string | undefined): string {
  try {
    if (!value) return "—";
    let d: Date;
    if (value instanceof Timestamp) d = value.toDate();
    else if (value instanceof Date) d = value;
    else d = new Date(value as string);
    return d.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return String(value);
  }
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("dashboard");

  // Data
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [settings, setSettings] = useState<CompanySettings>(defaultCompanySettings);
  const [loadingData, setLoadingData] = useState(true);

  // Testimonials form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tForm, setTForm] = useState({
    name: "",
    company: "",
    designation: "",
    comment: "",
    rating: 5,
    status: "published" as "published" | "hidden",
    imageUrl: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tSubmitting, setTSubmitting] = useState(false);
  const [tError, setTError] = useState<string | null>(null);

  // Messages filter/search
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "new" | "read" | "replied">("all");

  // Settings edit
  const [settingsSaving, setSettingsSaving] = useState(false);

  // Auth guard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.replace("/corexit-admin-login");
      } else {
        setUserEmail(u.email);
        setAuthLoading(false);
      }
    });
    return () => unsub();
  }, [router]);

  // Fetch data — only after auth is confirmed (do NOT run while auth.currentUser === null)
  async function fetchAll() {
    // Guard: ensure auth is ready and user is authenticated
    if (auth.currentUser === null) {
      console.error("Failed to load admin data: auth not ready or unauthenticated — waiting for onAuthStateChanged");
      return;
    }
    setLoadingData(true);
    try {
      const [tSnap, mSnap, sSnap] = await Promise.all([
        getDocs(query(collection(db, COLLECTIONS.testimonials), orderBy("createdAt", "desc"))).catch((err) => {
          console.error("Failed to load testimonials (admin)", err);
          throw err;
        }),
        getDocs(query(collection(db, COLLECTIONS.contactMessages), orderBy("createdAt", "desc"))).catch((err) => {
          console.error("Failed to load admin messages", err);
          throw err;
        }),
        getDoc(doc(db, COLLECTIONS.settings, SETTINGS_DOC_ID)).catch((err) => {
          console.error("Failed to load settings", err);
          throw err;
        }),
      ]);
      setTestimonials(
        tSnap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Testimonial, "id">) }))
      );
      setMessages(
        mSnap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ContactMessage, "id">) }))
      );
      if (sSnap.exists()) {
        setSettings({ ...defaultCompanySettings, ...(sSnap.data() as CompanySettings) });
      }
    } catch (e) {
      console.error("Failed to load admin data", e);
    } finally {
      setLoadingData(false);
    }
  }

  useEffect(() => {
    if (!authLoading && auth.currentUser !== null) fetchAll();
  }, [authLoading]);

  // Dashboard stats
  const stats = useMemo(() => {
    const totalTestimonials = testimonials.length;
    const published = testimonials.filter((t) => t.status === "published").length;
    const hidden = testimonials.filter((t) => t.status === "hidden").length;
    const totalMessages = messages.length;
    const newMessages = messages.filter((m) => m.status === "new").length;
    const readMessages = messages.filter((m) => m.status === "read").length;
    const repliedMessages = messages.filter((m) => m.status === "replied").length;
    return { totalTestimonials, published, hidden, totalMessages, newMessages, readMessages, repliedMessages };
  }, [testimonials, messages]);

  // Filtered messages
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      if (filterStatus !== "all" && m.status !== filterStatus) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const hay = `${m.fullName} ${m.email} ${m.phone} ${m.company} ${m.subject} ${m.message}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [messages, search, filterStatus]);

  // Testimonials CRUD
  const resetTForm = () => {
    setEditingId(null);
    setTForm({ name: "", company: "", designation: "", comment: "", rating: 5, status: "published", imageUrl: "" });
    setImageFile(null);
    setTError(null);
  };

  const handleEdit = (t: Testimonial) => {
    setEditingId(t.id);
    setTForm({
      name: t.name,
      company: t.company || "",
      designation: t.designation || "",
      comment: t.comment,
      rating: t.rating,
      status: t.status,
      imageUrl: t.imageUrl || "",
    });
    setImageFile(null);
    setTab("testimonials");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Delete this testimonial?")) return;
    try {
      await deleteDoc(doc(db, COLLECTIONS.testimonials, id));
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to update testimonial (delete)", err);
      alert(err instanceof Error ? err.message : "Failed to delete testimonial");
    }
  };

  const handleToggleStatus = async (t: Testimonial) => {
    const newStatus = t.status === "published" ? "hidden" : "published";
    try {
      await updateDoc(doc(db, COLLECTIONS.testimonials, t.id), { status: newStatus });
      setTestimonials((prev) => prev.map((x) => (x.id === t.id ? { ...x, status: newStatus } : x)));
    } catch (err) {
      console.error("Failed to update testimonial (toggle status)", err);
      alert(err instanceof Error ? err.message : "Failed to update testimonial");
    }
  };

  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    setTError(null);
    if (!tForm.name.trim() || !tForm.comment.trim()) {
      setTError("Name and comment are required.");
      return;
    }
    // Client-side validation per spec
    if (imageFile) {
      if (!imageFile.type.startsWith("image/")) {
        setTError("Only image files are allowed.");
        setTSubmitting(false);
        return;
      }
      if (imageFile.size > 5 * 1024 * 1024) {
        setTError("Image must be under 5MB.");
        setTSubmitting(false);
        return;
      }
    }
    setTSubmitting(true);
    try {
      let imageUrl = tForm.imageUrl;
      // If file selected, upload to Storage at required path
      if (imageFile) {
        const fileName = `testimonials/customer-images/${Date.now()}-${imageFile.name.replace(/\s+/g, "_")}`;
        const storageRef = ref(storage, fileName);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const payload = {
        name: tForm.name.trim(),
        company: tForm.company.trim(),
        designation: tForm.designation.trim(),
        comment: tForm.comment.trim(),
        rating: Number(tForm.rating),
        status: tForm.status,
        imageUrl: imageUrl || "",
        createdAt: serverTimestamp(),
      };

      if (editingId) {
        try {
          await updateDoc(doc(db, COLLECTIONS.testimonials, editingId), {
            name: payload.name,
            company: payload.company,
            designation: payload.designation,
            comment: payload.comment,
            rating: payload.rating,
            status: payload.status,
            ...(imageFile || tForm.imageUrl ? { imageUrl: payload.imageUrl } : {}),
          });
          setTestimonials((prev) => prev.map((t) => (t.id === editingId ? { ...t, ...payload, id: editingId, createdAt: t.createdAt, imageUrl: payload.imageUrl } as Testimonial : t)));
        } catch (err) {
          console.error("Failed to update testimonial", err);
          throw err;
        }
      } else {
        try {
          const refDoc = await addDoc(collection(db, COLLECTIONS.testimonials), payload);
          setTestimonials((prev) => [{ id: refDoc.id, ...payload } as Testimonial, ...prev]);
        } catch (err) {
          console.error("Failed to update testimonial (create)", err);
          throw err;
        }
      }
      resetTForm();
    } catch (err: unknown) {
      console.error("Failed to update testimonial", err);
      setTError(err instanceof Error ? err.message : "Failed to save testimonial.");
    } finally {
      setTSubmitting(false);
    }
  };

  // Messages actions
  const handleUpdateMessageStatus = async (id: string, status: ContactMessage["status"]) => {
    try {
      await updateDoc(doc(db, COLLECTIONS.contactMessages, id), { status });
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    } catch (err) {
      console.error("Failed to update contact message status", err);
      alert(err instanceof Error ? err.message : "Failed to update message");
    }
  };
  const handleDeleteMessage = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    try {
      await deleteDoc(doc(db, COLLECTIONS.contactMessages, id));
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Failed to delete contact message", err);
      alert(err instanceof Error ? err.message : "Failed to delete message");
    }
  };

  // Settings save — uses setDoc(...,{merge:true}) on settings/company
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaving(true);
    try {
      await setDoc(doc(db, COLLECTIONS.settings, SETTINGS_DOC_ID), settings, { merge: true });
      alert("Settings saved.");
    } catch (err: unknown) {
      console.error("Failed to update settings", err);
      alert(err instanceof Error ? err.message : "Failed to update settings");
    } finally {
      setSettingsSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/corexit-admin-login");
  };

  if (authLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#F8F9FB]">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-[#0057B8] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-[18px] font-extrabold tracking-tight text-[#071A33]">COREX <span className="text-[#0057B8]">IT</span> <span className="ml-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-400">Admin · corexit-652f5</span></span>
            <span className="hidden md:inline text-[12px] text-slate-500">{userEmail}</span>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:bg-slate-50">Logout</button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-[220px] shrink-0">
          <nav className="bg-white border border-slate-200 rounded-[14px] p-2 flex lg:flex-col gap-1 overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard" },
              { id: "testimonials", label: "Testimonials" },
              { id: "messages", label: "Contact Messages" },
              { id: "settings", label: "Settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id as Tab)}
                className={`px-4 py-2.5 rounded-lg text-[13.5px] font-medium text-left whitespace-nowrap transition-colors ${tab === item.id ? "bg-[#071A33] text-white" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 p-4 rounded-[14px] bg-white border border-slate-200">
            <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 font-semibold">Firebase</p>
            <p className="text-[12px] text-slate-600 mt-1">Project: corexit-652f5</p>
            <p className="text-[12px] text-slate-600">Auth: Email/Password</p>
            <p className="text-[11px] text-slate-400 mt-2">Collections: testimonials · contact_messages · settings</p>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          {loadingData ? (
            <div className="bg-white border border-slate-200 rounded-[16px] p-12 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-slate-200 border-t-[#0057B8] rounded-full animate-spin" />
            </div>
          ) : tab === "dashboard" ? (
            <div className="space-y-6">
              <h1 className="text-[22px] font-bold tracking-[-0.02em] text-[#071A33]">Dashboard</h1>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Total Testimonials", value: stats.totalTestimonials, sub: `${stats.published} published · ${stats.hidden} hidden` },
                  { label: "Published Testimonials", value: stats.published, sub: "Visible on Home Page" },
                  { label: "Hidden Testimonials", value: stats.hidden, sub: "Not visible publicly" },
                  { label: "Total Contact Messages", value: stats.totalMessages, sub: `${stats.newMessages} new · ${stats.readMessages} read` },
                  { label: "New Messages", value: stats.newMessages, sub: "Require attention" },
                  { label: "Read Messages", value: stats.readMessages, sub: `${stats.repliedMessages} replied` },
                ].map((c) => (
                  <div key={c.label} className="bg-white border border-slate-200 rounded-[16px] p-5">
                    <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400 font-semibold">{c.label}</p>
                    <p className="text-[28px] font-bold tracking-[-0.02em] text-[#071A33] mt-2">{c.value}</p>
                    <p className="text-[12px] text-slate-500 mt-1">{c.sub}</p>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 rounded-[16px] p-6">
                  <h3 className="text-[14px] font-semibold text-[#071A33]">Recent Testimonials</h3>
                  <div className="mt-4 space-y-3">
                    {testimonials.slice(0, 5).map((t) => (
                      <div key={t.id} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-[#071A33] truncate">{t.name} <span className="text-slate-400 font-normal">· {t.rating}★</span></p>
                          <p className="text-[11px] text-slate-500 truncate">{t.designation || t.company || "—"} · {t.status}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-[10px] font-semibold tracking-[0.06em] uppercase ${t.status === "published" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100"}`}>{t.status}</span>
                      </div>
                    ))}
                    {testimonials.length === 0 && <p className="text-[13px] text-slate-400">No testimonials yet.</p>}
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-[16px] p-6">
                  <h3 className="text-[14px] font-semibold text-[#071A33]">Recent Messages</h3>
                  <div className="mt-4 space-y-3">
                    {messages.slice(0, 5).map((m) => (
                      <div key={m.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between">
                          <p className="text-[13px] font-medium text-[#071A33] truncate">{m.fullName} <span className="text-slate-400 font-normal">· {m.subject}</span></p>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase border ${m.status === "new" ? "bg-blue-50 text-blue-700 border-blue-100" : m.status === "read" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-emerald-50 text-emerald-700 border-emerald-100"}`}>{m.status}</span>
                        </div>
                        <p className="text-[12px] text-slate-500 truncate mt-1">{m.message}</p>
                      </div>
                    ))}
                    {messages.length === 0 && <p className="text-[13px] text-slate-400">No messages yet.</p>}
                  </div>
                </div>
              </div>
            </div>
          ) : tab === "testimonials" ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[22px] font-bold tracking-[-0.02em] text-[#071A33]">Testimonials</h1>
                <span className="text-[12px] text-slate-500">{testimonials.length} total</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitTestimonial} className="bg-white border border-slate-200 rounded-[16px] p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-semibold text-[#071A33]">{editingId ? "Edit Testimonial" : "Add Testimonial"}</h3>
                  {editingId && (
                    <button type="button" onClick={resetTForm} className="text-[12px] font-medium text-slate-500 hover:text-[#071A33]">Cancel edit</button>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Name *</label>
                    <input value={tForm.name} onChange={(e) => setTForm((p) => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" placeholder="Amal Perera" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Company</label>
                    <input value={tForm.company} onChange={(e) => setTForm((p) => ({ ...p, company: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" placeholder="Nexus Analytics" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Designation</label>
                    <input value={tForm.designation} onChange={(e) => setTForm((p) => ({ ...p, designation: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" placeholder="Operations Director" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Rating *</label>
                    <select value={tForm.rating} onChange={(e) => setTForm((p) => ({ ...p, rating: Number(e.target.value) }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]">
                      {[5, 4, 3, 2, 1].map((n) => (
                        <option key={n} value={n}>{n} Star{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Comment *</label>
                  <textarea value={tForm.comment} onChange={(e) => setTForm((p) => ({ ...p, comment: e.target.value }))} rows={3} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8] resize-none" placeholder="Client feedback..." maxLength={600} />
                  <p className="text-[11px] text-slate-400 mt-1">{tForm.comment.length}/600</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Status</label>
                    <select value={tForm.status} onChange={(e) => setTForm((p) => ({ ...p, status: e.target.value as "published" | "hidden" }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]">
                      <option value="published">Published (visible on Home)</option>
                      <option value="hidden">Hidden</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Customer Image (Upload to Storage: testimonials/customer-images/)</label>
                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full text-[13px] file:mr-3 file:px-3 file:py-2 file:rounded-lg file:border-0 file:bg-[#0057B8] file:text-white file:text-[12px] file:font-medium hover:file:bg-[#003B7A]" />
                    {(tForm.imageUrl || imageFile) && (
                      <p className="text-[11px] text-slate-500 mt-1 truncate">{imageFile ? `Selected: ${imageFile.name}` : `Current: ${tForm.imageUrl.slice(0, 60)}...`}</p>
                    )}
                  </div>
                </div>
                {tError && <p className="text-[12px] text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{tError}</p>}
                <button type="submit" disabled={tSubmitting} className="px-6 py-3 rounded-none bg-[#0057B8] text-white text-[13px] font-semibold hover:bg-[#003B7A] disabled:opacity-50">
                  {tSubmitting ? "Saving…" : editingId ? "Update Testimonial" : "Add Testimonial"}
                </button>
                <p className="text-[11px] text-slate-400">Image will be uploaded to Firebase Storage (corexit-652f5) and URL saved in Firestore.</p>
              </form>

              {/* List */}
              <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold tracking-[0.04em] uppercase text-slate-600">All Testimonials</h3>
                  <span className="text-[11px] text-slate-400">Storage: testimonials/ · Fields: name, company, designation, comment, imageUrl, rating, status, createdAt</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {testimonials.map((t) => (
                    <div key={t.id} className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
                      <img src={t.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=EAF4FF&color=0057B8`} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-200 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] font-semibold text-[#071A33]">{t.name} <span className="text-slate-400 font-normal">· {t.rating}★ · {t.status}</span></p>
                        <p className="text-[12px] text-slate-500 truncate">{[t.designation, t.company].filter(Boolean).join(" · ")}</p>
                        <p className="text-[13px] text-slate-700 mt-1 line-clamp-2">&ldquo;{t.comment}&rdquo;</p>
                        <p className="text-[11px] text-slate-400 mt-1">{formatDate(t.createdAt)}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <button onClick={() => handleToggleStatus(t)} className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${t.status === "published" ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"}`}>
                          {t.status === "published" ? "Hide" : "Publish"}
                        </button>
                        <button onClick={() => handleEdit(t)} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-slate-50">Edit</button>
                        <button onClick={() => handleDeleteTestimonial(t.id)} className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-[11px] font-medium text-red-600 hover:bg-red-100">Delete</button>
                      </div>
                    </div>
                  ))}
                  {testimonials.length === 0 && <p className="px-6 py-12 text-center text-[13px] text-slate-400">No testimonials yet. Add your first one above.</p>}
                </div>
              </div>
            </div>
          ) : tab === "messages" ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-[22px] font-bold tracking-[-0.02em] text-[#071A33]">Contact Messages</h1>
                <span className="text-[12px] text-slate-500">{filteredMessages.length} / {messages.length}</span>
              </div>

              <div className="bg-white border border-slate-200 rounded-[16px] p-4 flex flex-col sm:flex-row gap-3">
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, subject, message…" className="flex-1 px-4 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)} className="px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]">
                  <option value="all">All statuses</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>

              <div className="bg-white border border-slate-200 rounded-[16px] overflow-hidden divide-y divide-slate-100">
                {filteredMessages.map((m) => (
                  <div key={m.id} className="px-6 py-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[13.5px] font-semibold text-[#071A33]">{m.fullName} <span className="text-slate-400 font-normal">· {m.email}</span></p>
                        <p className="text-[12px] text-slate-500 mt-0.5">{[m.phone, m.company].filter(Boolean).join(" · ") || "—"} · {m.subject} · {formatDate(m.createdAt)}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] border ${m.status === "new" ? "bg-blue-50 text-blue-700 border-blue-200" : m.status === "read" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`}>{m.status}</span>
                    </div>
                    <p className="text-[13px] leading-[1.6] text-slate-700 mt-3 bg-slate-50 border border-slate-100 rounded-xl p-3">{m.message}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button onClick={() => handleUpdateMessageStatus(m.id, "read")} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:bg-slate-50">Mark as Read</button>
                      <button onClick={() => handleUpdateMessageStatus(m.id, "replied")} className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100">Mark as Replied</button>
                      <button onClick={() => handleUpdateMessageStatus(m.id, "new")} className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] font-medium text-blue-700 hover:bg-blue-100">Mark as New</button>
                      <button onClick={() => handleDeleteMessage(m.id)} className="ml-auto px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-[11px] font-medium text-red-600 hover:bg-red-100">Delete</button>
                    </div>
                  </div>
                ))}
                {filteredMessages.length === 0 && <p className="px-6 py-12 text-center text-[13px] text-slate-400">No messages match your search/filter.</p>}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h1 className="text-[22px] font-bold tracking-[-0.02em] text-[#071A33]">Settings</h1>
              <form onSubmit={handleSaveSettings} className="bg-white border border-slate-200 rounded-[16px] p-6 space-y-5">
                <p className="text-[12px] text-slate-500">Editable company information — stored in Firestore <span className="font-mono">settings/company</span>. Public site reads this document.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Company Email</label>
                    <input value={settings.email} onChange={(e) => setSettings((p) => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Company Phone</label>
                    <input value={settings.phone} onChange={(e) => setSettings((p) => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Company Address</label>
                    <input value={settings.address} onChange={(e) => setSettings((p) => ({ ...p, address: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">Facebook URL</label>
                    <input value={settings.facebook} onChange={(e) => setSettings((p) => ({ ...p, facebook: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" placeholder="https://facebook.com/..." />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">GitHub URL</label>
                    <input value={settings.github} onChange={(e) => setSettings((p) => ({ ...p, github: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" placeholder="https://github.com/..." />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">TikTok URL</label>
                    <input value={settings.tiktok} onChange={(e) => setSettings((p) => ({ ...p, tiktok: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1.5">LinkedIn URL</label>
                    <input value={settings.linkedin} onChange={(e) => setSettings((p) => ({ ...p, linkedin: e.target.value }))} className="w-full px-3 py-2.5 text-[13px] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0057B8]" />
                  </div>
                </div>
                <button type="submit" disabled={settingsSaving} className="px-6 py-3 rounded-none bg-[#071A33] text-white text-[13px] font-semibold hover:bg-black disabled:opacity-50">
                  {settingsSaving ? "Saving…" : "Save Settings"}
                </button>
              </form>

              <div className="bg-amber-50 border border-amber-100 rounded-[14px] p-4">
                <p className="text-[12px] font-semibold text-amber-800">Security note</p>
                <p className="text-[12px] text-amber-700 mt-1">Do NOT expose Firebase Admin SDK private keys in the frontend. All writes require Authentication. See firestore.rules and storage.rules for least-privilege rules.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
