import type { Metadata } from "next";
import Script from "next/script";
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
  return (
    <html lang="ru">
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=111878173', 'ym');

ym(111878173, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/111878173" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
