import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...props }, ref) => {
    const uniqueId = id || Date.now() + '-' + Math.random();

    return (
      <div>
        {label && (
          <label
            htmlFor={uniqueId}
            className="block text-black text-base font-medium"
          >
            {label}
          </label>
        )}
        <textarea
          id={uniqueId}
          className={cn(
            "flex min-h-20 w-[24rem] mt-4 rounded-lg border resize-none border-[#9F9F9F] bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-lg",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
