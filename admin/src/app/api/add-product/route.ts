import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { ProductFormValues } from "@/components/forms/productForm";


export async function POST(req: Request) {
  try {
    const body:ProductFormValues = await req.json();

    // Validate required fields
    if (!body?.name || !body.description || !body?.price || !body?.imagePath || !body?.category || !body?.stockLevel) {
      return NextResponse.json(
        { error: "Missing required fields: name, description, price, image, category, stockLevel" },
        { status: 400 }
      );
    }


    // Create product in Sanity
    const createdProduct = await client.create({
      _type: "product",
      ...body,
    });

    return NextResponse.json({ success: true, data: createdProduct }, { status: 201 });
  } catch (error: any) {
    console.error("Sanity :: Add Product :: Error:", error.message);
    return NextResponse.json(
      { error: "Failed to add product", details: error.message },
      { status: 500 }
    );
  }
}
