import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import H1 from "@/components/H1";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-[70vh] justify-center px-3 sm:px-9">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than <span className="font-bold text-accent italic underline">10,000</span> events around you.
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
