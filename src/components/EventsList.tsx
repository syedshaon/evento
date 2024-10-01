import { singleEventType } from "@/lib/types";
import EventCard from "./EventCard";

async function EventsList({ city }: { city: string }) {
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
    next: {
      revalidate: 300,
    },
  });

  let events = [];
  if (response.ok) {
    events = await response.json();
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {events?.map((event: singleEventType) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
