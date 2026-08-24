import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlbumBanner from "@/components/AlbumBanner";
import album from "@/data/album.json";
import aestheticGirl from "@/data/aesthetic-girl.json";
import TrackBanner from "@/components/TrackBanner";
import miAmor from "@/data/mi-amor.json";

export default function HomePage() {
  return <><Header /><main><AlbumBanner data={album} /><TrackBanner data={miAmor} sectionLabel="НОВЫЙ РЕЛИЗ" /><TrackBanner /><TrackBanner data={aestheticGirl} showLabel={false} /></main><Footer /></>;
}
