import Image from "next/image";
import { FaYandex } from "react-icons/fa";
import { SiSpotify, SiVk, SiYoutube } from "react-icons/si";
import release from "@/data/release.json";

const platforms = [
  { key: "yandex", label: "Слушать «Ёжик в тумане» в Яндекс Музыке", icon: FaYandex },
  { key: "vk", label: "Слушать «Ёжик в тумане» в VK Музыке", icon: SiVk },
  { key: "youtube", label: "Слушать «Ёжик в тумане» на YouTube", icon: SiYoutube },
  { key: "spotify", label: "Слушать «Ёжик в тумане» в Spotify", icon: SiSpotify },
] as const;

export default function TrackBanner() {
  return (
    <section className="mx-auto w-full max-w-[760px] px-6 sm:px-8" aria-label="Ещё музыка — Ёжик в тумане">
      <p className="mb-4 text-center text-[22px] font-semibold tracking-[0.3em] text-[var(--color-cream)] sm:mb-5">ЕЩЕ МУЗЫКА</p>
      <div className="group flex w-full items-center gap-3 rounded-[28px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] px-3 py-3 text-[var(--color-cream)] shadow-[0_0_18px_rgba(205,155,73,0.08)] transition-[box-shadow,border-color] duration-[220ms] ease-out hover:border-[#d2a45a] hover:shadow-[0_0_28px_rgba(205,155,73,0.14)] sm:gap-5 sm:px-4">
        <Image
          src={release.cover}
          alt={`Обложка релиза «${release.title}»`}
          width={64}
          height={64}
          className="h-14 w-14 shrink-0 rounded-[16px] object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.02] sm:h-16 sm:w-16"
        />
        <h2 className="min-w-0 flex-1 text-[17px] font-semibold leading-tight tracking-[0.08em] sm:text-[20px] sm:tracking-[0.12em]">
          Ёжик в<span className="sm:hidden"><br /></span><span className="sm:hidden">тумане</span><span className="hidden sm:inline"> тумане</span>
        </h2>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {platforms.filter(({ key }) => release.links[key]).map(({ key, label, icon: Icon }) => (
            <a
              key={key}
              href={release.links[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#d3a457] transition-[opacity,filter] duration-[200ms] ease-out hover:opacity-100 hover:[filter:drop-shadow(0_0_6px_rgba(211,164,87,0.7))] sm:h-10 sm:w-10"
            >
              <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
