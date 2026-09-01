// Firestore collection types for existing project corexit-652f5
import type { Timestamp } from "firebase/firestore";

// testimonials collection
// status controls public visibility: only "published" are shown on public site
// "pending" = customer-submitted via one-time link, awaiting admin review (not visible publicly)
export type TestimonialStatus = "published" | "hidden" | "pending";

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  designation: string;
  comment: string;
  imageUrl?: string;
  rating: number; // 1-5
  status: TestimonialStatus;
  createdAt: Timestamp | Date | string;
};

export type TestimonialInput = {
  name: string;
  company: string;
  designation: string;
  comment: string;
  imageUrl?: string;
  rating: number;
  status: TestimonialStatus;
};

// contact_messages collection
export type ContactMessageStatus = "new" | "read" | "replied";

export type ContactMessage = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  status: ContactMessageStatus;
  createdAt: Timestamp | Date | string;
};

export type ContactMessageInput = Omit<ContactMessage, "id" | "status" | "createdAt"> & {
  status?: ContactMessageStatus;
};

// settings collection — single doc e.g. settings/company
export type CompanySettings = {
  email: string;
  phone: string;
  address: string;
  facebook: string;
  github: string;
  tiktok: string;
  linkedin: string;
  // allow extension
  [key: string]: string;
};

// One-time testimonial invite links (admin-generated, single-use)
// Secure model: raw token is never stored; only tokenHash is persisted.
// Doc id = tokenHash, fields follow spec: status, createdAt, expiresAt, usedAt, createdBy, tokenHash
export type TestimonialInviteStatus = "unused" | "used";

export type TestimonialInvite = {
  id: string; // tokenHash (doc id)
  tokenHash: string;
  token?: string; // deprecated legacy: plain token (kept for backward compat read)
  status: TestimonialInviteStatus;
  createdAt: Timestamp | Date | string;
  expiresAt: Timestamp | Date | string;
  usedAt?: Timestamp | Date | string | null;
  createdBy?: string | null;
  note?: string;
  // legacy boolean fields for compat
  used?: boolean;
  tokenHashLegacy?: string;
};

export type TestimonialInviteInput = {
  token: string;
  tokenHash?: string;
  expiresAt?: Date | null;
  note?: string;
};

export const COLLECTIONS = {
  testimonials: "testimonials",
  contactMessages: "contact_messages",
  settings: "settings",
  testimonialInvites: "testimonial_invites",
} as const;

export const SETTINGS_DOC_ID = "company";
export const SETTINGS_DOC_PATH = `${COLLECTIONS.settings}/${SETTINGS_DOC_ID}`;
