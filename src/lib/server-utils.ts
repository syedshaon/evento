import "server-only";
// Fetch call allows caching previouos data
// With unstable_cache, we can cache the data for a certain amount of time
// This is useful when we want to cache the data for a certain amount of time
// and then revalidate it after that time has passed

import { EventoEvent } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";

// This is useful for data that doesn't change frequently
export const getEvents = unstable_cache(async ({ city, page = 1 }: { city: string; page?: number }) => {
  // const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
  //   next: {
  //     revalidate: 300,
  //   },
  // });
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  let events: EventoEvent[] = [];
  let totalCount = 0;
  if (city === "all") {
    events = await prisma.eventoEvent.findMany({
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });
    totalCount = await prisma.eventoEvent.count().then((count) => count);
  } else {
    events = await prisma.eventoEvent.findMany({
      where: { city: capitalize(city) },
      orderBy: {
        date: "asc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });
    totalCount = await prisma.eventoEvent
      .count({
        where: { city: capitalize(city) },
      })
      .then((count) => count);
  }

  // let events = [];
  // if (response.ok) {
  //   events = await response.json();
  //
  return {
    events,
    totalCount,
  };
});

export const getEvent = unstable_cache(async ({ slug }: { slug: string }) => {
  // const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  // const event = await response.json();

  const event = await prisma.eventoEvent.findUnique({ where: { slug } });

  if (!event) {
    return notFound();
  }
  return event;
});
