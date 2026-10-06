"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";

export default function Definition({title, children}) {

  const labelledById = "title-" + nanoid();
  const describedById = "content-" + nanoid();
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover
      open={popoverOpen}
      onOpenChange={setPopoverOpen}
    >
      <PopoverTrigger
        asChild
        aria-labelledby={labelledById}
        aria-describedby={describedById}
      >
        <span
          className={cn(
            "relative inline-flex justify-center items-center",
            "cursor-pointer rounded-md transition-colors duration-200",
            "shrink-0 no-underline print:hidden",
            "text-neutral-500 hover:text-neutral-700",
          )}
        >
          <BsQuestionCircle
            className="mx-[.1rem]"
            onClick={() => setPopoverOpen(!popoverOpen)}
          />
        </span>
      </PopoverTrigger>
        <PopoverContent sideOffset={5}>
          <p id={labelledById} className="font-bold italic">{title}</p>
          <div id={describedById}>
            {children}
          </div>
        </PopoverContent>
    </Popover>
  );
}