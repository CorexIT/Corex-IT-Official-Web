"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

export const ContactSection = () => {
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@corexit.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
            Have an idea?
            <br />
            Let&apos;s build something extraordinary.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch and let&apos;s
            discuss how Corex IT can help bring your project to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-5 w-5 text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-1">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-12 text-center">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-3">Message Sent</h3>
                <p className="text-zinc-400">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-500 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-500 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-500 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-zinc-500 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium tracking-[0.1em] transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
