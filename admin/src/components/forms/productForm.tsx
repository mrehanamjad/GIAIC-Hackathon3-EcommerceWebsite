"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ProductI } from "@/app/dashboard/all-products/page"
import axios from "axios"

export interface ProductFormValues {
  id: string
  name: string
  imagePath: string
  price: number
  description: string
  discountPercentage: number
  isFeaturedProduct: boolean
  stockLevel: number
  category: string
}

export default function ProductForm({ documentId, product }: { documentId?:string; product?: ProductFormValues }) {
  const [Loading, setLoading] = useState(false)
  const [message, setMessage] = useState<({mess:string;color:string} | null)>(null);
  
  const generateProductId = (name: string) => {
    const randomNum = Math.floor(10000 + Math.random() * 90000) // 5-digit number
    const formattedName = name.replace(/\s+/g, "-").toLowerCase() // Remove spaces, convert to lowercase
    const truncatedName = formattedName.substring(0, 28) // Ensure max length (37 - "p-XXXXX-" = 28)
    return `p-${randomNum}-${truncatedName}`
  }

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ProductFormValues>({
    defaultValues: product || {},
  })

  const productName = watch("name", "")

  useEffect(() => {
    if (!product) {
      setValue("id", generateProductId(productName))
    }
  }, [productName, product, setValue])

  const onSubmit = async (data: ProductFormValues ) => {
    setLoading(true);
    setMessage(null);
  
    try {
      if (product) {
        const response = await axios.post("/api/update-document", {
          documentId: documentId,
          updatedFieldObj: data, 
        });
  
        if (response.data.success) {
          setMessage({ mess: "Status updated successfully!", color: "#30c049" });
        } else {
          setMessage({ mess: "Failed to update status.", color: "#ef5656" });
        }
      } else {
        const response = await axios.post("/api/add-document", data);
  
        if (response.data.success) {
          setMessage({ mess: "Product added successfully!", color: "#30c049" });
        } else {
          setMessage({ mess: "Failed to add product.", color: "#ef5656" });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ mess: "An error occurred while processing.", color: "#ef5656" });
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="max-w-7xl w-full mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">{product ? "Edit Product" : "Add New Product"}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>Product ID</label>
            <Input readOnly placeholder="Generated ID" {...register("id")} />
          </div>
          <div>
            <label>Product Name</label>
            <Input placeholder="Enter product name" {...register("name", { required: "Name is required" })} />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>
          <div>
            <label>Image URL</label>
            <Input placeholder="Enter image URL" {...register("imagePath", { required: "Image URL is required" })} />
            <p className="text-red-500">{errors.imagePath?.message}</p>
          </div>
          <div>
            <label>Price</label>
            <Input type="number" placeholder="Enter price" {...register("price", { required: "Price is required" })} />
            <p className="text-red-500">{errors.price?.message}</p>
          </div>
          <div>
            <label>Category</label>
            <Input placeholder="Enter product category" {...register("category", { required: "Category is required" })} />
            <p className="text-red-500">{errors.category?.message}</p>
          </div>
          <div>
            <label>Discount Percentage</label>
            <Input type="number" placeholder="Enter discount percentage" {...register("discountPercentage", { required: "Discount percentage is required" })} />
            <p className="text-red-500">{errors.discountPercentage?.message}</p>
          </div>
          <div>
            <label>Stock Level</label>
            <Input type="number" placeholder="Enter stock level" {...register("stockLevel", { required: "Stock level is required" })} />
            <p className="text-red-500">{errors.stockLevel?.message}</p>
          </div>
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <label className="text-base">Featured Product</label>
            <Switch {...register("isFeaturedProduct")} />
          </div>
        </div>
        <div>
          <label>Description</label>
          <Textarea placeholder="Enter product description" {...register("description", { required: "Description is required" })} />
          <p className="text-red-500">{errors.description?.message}</p>
        </div>
        <Button type="submit" disabled={Loading}>
          {Loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {Loading ? "Adding Product..." : "Add Product"}
        </Button>
        {message && <p className={`text-sm text-center `} style={{ color: message.color }} >{message.mess}</p>}
      </form>
    </div>
  )
}
