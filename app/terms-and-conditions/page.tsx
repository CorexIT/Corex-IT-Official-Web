import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — Corex IT",
  description:
    "Terms & Conditions for Corex IT — acceptance of terms, services, intellectual property, payment terms, confidentiality, liability, warranties, termination, governing law and contact.",
};

const sections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    number: "1",
    content: [
      "Welcome to Corex IT. By accessing or using our website, services, and any related content, features, or applications provided by Corex IT (\"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms & Conditions.",
      "If you do not agree with these Terms, please do not use our website or services. Your continued use of our website after any updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "services",
    title: "Services",
    number: "2",
    content: [
      "Corex IT provides professional software development, web and mobile application development, UI/UX design, cloud and DevOps, and related IT consulting services. Service descriptions, timelines, and deliverables are agreed upon through proposals, statements of work, or written communication.",
      "We reserve the right to modify, suspend, or discontinue any service or feature at any time. Where applicable, we will communicate changes to affected clients in advance.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    number: "3",
    content: [
      "Unless otherwise stated in a written agreement, the website's design, layout, graphics, logos (including COREX IT branding), text, and other content are owned by Corex IT or our licensors and are protected by intellectual property laws.",
      "Client-specific deliverables, source code, and assets are transferred or licensed as specified in the relevant project agreement. You may not reproduce, distribute, or create derivative works from our content without prior written permission, except as expressly allowed for normal browsing.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    number: "4",
    content: [
      "When you engage our services or submit information through our website (such as contact forms or project inquiries), you agree to provide accurate, current, and complete information and to keep it updated.",
      "You are responsible for maintaining the confidentiality of any credentials or access we provide and for all activities that occur under your account. You agree to notify us promptly of any unauthorized use.",
      "You agree not to use our services for any unlawful, abusive, or fraudulent purpose, and to comply with all applicable laws and regulations in Sri Lanka and your jurisdiction.",
    ],
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    number: "5",
    content: [
      "Fees, payment schedules, and milestones are detailed in the proposal or invoice. Payments are due as per the agreed terms. Late payments may be subject to reminders and, where agreed, interest or suspension of work until settlement.",
      "Any estimates provided are based on the scope understood at the time of proposal. Changes in scope, third-party costs, or client-requested additions may affect the final price and will be communicated before proceeding.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    number: "6",
    content: [
      "Each party agrees to protect confidential information disclosed by the other party, whether marked as confidential or reasonably understood to be confidential. This includes business information, source code, designs, and technical data.",
      "Confidential information shall not be disclosed to third parties without prior written consent, except to employees or contractors who need to know and are bound by confidentiality obligations, or as required by law.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    number: "7",
    content: [
      "To the fullest extent permitted by law, Corex IT, its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use, arising out of or related to your use of the website or services.",
      "Our total liability for any claim arising from the website or services shall not exceed the amount paid by you, if any, for the specific service giving rise to the claim in the three months preceding the claim.",
    ],
  },
  {
    id: "warranties-and-disclaimers",
    title: "Warranties and Disclaimers",
    number: "8",
    content: [
      "Our website and services are provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not warrant that the website will be uninterrupted, error-free, or free from harmful components, or that defects will be corrected. We strive to keep information accurate but do not guarantee completeness or reliability for every purpose.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    number: "9",
    content: [
      "We may suspend or terminate your access to the website or services at any time if you breach these Terms or if we are required to do so by law. You may also discontinue use of our website at any time.",
      "Upon termination, your right to use the website will cease immediately, but provisions that by their nature should survive (such as intellectual property, confidentiality, and limitation of liability) will remain in effect.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    number: "10",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka, without regard to its conflict of law principles.",
      "Any dispute arising out of or in connection with these Terms or your use of the website or services shall be submitted to the competent courts located in Colombo, Sri Lanka.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    number: "11",
    content: [
      "If you have questions about these Terms & Conditions, please contact us. We are here to help clarify any aspect of our services and policies.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero — premium blue consistent with Blog/Contact heroes */}
      <section className="relative overflow-hidden bg-[#071A33] border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#0A2450] to-[#040E1F]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_75%_20%,rgba(0,87,184,0.18),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_15%_75%,rgba(59,130,246,0.10),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute -top-24 right-[-8%] w-[560px] h-[560px] rounded-full bg-[#0057B8]/18 blur-[60px]" />
          <div className="absolute -bottom-24 left-[-6%] w-[480px] h-[480px] rounded-full bg-white/[0.04] blur-[40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50 mb-3">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white max-w-[720px]">
            Terms &amp; Conditions
          </h1>
          <p className="text-[13px] leading-[1.6] text-white/60 mt-3 max-w-[560px]">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Content with Table of Contents */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Table of Contents — sticky on desktop, stacked on mobile */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[12px] bg-[#F8F8F8] border border-[#E5E7EB] p-5 md:p-6">
                <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-4">Contents</h2>
                <nav className="space-y-1.5" aria-label="Table of contents">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 py-1.5 text-[13px] leading-[1.4] text-slate-600 hover:text-[#0057B8] transition-colors group"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.06em] text-slate-400 group-hover:text-[#0057B8] transition-colors">
                        {s.number}.
                      </span>
                      <span className="flex-1">{s.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="hidden lg:block mt-4 rounded-[12px] bg-[#EAF4FF] border border-[#D4E8FF] p-4">
                <p className="text-[12px] font-semibold text-[#071A33]">Need help?</p>
                <p className="text-[12px] leading-[1.6] text-slate-600 mt-1">Questions about these terms? We&apos;re here to clarify.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0057B8] hover:text-[#003B7A] mt-2">
                  Contact us
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Document */}
          <div className="lg:col-span-8">
            <div className="max-w-[760px]">
              <div className="space-y-0 divide-y divide-slate-100">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 py-8 first:pt-0">
                    <h2 className="flex items-baseline gap-3 text-[18px] md:text-[20px] font-bold tracking-[-0.02em] text-[#071A33]">
                      <span className="text-[13px] font-bold tracking-[0.06em] text-[#0057B8]">{section.number}.</span>
                      {section.title}
                    </h2>
                    <div className="mt-3 space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-[14.5px] leading-[1.8] text-slate-600">
                          {paragraph}
                        </p>
                      ))}
                      {section.id === "contact" && (
                        <div className="mt-5 rounded-[12px] bg-[#EAF4FF] border border-[#D4E8FF] p-5">
                          <p className="text-[13px] leading-[1.7] text-slate-700">
                            <span className="font-semibold text-[#071A33]">Corex IT</span>
                            <br />
                            Colombo, Sri Lanka
                            <br />
                            Email:{" "}
                            <a href="mailto:hello@corexit.com" className="text-[#0057B8] hover:text-[#003B7A] transition-colors">
                              hello@corexit.com
                            </a>
                            <br />
                            Website:{" "}
                            <Link href="/" className="text-[#0057B8] hover:text-[#003B7A] transition-colors">
                              corexit.com
                            </Link>
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* Privacy Policy link */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#071A33] hover:text-[#0057B8] transition-colors group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform group-hover:-translate-x-0.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Privacy Policy
                </Link>
                <div className="flex gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-none bg-[#0057B8] text-white text-[13px] font-semibold hover:bg-[#003B7A] transition-colors"
                  >
                    Contact us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-none border border-slate-200 bg-white text-[#071A33] text-[13px] font-semibold hover:border-slate-300 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
