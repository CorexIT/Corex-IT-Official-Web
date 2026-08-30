import { NextRequest, NextResponse } from "next/server";
import { initialReviews, validateReviewInput, type Review } from "@/lib/reviews";

// In-memory store that survives HMR in dev via globalThis
declare global {
  var __corexReviews: Review[] | undefined;
}

function getStore(): Review[] {
  if (!globalThis.__corexReviews) {
    // Clone to avoid mutating the exported constant
    globalThis.__corexReviews = [...initialReviews];
  }
  return globalThis.__corexReviews;
}

export async function GET() {
  const store = getStore();
  // Sort newest first
  const sorted = [...store].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json({ reviews: sorted }, { status: 200 });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { valid, errors, value } = validateReviewInput(body);
  if (!valid || !value) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const newReview: Review = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: value.name,
    email: value.email,
    company: value.company,
    rating: value.rating,
    comment: value.comment,
    imageUrl: value.imageUrl,
    createdAt: new Date().toISOString(),
  };

  const store = getStore();
  store.unshift(newReview);

  return NextResponse.json({ review: newReview, reviews: store }, { status: 201 });
}
