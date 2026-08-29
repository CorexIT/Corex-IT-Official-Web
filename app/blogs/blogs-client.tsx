"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs, blogCategories } from "@/lib/blogs";

export default function BlogsClient() {
  const [active, setActive] = useState<(typeof blogCategories)[number]>("All");

  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <div className="bg-white">
      <section className="bg-[#F8F8F8] border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0057B8] mb-4">
            <span className="w-8 h-px bg-[#0057B8]" />
            Blogs
          </span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#071A33] max-w-[720px]">
            Insights on
            <br />
            <span className="font-light">building better software.</span>
          </h1>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[560px] mt-4">
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
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
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
