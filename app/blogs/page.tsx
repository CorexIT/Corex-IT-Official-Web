import type { Metadata } from "next";
import BlogsClient from "./blogs-client";

export const metadata: Metadata = {
  title: "Blogs — Corex IT",
  description:
    "Insights from Corex IT — technology, software development, web, mobile, UI/UX, AI and cloud.",
};

export default function BlogsPage() {
  return <BlogsClient />;
}
