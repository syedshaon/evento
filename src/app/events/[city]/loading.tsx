import Skeleton from "@/components/Skeleton";

function Loading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-center  w-full max-w-[1100px] mx-auto gap-5 ">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex  flex-col items-center gap-3 mt-20">
          <Skeleton className="w-[50px] h-[50px] rounded-full" />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ))}
    </div>
  );
}

export default Loading;
