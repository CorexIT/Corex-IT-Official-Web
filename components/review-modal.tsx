"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send, CheckCircle2 } from "lucide-react";
import type { ReviewInput } from "@/lib/reviews";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: (review: import("@/lib/reviews").Review) => void;
};

type Errors = Partial<Record<keyof ReviewInput, string>>;

export function ReviewModal({ open, onClose, onSuccess }: Props) {
  const [form, setForm] = useState<ReviewInput>({
    name: "",
    email: "",
    company: "",
    rating: 0,
    comment: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset submission state when modal is opened
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setSubmitError(null);
      setErrors({});
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.company && form.company.trim().length > 100) e.company = "Company must be under 100 characters";
    if (!form.rating || form.rating < 1 || form.rating > 5) e.rating = "Please select a rating";
    if (!form.comment.trim()) e.comment = "Review is required";
    else if (form.comment.trim().length < 10) e.comment = "Review must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof ReviewInput, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setSubmitError(data.error || "Something went wrong. Please try again.");
        }
        return;
      }
      setSubmitted(true);
      onSuccess(data.review);
      // reset form after short delay for UX
      setForm({ name: "", email: "", company: "", rating: 0, comment: "" });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-[14px] bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0057B8] focus:ring-2 focus:ring-[#EAF4FF] transition-colors duration-200";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#071A33]/55 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-modal-title"
              className="relative w-full max-w-[560px] max-h-[90vh] overflow-hidden rounded-[20px] bg-white border border-slate-200 shadow-[0_20px_60px_rgba(7,26,51,0.18)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 px-6 md:px-7 pt-6 pb-4 border-b border-slate-100 shrink-0">
                <div>
                  <h3 id="review-modal-title" className="text-[18px] font-bold tracking-[-0.02em] text-[#071A33]">
                    Share your experience
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-slate-500 mt-1">
                    Your feedback helps us build better products.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-white hover:border-slate-300 hover:text-[#071A33] transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto px-6 md:px-7 py-6">
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EAF4FF] border border-[#D4E8FF] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-[#0057B8]" />
                    </div>
                    <h4 className="text-[17px] font-semibold tracking-[-0.01em] text-[#071A33] mt-4">
                      Thank you for your review!
                    </h4>
                    <p className="text-[13.5px] leading-[1.6] text-slate-500 mt-2 max-w-[360px] mx-auto">
                      Your testimonial has been submitted successfully. It will appear in our client reviews.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                          Name <span className="text-[#0057B8]">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your name"
                          className={inputClass}
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                          Email <span className="text-[#0057B8]">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="you@company.com"
                          className={inputClass}
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Company / Role <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="e.g. Product Manager, Acme Inc."
                        className={inputClass}
                      />
                      {errors.company && <p className="text-[11px] text-red-500 mt-1.5">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-2">
                        Rating <span className="text-[#0057B8]">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((n) => {
                            const active = (hoverRating || form.rating) >= n;
                            return (
                              <button
                                key={n}
                                type="button"
                                onMouseEnter={() => setHoverRating(n)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => handleChange("rating", n)}
                                aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                                className={`w-9 h-9 rounded-none border flex items-center justify-center transition-all ${
                                  active
                                    ? "bg-[#0057B8] border-[#0057B8] text-white shadow-sm"
                                    : "bg-slate-50 border-slate-200 text-slate-300 hover:border-[#D4E8FF] hover:text-amber-400"
                                }`}
                              >
                                <Star className={`w-4 h-4 ${active ? "fill-current" : ""}`} />
                              </button>
                            );
                          })}
                        </div>
                        <span className="text-[13px] text-slate-500 ml-2">
                          {form.rating ? `${form.rating}.0 / 5.0` : "Select rating"}
                        </span>
                      </div>
                      {errors.rating && <p className="text-[11px] text-red-500 mt-1.5">{errors.rating}</p>}
                    </div>

                    <div>
                      <label className="block text-[12px] font-medium text-slate-700 mb-1.5">
                        Review <span className="text-[#0057B8]">*</span>
                      </label>
                      <textarea
                        value={form.comment}
                        onChange={(e) => handleChange("comment", e.target.value)}
                        rows={4}
                        placeholder="Tell us about your experience working with Corex IT..."
                        className={`${inputClass} resize-none`}
                        maxLength={600}
                      />
                      <div className="flex items-center justify-between mt-1.5">
                        <span>
                          {errors.comment && <span className="text-[11px] text-red-500">{errors.comment}</span>}
                        </span>
                        <span className="text-[11px] text-slate-400">{form.comment.length}/600</span>
                      </div>
                    </div>

                    {submitError && (
                      <p className="text-[12px] text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-[#0057B8] text-white text-[14px] font-semibold hover:bg-[#003B7A] transition-colors shadow-[0_10px_28px_rgba(0,87,184,0.18)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Review <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      By submitting, you agree to our terms. We review submissions for spam.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
