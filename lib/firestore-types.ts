// Firestore collection types for existing project corexit-652f5
import type { Timestamp } from "firebase/firestore";

// testimonials collection
// status controls public visibility: only "published" are shown on public site
export type TestimonialStatus = "published" | "hidden";

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

export const COLLECTIONS = {
  testimonials: "testimonials",
  contactMessages: "contact_messages",
  settings: "settings",
} as const;

export const SETTINGS_DOC_ID = "company";
export const SETTINGS_DOC_PATH = `${COLLECTIONS.settings}/${SETTINGS_DOC_ID}`;
