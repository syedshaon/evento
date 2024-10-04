"use client";
import React, { useRef } from "react";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

function EventCard({ event }: { event: EventoEvent }) {
  const MotionLink = motion.create(Link);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.5 1"] });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <div className=" state-effects w-full flex flex-col justify-between sm:max-w-[500px] h-[380px] bg-white/[3%] rounded-xl   overflow-hidden relative">
        <div className="absolute flex flex-col justify-center text-center top-2 left-2 bg-black text-white  px-4 py-1 rounded">
          <span className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-GB", {
              day: "2-digit",
            })}
          </span>
          <span className="text-xs uppercase ">
            {new Date(event.date).toLocaleDateString("en-GB", {
              month: "short",
            })}
          </span>
        </div>
        <Image width={500} height={280} src={event.imageUrl} alt={event.name} className="w-full h-[60%] object-fit   rounded-t-xl" />
        <div className="flex mb-4 flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic texsm text-white/75">By {event.organizerName}</p>
          <p className="text-xs text-white/50 mt-4">{event.location}</p>
          {/* <p className="text-sm text-white/50 mt-1">{event.date.toString()}</p> */}
        </div>
      </div>
    </MotionLink>
  );
}

export default EventCard;
