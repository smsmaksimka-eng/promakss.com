"use client";

import Image from "next/image";
import upcoming from "@/data/upcoming.json";
import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  online: boolean;
};

const releaseTimestamp = new Date(upcoming.releaseDate).getTime();

function getCountdown(): Countdown {
  const remaining = Math.max(0, releaseTimestamp - Date.now());
  if (remaining === 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, online: true };

  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    online: false,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function UpcomingRelease() {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto w-full max-w-[700px] px-6 sm:px-8" aria-label="Скоро онлайн">
      <p className="mb-4 text-center text-[22px] font-semibold tracking-[0.3em] text-[var(--color-cream)] sm:mb-5">СКОРО ОНЛАЙН</p>
      <div className="upcoming-release-card upcoming-release-glow flex w-full items-center gap-4 rounded-[28px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] px-3 py-5 text-[var(--color-cream)] shadow-[0_0_26px_rgba(205,155,73,0.08)] sm:gap-8 sm:px-6 sm:py-6">
        <Image
          src={upcoming.cover}
          alt={`Обложка релиза «${upcoming.title}»`}
          width={140}
          height={140}
          className="h-[84px] w-[84px] shrink-0 rounded-[16px] object-cover sm:h-[140px] sm:w-[140px]"
        />
        <div className="min-w-0 flex-1">
          <h2 className="text-[20px] font-semibold tracking-[0.08em] sm:text-[28px] sm:tracking-[0.12em]">{upcoming.title}</h2>
          {countdown.online ? (
            <p className="mt-2 text-[14px] tracking-[0.2em] text-[#d3a457]">ОНЛАЙН</p>
          ) : (
            <div className="mt-3 grid grid-cols-4 gap-1 text-center sm:mt-5 sm:gap-3">
              {[
                [countdown.days, "ДНИ"],
                [countdown.hours, "ЧАСЫ"],
                [countdown.minutes, "МИНУТЫ"],
                [countdown.seconds, "СЕКУНДЫ"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-[20px] font-semibold tabular-nums text-[#f2dfc5] sm:text-[28px]">{label === "ДНИ" ? value : pad(Number(value))}</p>
                  <p className="mt-1 text-[8px] tracking-[0.12em] text-white/50 sm:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          )}
          <p className="mt-3 truncate text-[9px] tracking-[0.12em] text-white/40 sm:text-[10px]">{upcoming.timezone}</p>
        </div>
      </div>
    </section>
  );
}
