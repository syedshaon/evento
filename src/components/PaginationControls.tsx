import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

function PaginationControls({ city, page, totalCount }: { city: string; page: number; totalCount: number }) {
  const btnStyles = "text-white px-5 py-3 bg-white/5 hover:opacity-100 text-sm transition rounded-md opacity-75 flex gap-x-2 justify-center items-center";
  return (
    <div className="flex w-full justify-between items-center gap-5 mt-7">
      {page > 1 && (
        <Link className={btnStyles} href={`/events/${city}?page=${page - 1}`}>
          <ArrowLeftIcon /> Previous
        </Link>
      )}

      {/* <Link href={`/events/${city}?page=2`}>Second</Link> */}
      <span className="text-white opacity-75">
        Page {page} of {Math.ceil(totalCount / 6)}
      </span>
      {totalCount <= page * 6 ? null : (
        <Link className={btnStyles} href={`/events/${city}?page=${page + 1}`}>
          Next <ArrowRightIcon />
        </Link>
      )}
      {/* <Link className={`ml-auto ${btnStyles}`} href={`/events/${city}?page=${page + 1}`}>
        Next <ArrowRightIcon />
      </Link> */}
    </div>
  );
}

export default PaginationControls;
