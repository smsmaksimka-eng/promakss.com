import { SiInstagram, SiTelegram, SiVk, SiYoutube } from "react-icons/si";
import Image from "next/image";
import socials from "@/data/socials.json";

const socialLinks = [
  { key: "telegram", label: "Telegram", icon: SiTelegram },
  { key: "instagram", label: "Instagram", icon: SiInstagram },
  { key: "youtube", label: "YouTube", icon: SiYoutube },
  { key: "vk", label: "VK", icon: SiVk },
] as const;

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-7 px-8 pb-12 pt-10 sm:px-8 sm:pt-12">
      <p className="text-center text-[14px] font-semibold tracking-[0.18em] text-[var(--color-cream)] sm:text-[22px] sm:tracking-[0.3em]">
        ПО ВОПРОСАМ СОТРУДНИЧЕСТВА
      </p>
      <div className="flex items-center justify-center gap-8">
        {socialLinks.map(({ key, label, icon: Icon }) => (
          <a
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[var(--color-cream)] transition-[transform,opacity,background-color,border-color,box-shadow] duration-[180ms] ease-out hover:scale-[1.08]"
          >
            <Icon aria-hidden="true" size={34} />
          </a>
        ))}
        <a
          href="https://tips.yandex.ru/guest/payment/9444315?wl=yandex_music"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Поддержать через Яндекс Чаевые"
          className="block transition-[transform,opacity,background-color,border-color,box-shadow] duration-[180ms] ease-out hover:scale-[1.08]"
        >
          <Image
            src="/icons/yandex-tips.png"
            alt="Поддержать"
            width={34}
            height={34}
            className="block h-[34px] w-[34px] object-contain [filter:brightness(0)_saturate(100%)_invert(89%)_sepia(12%)_saturate(511%)_hue-rotate(338deg)_brightness(104%)_contrast(89%)]"
          />
        </a>
      </div>
    </footer>
  );
}
