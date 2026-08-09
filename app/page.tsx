import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AlbumBanner from "@/components/AlbumBanner";
import aestheticGirl from "@/data/aesthetic-girl.json";
import TrackBanner from "@/components/TrackBanner";

export default function HomePage() {
  return <><Header /><main><AlbumBanner /><Hero release={aestheticGirl} /><TrackBanner /></main><Footer /></>;
}
