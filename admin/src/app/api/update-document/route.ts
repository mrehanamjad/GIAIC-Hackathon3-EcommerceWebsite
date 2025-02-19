import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { documentId, updatedFieldObj } = body;
    console.log(documentId ,updatedFieldObj);
    if (!documentId || !updatedFieldObj || typeof updatedFieldObj !== "object") {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    const updateDoc = await client
      .patch(documentId)
      .set(updatedFieldObj)
      .commit();

    return NextResponse.json({ success: true, data: updateDoc }, { status: 200 });
  } catch (error) {
    console.error("Sanity Update Error:", error);
    return NextResponse.json(
      { error: "Failed to update document" },
      { status: 500 }
    );
  }
}
