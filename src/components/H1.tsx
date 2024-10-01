import React from "react";
import { cn } from "@/lib/utils";
function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h1 className={cn("font-bold text-3xl tracking-tight", className)}>{children}</h1>;
}

export default H1;
