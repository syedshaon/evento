import { cn } from "@/lib/utils";

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse h-4 w-full max-w-[550px] rounded-md bg-white/5", className)}></div>;
}

export default Skeleton;
