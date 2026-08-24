"use client";

import { SiSpotify, SiVk, SiYoutube } from "react-icons/si";
import { FaYandex } from "react-icons/fa";
import { reachMetrikaGoal, streamGoals } from "@/lib/yandex-metrika";

type ReleaseData = {
  title: string;
  links: Record<string, string>;
};

const platforms = [
  { key: "yandex", label: "Яндекс Музыка", icon: FaYandex, color: "#ffd600" },
  { key: "vk", label: "VK Музыка", icon: SiVk, color: "#0077ff" },
  { key: "youtube", label: "YouTube Music", icon: SiYoutube, color: "#ff0000" },
  { key: "spotify", label: "Spotify", icon: SiSpotify, color: "#1ed760" },
] as const;

export default function StreamingPanel({ release }: { release: ReleaseData }) {
  return (
    <section className="flex w-full items-center justify-center gap-6 py-3 sm:gap-8 sm:py-4" aria-label="Музыкальные платформы">
      {platforms.filter(({ key }) => release.links[key]).map(({ key, label, icon: Icon, color }) => (
        <a
          key={key}
          href={release.links[key]}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            const releaseGoal = release.title.toLowerCase().includes("aesthetic")
              ? "release_aesthetic_girl"
              : release.title.toLowerCase().includes("голос")
                ? "release_voices_of_planets"
                : release.title.toLowerCase().includes("ёжик") || release.title.toLowerCase().includes("ежик")
                  ? "release_hedgehog_in_the_fog"
                  : undefined;
            if (releaseGoal) reachMetrikaGoal(releaseGoal);
            reachMetrikaGoal(streamGoals[key]);
          }}
          aria-label={`Слушать «${release.title}» в ${label}`}
          className="group flex h-12 w-12 items-center justify-center rounded-[14px] text-[var(--color-cream)] transition-[transform,opacity,background-color,border-color,box-shadow,filter] duration-200 ease-out hover:scale-[1.04] hover:brightness-110 hover:[filter:drop-shadow(0_0_6px_rgba(242,223,197,0.22))] sm:h-14 sm:w-14"
        >
          <Icon aria-hidden="true" size={56} color={color} className="h-9 w-9 sm:h-10 sm:w-10" />
        </a>
      ))}
    </section>
  );
}
