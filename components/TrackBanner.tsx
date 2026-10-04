"use client";

import Image from "next/image";
import { FaYandex } from "react-icons/fa";
import { SiSpotify, SiVk, SiYoutube } from "react-icons/si";
import release from "@/data/release.json";
import { reachMetrikaGoal, streamGoals } from "@/lib/yandex-metrika";

type TrackData = {
  title: string;
  cover: string;
  description?: string;
  links: Record<string, string>;
};

const platforms = [
  { key: "yandex", label: "Слушать «Ёжик в тумане» в Яндекс Музыке", icon: FaYandex },
  { key: "vk", label: "Слушать «Ёжик в тумане» в VK Музыке", icon: SiVk },
  { key: "youtube", label: "Слушать «Ёжик в тумане» на YouTube", icon: SiYoutube },
  { key: "spotify", label: "Слушать «Ёжик в тумане» в Spotify", icon: SiSpotify },
] as const;

export default function TrackBanner({ data = release, showLabel = true, sectionLabel = "ЕЩЕ МУЗЫКА", highlight = false }: { data?: TrackData; showLabel?: boolean; sectionLabel?: string; highlight?: boolean }) {
  const releaseGoal = data.title.toLowerCase().includes("aesthetic")
    ? "release_aesthetic_girl"
    : data.title.toLowerCase().includes("mi amor")
      ? "release_mi_amor"
    : data.title.toLowerCase().includes("не забывай")
        ? "release_ne_zabyvai"
      : data.title.toLowerCase().includes("maa to maa")
        ? "release_maa_to_maa"
      : data.title.toLowerCase().includes("славянский фолк")
        ? "release_slavic_folk"
      : "release_hedgehog_in_the_fog";

  return (
    <section className={`mx-auto w-full px-6 sm:px-8 ${highlight ? "max-w-[700px]" : "max-w-[760px]"}`} aria-label={`Ещё музыка — ${data.title}`}>
      {showLabel && <p className="mb-4 text-center text-[22px] font-semibold tracking-[0.3em] text-[var(--color-cream)] sm:mb-5">{sectionLabel}</p>}
      <div className={`${highlight ? "mi-amor-card flex flex-wrap items-center gap-5 px-3 py-5 sm:flex-nowrap sm:gap-8 sm:px-6 sm:py-6" : "flex items-center gap-3 px-3 py-3 sm:gap-5 sm:px-4"} group w-full rounded-[28px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] text-[var(--color-cream)] shadow-[0_0_18px_rgba(205,155,73,0.08)] transition-[box-shadow,border-color] duration-[220ms] ease-out hover:border-[#d2a45a] hover:shadow-[0_0_28px_rgba(205,155,73,0.14)]`}>
        <Image
          src={data.cover}
          alt={`Обложка релиза «${data.title}»`}
          width={64}
          height={64}
          className={`shrink-0 rounded-[16px] object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.02] ${highlight ? "h-[128px] w-[128px] sm:h-[140px] sm:w-[140px]" : "h-14 w-14 sm:h-16 sm:w-16"}`}
        />
        <div className="min-w-0 flex-1">
          <h2 className={`${highlight ? "text-[20px] sm:text-[28px]" : "text-[17px] sm:text-[20px]"} font-semibold leading-tight tracking-[0.08em] sm:tracking-[0.12em]`}>
            {data.title === "Ёжик в тумане" ? <>Ёжик в<span className="sm:hidden"><br /></span><span className="sm:hidden">тумане</span><span className="hidden sm:inline"> тумане</span></> : data.title}
          </h2>
          {data.description && <p className={`${highlight ? "text-[12px] sm:text-[13px]" : "text-[11px] sm:text-[12px]"} mt-1 truncate tracking-[0.12em] text-white/55`}>{data.description}</p>}
        </div>
        <div className={`flex items-center ${highlight ? "basis-full w-full justify-between px-1 sm:basis-auto sm:w-auto sm:justify-end sm:px-0 sm:gap-3" : "min-w-0 flex-1 justify-between gap-2 sm:flex-none sm:gap-4"}`}>
          {platforms.filter(({ key }) => data.links[key]).map(({ key, label, icon: Icon }) => (
            <a
              key={key}
              href={data.links[key]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                reachMetrikaGoal(releaseGoal);
                reachMetrikaGoal(streamGoals[key]);
              }}
              aria-label={`Слушать «${data.title}» ${label.replace("Слушать «Ёжик в тумане» ", "")}`}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-[#d3a457] transition-[opacity,filter] duration-[200ms] ease-out hover:opacity-100 hover:[filter:drop-shadow(0_0_6px_rgba(211,164,87,0.7))] sm:h-10 sm:w-10"
            >
              <Icon aria-hidden="true" className="h-[21px] w-[21px] sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
