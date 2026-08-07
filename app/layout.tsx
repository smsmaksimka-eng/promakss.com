import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://promakss.com"),
  title: "PROMAKSS — официальный сайт",
  description: "Официальный сайт музыкального проекта PROMAKSS. Новый релиз, ссылки на стриминговые сервисы, социальные сети и последние работы.",
  keywords: [
    "PROMAKSS",
    "promakss",
    "ПРОМАКСС",
    "музыка",
    "drum and bass",
    "dnb",
    "electronic music",
    "новый релиз",
    "Ёжик в тумане",
  ],
  openGraph: {
    title: "PROMAKSS",
    description: "Официальный сайт музыкального проекта PROMAKSS.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/releases/hedgehog-in-the-fog.png", alt: "Обложка релиза «Ёжик в тумане»" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROMAKSS",
    description: "Официальный сайт музыкального проекта PROMAKSS.",
    images: ["/releases/hedgehog-in-the-fog.png"],
  },
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
