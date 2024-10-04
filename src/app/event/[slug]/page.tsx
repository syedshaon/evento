import React from "react";
type paramsType = { params: { slug: string } };
import Image from "next/image";
import H1 from "@/components/H1";
import { Metadata } from "next";
import prisma from "@/lib/db";
import { getEvent } from "@/lib/server-utils";

export async function generateMetadata({ params }: paramsType): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent({ slug });
  return {
    title: event.name,
  };
}

// Following is make sure that all slugs are statically generated
export async function generateStaticParams() {
  // const response = await fetch("https://bytegrad.com/course-assets/projects/evento/api/events");
  // const events = await response.json();
  const events = await prisma.eventoEvent.findMany();

  return [
    ...events.map((event) => ({
      params: {
        slug: event.slug,
      },
    })),
  ];
}

const eventPage = async ({ params }: paramsType) => {
  const slug = params.slug;

  const event = await getEvent({ slug });

  return (
    <>
      <section className="relative py-14 overflow-hidden  flex justify-center items-center">
        <Image className="object-cover z-0 blur-3xl" src={event.imageUrl} quality={50} alt={event.name} fill priority sizes="(min-width: 1280px) 100vw, 1280px" />
        <div className="z-10 relative flex flex-col lg:flex-row  gap-6 lg:gap-16">
          <Image className="rounded-xl border-2 border-white/50 object-cover" src={event.imageUrl} width={300} height={201} alt={event.name} />
          <div className="flex flex-col">
            <p className="text-white/75">{new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>

            <H1 className="mb-2 mt-1 whitespace-nowrap text-3xl lg:text-5xl">{event.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg state-effects   w-[95vw] mt-5 lg:mt-auto capitalize  rounded-md border-white/10 border-2 sm:w-full py-2  state-effects ">Get Tickets</button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
        <div className="flex flex-col   gap-6 lg:gap-16 px-4 lg:px-20 py-14">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold mb-2">About this event</h2>
            <p className="text-white/75 text-lg leading-8 max-w-4xl mx-auto">{event.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold mb-2">Location</h2>
            <p className="text-white/75 text-lg leading-8 max-w-4xl mx-auto">{event.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default eventPage;
