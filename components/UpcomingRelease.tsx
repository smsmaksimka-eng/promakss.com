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
      <div className="upcoming-release-card flex w-full items-center gap-2 rounded-[28px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] px-3 py-3 text-[var(--color-cream)] sm:gap-8 sm:px-6 sm:py-5">
        <Image
          src={upcoming.cover}
          alt={`Обложка релиза «${upcoming.title}»`}
          width={140}
          height={140}
          className="h-[80px] w-[80px] shrink-0 rounded-[16px] object-cover sm:h-[154px] sm:w-[154px]"
        />
        <div className="min-w-0 flex-1">
          <h2 className="text-[20px] font-semibold tracking-[0.08em] sm:text-[28px] sm:tracking-[0.12em]">{upcoming.title}</h2>
          <p className="mt-1 text-[10px] tracking-[0.12em] text-white/55 sm:text-[12px]">Это должен услышать каждый...</p>
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
                <div key={label} className="rounded-[8px] border border-[#b9853d]/55 bg-[rgba(14,14,16,0.45)] px-1 py-1.5">
                  <p className="text-[18px] font-semibold tabular-nums text-[#f2dfc5] sm:text-[28px]">{label === "ДНИ" ? value : pad(Number(value))}</p>
                  <p className="mt-1 text-[7px] tracking-[0.08em] text-white/50 sm:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-2 flex max-w-full items-center gap-1.5 sm:mt-4 sm:gap-2">
            <p className="shrink-0 text-[8px] font-semibold tracking-[0.12em] text-[#d3a457] sm:text-[10px] sm:tracking-[0.22em]">ПРЕСЕЙВ</p>
            <div className="flex min-w-0 flex-nowrap gap-1 sm:gap-2">
              {[
                ["ЯНДЕКС МУЗЫКА", upcoming.presave.yandex],
                ["VK МУЗЫКА", upcoming.presave.vk],
                ["SPOTIFY", upcoming.presave.spotify],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap rounded-full border border-[#b9853d]/65 px-1 py-1 text-[6px] font-semibold tracking-[0.02em] text-[#f2dfc5] transition-colors duration-200 hover:border-[#d2a45a] hover:text-[#d3a457] sm:px-2.5 sm:text-[9px] sm:tracking-[0.08em]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
