import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AlbumBanner from "@/components/AlbumBanner";
import aestheticGirl from "@/data/aesthetic-girl.json";
import hedgehog from "@/data/release.json";

export default function HomePage() {
  return <><Header /><main><AlbumBanner /><Hero release={aestheticGirl} /><Hero release={hedgehog} /></main><Footer /></>;
}
