import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ReleaseSpotlight from "@/components/ReleaseSpotlight";
import AlbumBanner from "@/components/AlbumBanner";

export default function HomePage() {
  return <><Header /><main><AlbumBanner /><ReleaseSpotlight /><Hero /></main><Footer /></>;
}
