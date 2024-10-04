import { EventoEvent } from "@prisma/client";
import EventCard from "./EventCard";
import PaginationControls from "./PaginationControls";
import { getEvents } from "@/lib/server-utils";

async function EventsList({ city, page = 1 }: { city: string; page?: number }) {
  const { events, totalCount } = await getEvents({ city, page });
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {events?.map((event: EventoEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls city={city} page={page} totalCount={totalCount} />
    </>
  );
}

export default EventsList;
