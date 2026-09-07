import { NextRequest, NextResponse } from "next/server";
import { verifyAdminIdToken, getAdminDb } from "@/lib/firebase-admin";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    const admin = await verifyAdminIdToken(authHeader);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getAdminDb();
    const snap = await db.collection("company_highlights").orderBy("sortOrder", "asc").get();

    const highlights = snap.docs.map((doc) => ({
      id: doc.id,
      value: doc.data().value,
      suffix: doc.data().suffix,
      label: doc.data().label,
      description: doc.data().description,
      sortOrder: doc.data().sortOrder,
      isActive: doc.data().isActive,
      createdAt: doc.data().createdAt,
      updatedAt: doc.data().updatedAt,
    }));

    return NextResponse.json({ highlights });
  } catch (err) {
    console.error("[company-highlights] Error fetching highlights:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("Authorization");
    const admin = await verifyAdminIdToken(authHeader);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { value, suffix, label, description, sortOrder, isActive } = body;

    // Validate required fields
    if (typeof value !== "number" || value < 0) {
      return NextResponse.json(
        { error: "Value must be a non-negative number" },
        { status: 400 }
      );
    }
    if (!label || typeof label !== "string" || label.trim() === "") {
      return NextResponse.json(
        { error: "Label is required" },
        { status: 400 }
      );
    }
    if (!description || typeof description !== "string" || description.trim() === "") {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }
    if (typeof sortOrder !== "number" || sortOrder < 0) {
      return NextResponse.json(
        { error: "Sort order must be a non-negative integer" },
        { status: 400 }
      );
    }

    const effectiveSuffix = suffix || "";
    const effectiveLabel = label.trim();
    const effectiveDescription = description.trim();

    const db = getAdminDb();
    const docRef = await db.collection("company_highlights").add({
      value,
      suffix: effectiveSuffix,
      label: effectiveLabel,
      description: effectiveDescription,
      sortOrder,
      isActive: isActive !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      id: docRef.id,
      value,
      suffix: effectiveSuffix,
      label: effectiveLabel,
      description: effectiveDescription,
      sortOrder,
      isActive: isActive !== false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[company-highlights] Error creating highlight:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}