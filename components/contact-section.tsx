"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const { ref: sectionRef, isInView } = useInView();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClass =
    "w-full px-4 py-3.5 text-[14px] bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-colors duration-300";

  return (
    <section id="contact" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-blue-600 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 mb-8"
            >
              Have an idea
              <br />
              worth building?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] leading-[1.75] text-slate-500 max-w-md mb-12"
            >
              Let&apos;s turn your idea into a digital product. Get in touch and
              let&apos;s discuss how Corex IT can bring your vision to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400 mb-0.5">Email</p>
                  <p className="text-[14px] text-slate-700 font-medium">hello@corexit.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[12px] text-slate-400 mb-0.5">Location</p>
                  <p className="text-[14px] text-slate-700 font-medium">San Francisco, CA</p>
                </div>
              </div>

              <a
                href="mailto:hello@corexit.com"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300 mt-4 group"
              >
                Start a conversation
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-slate-900 mb-2">Message Sent</h3>
                  <p className="text-[14px] text-slate-500">
                    Thank you for reaching out. We&apos;ll respond within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] text-slate-500 mb-2 tracking-[0.05em]">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={inputClass}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[12px] text-slate-500 mb-2 tracking-[0.05em]">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1.5">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] text-slate-500 mb-2 tracking-[0.05em]">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className={inputClass}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-[11px] mt-1.5">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-[12px] text-slate-500 mb-2 tracking-[0.05em]">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1.5">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-[13px] font-medium tracking-[0.05em] bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
