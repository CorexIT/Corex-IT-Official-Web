import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getRelatedBlogs, blogs } from "@/lib/blogs";

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return { title: `${post.title} — Corex IT Blogs`, description: post.excerpt };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  const related = getRelatedBlogs(slug);

  return (
    <div className="bg-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-10 pt-10 md:pt-14">
        <Link href="/blogs" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-[#0057B8] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Blogs
        </Link>
        <div className="mt-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#D4E8FF] text-[11px] font-semibold tracking-[0.06em] uppercase text-[#0057B8]">
            {post.category}
          </span>
          <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#071A33] mt-4">{post.title}</h1>
          <p className="text-[13px] tracking-[0.06em] uppercase text-slate-400 mt-4">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} {post.author ? `· ${post.author}` : ""}
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 mt-8">
        <div className="overflow-hidden rounded-[16px] border border-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.title} className="w-full h-[360px] md:h-[440px] object-cover" />
        </div>
      </div>

      <article className="max-w-[800px] mx-auto px-6 lg:px-10 py-10 md:py-12">
        <div
          className="prose prose-slate max-w-none prose-headings:tracking-[-0.02em] prose-headings:text-[#071A33] prose-h2:text-[22px] prose-h2:font-bold prose-h3:text-[18px] prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-slate-600 prose-li:text-[14.5px] prose-li:leading-[1.7] prose-a:text-[#0057B8] hover:prose-a:text-[#003B7A]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <p className="mt-8 rounded-[12px] bg-[#EAF4FF] border border-[#D4E8FF] px-4 py-3 text-[12px] leading-[1.6] text-[#071A33]">
          <span className="font-semibold">Demo disclosure:</span> This article is placeholder demo content to showcase the Blogs layout. Replace with verified Corex IT content before publishing.
        </p>
      </article>

      {related.length > 0 && (
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 pb-12">
          <h3 className="text-[13px] font-semibold tracking-[0.12em] uppercase text-[#071A33] mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((b) => (
              <Link key={b.slug} href={`/blogs/${b.slug}`} className="group flex gap-4 rounded-[14px] border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt={b.title} className="w-24 h-20 object-cover rounded-[10px] shrink-0" />
                <div>
                  <p className="text-[11px] tracking-[0.06em] uppercase text-[#0057B8] font-semibold">{b.category}</p>
                  <h4 className="text-[14px] font-semibold leading-[1.4] text-[#071A33] group-hover:text-[#0057B8] transition-colors line-clamp-2">{b.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-[800px] mx-auto px-6 lg:px-10 pb-16">
        <div className="rounded-[18px] bg-[#071A33] text-white p-8 text-center">
          <h3 className="text-[18px] font-bold">Have a question?</h3>
          <p className="text-[14px] leading-[1.6] text-white/70 mt-2">Reach out to discuss your project or learn more about our approach.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#071A33] text-[13px] font-semibold hover:bg-white/95 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
