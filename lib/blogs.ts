export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author?: string;
  image: string;
  content: string; // html or markdown-like
};

export const blogs: Blog[] = [
  {
    slug: "modern-web-architecture-2024",
    title: "Modern Web Architecture for Scale",
    excerpt:
      "How we structure Next.js applications for performance, maintainability and growth — from routing to data fetching.",
    category: "Web Development",
    date: "2024-11-12",
    author: "Corex IT Engineering",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Why architecture matters</h2>
<p>As web applications grow, early architectural decisions compound. A clear structure keeps teams productive and performance predictable.</p>
<h3>Demo Content — Replace with real Corex IT insights</h3>
<p><em>This article is placeholder demo content to showcase the Blogs layout. Replace with verified Corex IT expertise.</em></p>
<h3>Key principles</h3>
<ul>
<li>Component-driven development with clear boundaries</li>
<li>Server-first data fetching where it reduces client complexity</li>
<li>Consistent error handling and observability</li>
</ul>
<p>We apply these principles using Next.js, TypeScript and modern tooling, tailoring the stack to product needs rather than trends.</p>
<h3>Takeaway</h3>
<p>Architecture is not about choosing the newest library — it is about making future changes safer and faster.</p>
`,
  },
  {
    slug: "mobile-cross-platform-strategy",
    title: "Choosing Cross-Platform for Mobile",
    excerpt:
      "React Native vs Flutter vs native — a pragmatic framework for deciding what fits your product and team.",
    category: "Mobile Development",
    date: "2024-10-28",
    author: "Corex IT Engineering",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7dfb?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Cross-platform in practice</h2>
<p>Cross-platform can accelerate delivery, but only when the trade-offs are understood upfront.</p>
<h3>Demo Content</h3>
<p><em>Placeholder demo — replace with Corex IT mobile expertise.</em></p>
<ul>
<li>Shared logic where it truly is shared</li>
<li>Native capabilities when they improve the experience</li>
<li>Testing across real devices early</li>
</ul>
<p>The right choice depends on team skill, performance needs and long-term maintenance considerations.</p>
`,
  },
  {
    slug: "api-design-best-practices",
    title: "API Design That Ages Well",
    excerpt:
      "Designing APIs with clear contracts, versioning and documentation that supports long-term product evolution.",
    category: "Software Development",
    date: "2024-09-15",
    author: "Corex IT Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Contracts over implementation</h2>
<p>An API is a promise. Stable contracts let frontends and integrations evolve without fear.</p>
<h3>Demo Content</h3>
<p><em>Placeholder demo content.</em></p>
<ul>
<li>Explicit versioning and deprecation paths</li>
<li>Consistent error shapes and status codes</li>
<li>Documentation as part of delivery</li>
</ul>
`,
  },
  {
    slug: "ui-ux-design-systems",
    title: "Design Systems for Growing Products",
    excerpt:
      "How a consistent design system reduces rework and helps teams ship accessible, coherent interfaces.",
    category: "UI/UX",
    date: "2024-08-20",
    author: "Corex IT Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>System, not pages</h2>
<p>Design systems turn one-off screens into reusable, testable building blocks.</p>
<h3>Demo Content</h3>
<p><em>Demo placeholder — replace with real Corex IT design insights.</em></p>
<ul>
<li>Tokens for color, spacing and typography</li>
<li>Component documentation with usage guidance</li>
<li>Accessibility as a default, not an afterthought</li>
</ul>
`,
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Without Compromise",
    excerpt:
      "Practical approaches to keeping cloud bills predictable while maintaining reliability and scalability.",
    category: "Cloud",
    date: "2024-07-10",
    author: "Corex IT Engineering",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c429?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Visibility first</h2>
<p>You cannot optimize what you cannot see. Cost visibility is the foundation for any cloud strategy.</p>
<h3>Demo Content</h3>
<p><em>Demo placeholder.</em></p>
<ul>
<li>Tagging and cost allocation</li>
<li>Right-sizing and autoscaling</li>
<li>Observability tied to spend</li>
</ul>
`,
  },
  {
    slug: "ai-in-product-development",
    title: "Practical AI in Product Development",
    excerpt:
      "Where AI genuinely helps product teams — and where it does not — based on current capabilities.",
    category: "AI",
    date: "2024-06-05",
    author: "Corex IT Engineering",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Beyond the hype</h2>
<p>AI is most valuable when it augments human workflows rather than replaces them.</p>
<h3>Demo Content</h3>
<p><em>Demo placeholder — replace with Corex IT perspective.</em></p>
<ul>
<li>Assistive features over autonomous decisions</li>
<li>Data quality as a prerequisite</li>
<li>Evaluation before scale</li>
</ul>
`,
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, limit = 2) {
  return blogs.filter((b) => b.slug !== currentSlug).slice(0, limit);
}

export const blogCategories = [
  "All",
  "Technology",
  "Software Development",
  "Web Development",
  "Mobile Development",
  "UI/UX",
  "AI",
  "Cloud",
] as const;
