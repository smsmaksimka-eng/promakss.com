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
    <div className="group mx-3 flex min-w-0 flex-1 items-center gap-2 rounded-[18px] border border-[#b9853d]/65 bg-[rgba(25,23,21,0.78)] px-2 py-1.5 text-left text-[var(--color-cream)] shadow-[0_0_16px_rgba(205,155,73,0.08)] transition-[box-shadow,border-color] duration-[220ms] ease-out hover:border-[#d2a45a] hover:shadow-[0_0_24px_rgba(205,155,73,0.14)] sm:gap-3 sm:rounded-[20px] sm:px-2.5 sm:py-1.5">
      <Image
        src={album.cover}
        alt="Голоса планет — promakss"
        width={48}
        height={48}
        priority
        className="h-10 w-10 shrink-0 rounded-[12px] object-cover transition-transform duration-[220ms] ease-out group-hover:scale-[1.03] sm:h-12 sm:w-12"
      />
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block truncate text-[10px] font-semibold tracking-[0.12em] sm:text-[12px] sm:tracking-[0.16em]">{album.title}</span>
        <span className="mt-0.5 block truncate text-[8px] tracking-[0.08em] text-white/55 sm:text-[10px] sm:tracking-[0.12em]">{album.description}</span>
      </span>
      <span className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {platforms.map(({ key, label, icon: Icon }) => (
          <a
            key={key}
            href={album[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#d3a457] transition-[opacity,filter] duration-[200ms] ease-out hover:opacity-100 hover:[filter:drop-shadow(0_0_5px_rgba(211,164,87,0.7))]"
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        ))}
      </span>
    </div>
  );
}
