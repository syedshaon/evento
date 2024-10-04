import H1 from "@/components/H1";
import React from "react";
import EventsList from "@/components/EventsList";

import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";
type paramsType = {
  city: string;
};

// export const metadata: Metadata = {
//   title: `Events in ${params.city.charAt(0).toUpperCase() + params.city.slice(1)}`,
// };

export function generateMetadata({ params }: { params: paramsType }) {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
}

interface CityPageProps {
  params: {
    city: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// export async function generateStaticParams() {
//   return [
//     {
//       params: {
//         city: "all",
//       },
//     },
//     {
//       params: {
//         city: "seattle",
//       },
//     },
//     {
//       params: {
//         city: "austin",
//       },
//     },
//   ];
// }

// const pageNumberSchema = z.coerce.number().int().positive().default(1);
const pageNumberSchema = z.coerce.number().int().positive().optional();

const cityPage = async ({ params, searchParams }: CityPageProps) => {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  const page = parsedPage.success ? parsedPage.data : 1;

  // const page = Number(searchParams.page) > 0 ? Number(searchParams.page) : 1;
  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-24">{params.city === "all" ? "All Events" : `Events in ${params.city.charAt(0).toUpperCase() + params.city.slice(1)}`}</H1>

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={params.city} page={page} />
      </Suspense>
    </main>
  );
};

export default cityPage;
