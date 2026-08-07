"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import spotlight from "@/data/spotlight.json";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initialTime: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft(target: number): TimeLeft {
  const difference = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const timerItems = [
  ["days", "DAY"],
  ["hours", "HRS"],
  ["minutes", "MIN"],
  ["seconds", "SEC"],
] as const;

export default function ReleaseSpotlight() {
  const releaseTimestamp = new Date(spotlight.releaseDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime);
  const [released, setReleased] = useState(spotlight.status === "released");

  useEffect(() => {
    const update = () => {
      const isReleased = Date.now() >= releaseTimestamp;
      setReleased(isReleased);
      if (!isReleased) setTimeLeft(getTimeLeft(releaseTimestamp));
    };

    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [releaseTimestamp]);

  const destination = released ? spotlight.listenUrl : spotlight.presaveUrl;

  return (
    <a
      href={destination || undefined}
      target={destination ? "_blank" : undefined}
      rel={destination ? "noopener noreferrer" : undefined}
      aria-label={`${released ? spotlight.labelReleased : spotlight.labelUpcoming}: ${spotlight.title}`}
      className="spotlight-card group mx-auto flex w-full max-w-[760px] flex-col gap-6 rounded-[30px] border border-[#b9853d]/70 bg-[rgba(25,23,21,0.78)] p-5 text-[var(--color-cream)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-[220ms] ease-out hover:scale-[1.01] hover:border-[#d2a45a] hover:shadow-[0_0_28px_rgba(205,155,73,0.16)] sm:flex-row sm:items-center sm:gap-6 sm:p-6"
    >
      <Image
        src={spotlight.cover}
        alt={`Обложка релиза ${spotlight.title}`}
        width={130}
        height={130}
        priority
        className="h-[130px] w-[130px] shrink-0 rounded-[20px] object-cover"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-[12px] font-semibold tracking-[0.28em] text-[#d3a457]">{released ? spotlight.labelReleased : spotlight.labelUpcoming}</p>
        <h2 className="mt-2 text-[28px] font-bold tracking-[0.02em]">{spotlight.title}</h2>
        <p className="mt-1 text-[13px] tracking-[0.12em] text-white/55">10 AUGUST 2026</p>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.24em] text-[#d3a457]">{released ? "" : "AVAILABLE IN"}</p>

        {!released && (
          <div className="mt-2 grid grid-cols-4 gap-2">
            {timerItems.map(([key, label]) => (
              <div key={key} className="flex min-w-0 flex-col items-center rounded-[14px] border border-white/10 bg-white/[0.035] px-2 py-2">
                <span className="text-[22px] font-semibold leading-none tabular-nums">{String(timeLeft[key]).padStart(2, "0")}</span>
                <span className="mt-1 text-[9px] tracking-[0.16em] text-white/45">{label}</span>
              </div>
            ))}
          </div>
        )}

        <span className="mt-5 self-start text-[13px] font-semibold tracking-[0.16em] text-[#d3a457] transition-transform duration-200 group-hover:translate-x-1">
          {released ? "LISTEN NOW →" : "PRE-SAVE →"}
        </span>
      </div>
    </a>
  );
}
