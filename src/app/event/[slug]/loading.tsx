import Skeleton from "@/components/Skeleton";

function Loading() {
  return (
    <div className="flex flex-col items-center gap-3 mt-20">
      <Skeleton className="w-[650px]" />
      <Skeleton />
      <Skeleton className="w-[650px]" />
      <Skeleton />
      <Skeleton className="w-[650px]" />
      <Skeleton />
    </div>
  );
}

export default Loading;
