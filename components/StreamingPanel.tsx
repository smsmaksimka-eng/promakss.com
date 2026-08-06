import release from "@/data/release.json";
import { SiSpotify, SiVk, SiYoutube } from "react-icons/si";
import { FaYandex } from "react-icons/fa";

const platforms = [
  { key: "yandex", label: "Яндекс Музыка", icon: FaYandex, color: "#ffd600" },
  { key: "vk", label: "VK Музыка", icon: SiVk, color: "#0077ff" },
  { key: "youtube", label: "YouTube Music", icon: SiYoutube, color: "#ff0000" },
  { key: "spotify", label: "Spotify", icon: SiSpotify, color: "#1ed760" },
] as const;

export default function StreamingPanel() {
  return (
    <section className="w-full rounded-[22px] bg-[var(--color-button)] px-8 py-3 sm:px-10 sm:py-5" aria-label="Музыкальные платформы">
      {platforms.filter(({ key }) => release.links[key]).map(({ key, label, icon: Icon, color }, index, visiblePlatforms) => (
        <a
          key={key}
          href={release.links[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex h-[90px] w-full items-center gap-7 text-[27px] font-normal text-[var(--color-cream)] transition-[transform,opacity,background-color,border-color,box-shadow] duration-200 ease-out hover:scale-[1.015] sm:h-[104px] sm:gap-9${index < visiblePlatforms.length - 1 ? " border-b border-[var(--color-border)]" : ""}`}
        >
          <Icon aria-hidden="true" size={56} color={color} className="h-[45px] w-[45px] sm:h-[50px] sm:w-[50px]" />
          <span>{label}</span>
          <span aria-hidden="true" className="ml-auto text-[37px] font-light leading-none text-white/40 transition-transform duration-200 ease-out group-hover:translate-x-1 sm:text-[41px]">›</span>
        </a>
      ))}
    </section>
  );
}
