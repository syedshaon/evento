import H1 from "@/components/H1";
import React from "react";
import EventsList from "@/components/EventsList";
import { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";
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

const cityPage = async ({ params }: { params: paramsType }) => {
  return (
    <main className="flex flex-col items-center py-24 px-[20px]">
      <H1 className="mb-24">{params.city === "all" ? "All Events" : `Events in ${params.city.charAt(0).toUpperCase() + params.city.slice(1)}`}</H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={params.city} />
      </Suspense>
    </main>
  );
};

export default cityPage;
