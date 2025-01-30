import { NextResponse } from "next/server";
import { client } from '@/sanity/lib/client'; 


export async function GET() {
  try {
    // Fetch all products from Sanity
    const query = `*[_type == "product"]{id, name}`;
    const products: { id: string; name: string }[] = await client.fetch(query);

    if (products.length === 0) {
      return NextResponse.json({ message: "No products found." });
    }

    // Identify duplicates (grouping by name)
    const productMap: Map<string, string[]> = new Map();

    for (const product of products) {
      const { name, id } = product;
      if (!productMap.has(name)) {
        productMap.set(name, []);
      }
      productMap.get(name)!.push(id);
    }

    // Prepare delete mutations for duplicates (keeping one)
    const deleteMutations: { delete: { id: string } }[] = [];

    for (const [, ids] of Array.from(productMap.entries())) {
        if (ids.length > 1) {
          const idsToDelete: string[] = ids.slice(1); // Keep one, delete the rest
          idsToDelete.forEach((id: string) => {
            deleteMutations.push({ delete: { id } });
          });
        }
      }
      

    if (deleteMutations.length === 0) {
      return NextResponse.json({ message: "No duplicates found." });
    }

    // Execute delete mutations
    await client.mutate(deleteMutations);

    return NextResponse.json({
      message: `Deleted ${deleteMutations.length} duplicate products.`,
    });
  } catch (error) {
    console.error("Error deleting duplicates:", error);
    return NextResponse.json(
      { error: "Failed to delete duplicates." },
      { status: 500 }
    );
  }
}
