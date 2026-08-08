import release from "@/data/release.json";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import ListenButton from "./ListenButton";
import StreamingPanel from "./StreamingPanel";

const releaseTitleFont = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: "600",
  display: "swap",
});

export default function Hero() {
  const showListenButton = false;

  return (
    <section className="mx-auto flex w-full max-w-[760px] flex-col items-center px-6 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
      <p className={`${releaseTitleFont.className} mb-6 text-center text-[22px] font-semibold tracking-[0.3em] text-[var(--color-cream)] sm:mb-7`}>
        {release.subtitle}
      </p>
      <div
        className="relative aspect-square w-full overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]"
      >
        <Image
          src={release.cover}
          alt={`Обложка релиза «${release.title}»`}
          fill
          priority
          sizes="(max-width: 760px) calc(100vw - 48px), 712px"
          className="cover-art object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center">
        {showListenButton && <div className="mt-10 w-full sm:mt-12"><ListenButton /></div>}
        <div className="mt-10 w-full sm:mt-12"><StreamingPanel /></div>
      </div>
    </section>
  );
}
