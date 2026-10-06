import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { X } from "lucide-react";

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverClose = () => {
  return ( 
    <PopoverPrimitive.Close
      aria-label="Close"
      className="inline-flex items-center justify-center absolute top-2 right-2 h-[25px] w-[25px] rounded-md hover:bg-neutral-200/60"
    >
      <X size={16} className="text-popover-foreground" />
    </PopoverPrimitive.Close>
  );
};

const PopoverContent = React.forwardRef(({ children, className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border-border border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}>
        {children}
        <PopoverClose />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
