import Image from "next/image";
import { FaYandex } from "react-icons/fa";
import { SiSpotify, SiVk, SiYoutube } from "react-icons/si";
import album from "@/data/album.json";

const platforms = [
  { key: "yandex", label: "Слушать «Голоса планет» в Яндекс Музыке", icon: FaYandex },
  { key: "vk", label: "Слушать «Голоса планет» в VK Музыке", icon: SiVk },
  { key: "youtube", label: "Слушать «Голоса планет» на YouTube", icon: SiYoutube },
  { key: "spotify", label: "Слушать «Голоса планет» в Spotify", icon: SiSpotify },
] as const;

export default function AlbumBanner() {
  return (
    <section className="mx-auto w-full max-w-[760px] px-6 sm:px-8" aria-label="Альбом Голоса планет">
      <div className="group flex w-full flex-col gap-5 rounded-[28px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] p-5 text-[var(--color-cream)] shadow-[0_0_18px_rgba(205,155,73,0.08)] transition-[box-shadow,border-color] duration-[220ms] ease-out hover:border-[#d2a45a] hover:shadow-[0_0_28px_rgba(205,155,73,0.14)] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
      <Image
        src={album.cover}
        alt="Голоса планет — promakss"
        width={48}
        height={48}
        priority
        className="h-[120px] w-full shrink-0 rounded-[20px] object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.02] sm:h-[100px] sm:w-[100px]"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0 text-center sm:text-left">
          <span className="block truncate text-[20px] font-semibold tracking-[0.14em] sm:text-[22px] sm:tracking-[0.18em]">{album.title}</span>
          <span className="mt-1 block truncate text-[11px] tracking-[0.14em] text-white/55 sm:text-[12px]">{album.description}</span>
        </div>
        <div className="grid grid-cols-4 items-center justify-items-center gap-5 sm:flex sm:gap-6">
          {platforms.map(({ key, label, icon: Icon }) => (
            <a
              key={key}
              href={album[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#d3a457] transition-[opacity,filter] duration-[200ms] ease-out hover:opacity-100 hover:[filter:drop-shadow(0_0_6px_rgba(211,164,87,0.7))]"
            >
              <Icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
