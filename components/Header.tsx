import Image from "next/image";
import AlbumBanner from "./AlbumBanner";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[760px] items-center justify-between px-6 pt-10 sm:px-8 sm:pt-12">
      <span className="text-[30px] font-normal tracking-[-0.04em] text-[var(--color-cream)]">promakss</span>
      <AlbumBanner />
      <div aria-label="Логотип promakss" className="relative flex h-20 w-24 items-center justify-center">
        <Image src="/icons/logo-mark.png" alt="Логотип promakss" width={86} height={86} priority className="object-contain" />
      </div>
    </header>
  );
}
