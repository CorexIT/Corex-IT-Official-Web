"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs, blogCategories } from "@/lib/blogs";

export default function BlogsClient() {
  const [active, setActive] = useState<(typeof blogCategories)[number]>("All");

  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <div className="bg-white">
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

          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white max-w-[720px]">
            Insights on
            <br />
            <span className="font-light text-white/90">building better software.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-white/70 max-w-[560px] mt-4">
            Practical notes on technology, development and product design from the Corex IT team. Demo content below — replace with verified Corex IT articles.
          </p>
        </div>
      </section>

      <div className="sticky top-[68px] md:top-[84px] z-20 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-4">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-2 rounded-none text-[13px] font-medium border transition-colors ${
                  active === cat
                    ? "bg-[#0057B8] border-[#0057B8] text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-[#071A33]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10 md:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[16px] bg-white border border-slate-200 hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(7,26,51,0.06)] transition-all"
            >
              <div className="relative h-[200px] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur border border-white/20 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#071A33]">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] tracking-[0.08em] uppercase text-slate-400">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} {post.author ? `· ${post.author}` : ""}
                </p>
                <h3 className="text-[16px] font-semibold leading-[1.4] tracking-[-0.01em] text-[#071A33] mt-2 group-hover:text-[#0057B8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate-500 mt-2 line-clamp-2 flex-1">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#071A33] group-hover:text-[#0057B8] transition-colors">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-[14px] border border-dashed border-slate-200 bg-[#F8F8F8] p-10 text-center">
            <p className="text-[14px] text-slate-500">No articles in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
