export type Review = {
  id: string;
  name: string;
  email: string;
  company?: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string; // ISO string
  imageUrl?: string;
};

export type ReviewInput = Omit<Review, "id" | "createdAt">;

export type ReviewsResponse = {
  reviews: Review[];
};

// Initial seed data — premium enterprise testimonials that match Corex IT tone.
// This is NOT hardcoded final data; it serves as fallback/seed and is replaced
// once connected to a real database. POST /api/reviews will persist new entries
// in-memory (and to file when available) so UI updates dynamically.
// imageUrl is data-driven — change the URL to update the customer's photo.
export const initialReviews: Review[] = [
  {
    id: "1",
    name: "Amal Perera",
    email: "amal@nexus.example",
    company: "Operations Director, Nexus Analytics",
    rating: 5,
    comment:
      "Corex IT delivered our analytics platform on time with exceptional quality. Clean architecture, clear communication, and a team that truly owns the outcome.",
    createdAt: "2024-11-02T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Sarah Fernando",
    email: "sarah@retail.example",
    company: "Founder, MarketPlace Pro",
    rating: 5,
    comment:
      "From discovery to deployment, the process was transparent and disciplined. Our e-commerce platform scales beautifully and the support has been outstanding.",
    createdAt: "2024-10-18T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "David Wijesinghe",
    email: "david@careportal.example",
    company: "CTO, CarePortal Health",
    rating: 5,
    comment:
      "The Corex team understood our compliance and UX requirements deeply. They built a secure, maintainable system we can confidently scale.",
    createdAt: "2024-09-25T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Nimali Jayawardene",
    email: "nimali@edu.example",
    company: "Product Lead, Edu Platform",
    rating: 4,
    comment:
      "Professional, responsive, and quality-focused. Our new learning management features were shipped without disruption to existing users.",
    createdAt: "2024-08-14T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Ravindu Silva",
    email: "ravindu@logistics.example",
    company: "CEO, LogiTrack",
    rating: 5,
    comment:
      "Engineering discipline that shows. Code reviews, documentation, and performance have all been top-tier. A partnership we trust.",
    createdAt: "2024-07-30T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "Emily Carter",
    email: "emily@startup.example",
    company: "Founder, StartUp Studio",
    rating: 5,
    comment:
      "Corex IT turned our idea into a polished product in weeks. Their UI/UX and backend craft made fundraising easy — investors noticed.",
    createdAt: "2024-07-10T10:00:00.000Z",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
];

export function validateReviewInput(data: unknown): {
  valid: boolean;
  errors: Partial<Record<keyof ReviewInput, string>>;
  value?: ReviewInput;
} {
  const errors: Partial<Record<keyof ReviewInput, string>> = {};
  if (!data || typeof data !== "object") {
    return { valid: false, errors: { comment: "Invalid payload" } };
  }
  const d = data as Record<string, unknown>;
  const name = typeof d.name === "string" ? d.name.trim() : "";
  const email = typeof d.email === "string" ? d.email.trim() : "";
  const company = typeof d.company === "string" ? d.company.trim() : "";
  const rating = typeof d.rating === "number" ? d.rating : Number(d.rating);
  const comment = typeof d.comment === "string" ? d.comment.trim() : "";
  const imageUrl = typeof d.imageUrl === "string" ? d.imageUrl.trim() : "";

  if (!name) errors.name = "Name is required";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters";
  else if (name.length > 80) errors.name = "Name must be under 80 characters";

  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address";

  if (company && company.length > 100) errors.company = "Company must be under 100 characters";

  if (imageUrl && imageUrl.length > 800) errors.imageUrl = "Image URL must be under 800 characters";
  else if (imageUrl && !/^https?:\/\/.+\..+/.test(imageUrl)) errors.imageUrl = "Image URL must be a valid http(s) URL";

  if (!rating || Number.isNaN(rating)) errors.rating = "Rating is required";
  else if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    errors.rating = "Rating must be between 1 and 5";

  if (!comment) errors.comment = "Review is required";
  else if (comment.length < 10) errors.comment = "Review must be at least 10 characters";
  else if (comment.length > 600) errors.comment = "Review must be under 600 characters";

  if (Object.keys(errors).length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: {},
    value: { name, email, company: company || undefined, rating, comment, imageUrl: imageUrl || undefined },
  };
}
