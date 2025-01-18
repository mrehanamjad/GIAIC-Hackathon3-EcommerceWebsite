import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type = "text", ...props }, ref) => {
    const id = Date.now() + Math.random() + "";
    return (
      <div>
        {label && (
          <label htmlFor={id} className="block  text-black text-base font-medium">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-14 w-[24rem] rounded-lg mt-4 border  border-[#9F9F9F] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
