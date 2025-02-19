"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  orderStatus: string;
  paymentStatus: string;
}

export default function UpdateStatus({
  orderId,
  orderStat,
  paymentStat,
}: {
  orderId: string;
  orderStat: string;
  paymentStat: string;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<({mess:string;color:string} | null)>(null);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  // Ensure form is initialized with the provided values
  useEffect(() => {
    setValue("orderStatus", orderStat);
    setValue("paymentStatus", paymentStat);
  }, [orderStat, paymentStat, setValue]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage(null);

    try {
      console.log(data);
      const response = await axios.post("/api/update-document", {
        documentId: orderId,
        updatedFieldObj: data
      });

      if (response.data.success) {
        setMessage({mess: "Status updated successfully!",color:'#30c049'});
      } else {
        setMessage({mess: "Failed to update status.",color: '#ef5656'});
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({mess:"An error occurred while updating.",color: '#ef5656'});
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Update</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Update Status</h4>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="order-status" className="text-sm">
                Order Status
              </label>
              <Select
                onValueChange={(value) => setValue("orderStatus", value)}
                defaultValue={orderStat}
              >
                <SelectTrigger id="order-status">
                  <SelectValue placeholder="Select order status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Processing">Processing</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              {errors.orderStatus && (
                <p className="text-red-500 text-sm">Order status is required</p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="payment-status" className="text-sm">
                Payment Status
              </label>
              <Select
                onValueChange={(value) => setValue("paymentStatus", value)}
                defaultValue={paymentStat}
              >
                <SelectTrigger id="payment-status">
                  <SelectValue placeholder="Select payment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>
              {errors.paymentStatus && (
                <p className="text-red-500 text-sm">Payment status is required</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Updating..." : "Save Changes"}
            </Button>
          </form>

          {message && <p className={`text-sm text-center `} style={{ color: message.color }} >{message.mess}</p>}
        </div>
      </PopoverContent>
    </Popover>
  );
}
