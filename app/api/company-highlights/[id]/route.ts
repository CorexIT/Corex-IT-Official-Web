import { NextRequest, NextResponse } from "next/server";
import { verifyAdminIdToken, getAdminDb } from "@/lib/firebase-admin";

export async function DELETE(request: NextRequest, ctx: RouteContext<"/api/company-highlights/[id]">) {
  try {
    const { id } = await ctx.params;
    const authHeader = request.headers.get("Authorization");
    const admin = await verifyAdminIdToken(authHeader);
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getAdminDb();
    await db.collection("company_highlights").doc(id).delete();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[company-highlights] Error deleting highlight:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, ctx: RouteContext<"/api/company-highlights/[id]">) {
  try {
    const { id } = await ctx.params;
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
    await db.collection("company_highlights").doc(id).update({
      value,
      suffix: effectiveSuffix,
      label: effectiveLabel,
      description: effectiveDescription,
      sortOrder: sortOrder,
      isActive: isActive !== false,
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      id,
      value,
      suffix: effectiveSuffix,
      label: effectiveLabel,
      description: effectiveDescription,
      sortOrder,
      isActive: isActive !== false,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[company-highlights] Error updating highlight:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}