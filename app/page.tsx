import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlbumBanner from "@/components/AlbumBanner";
import album from "@/data/album.json";
import aestheticGirl from "@/data/aesthetic-girl.json";
import TrackBanner from "@/components/TrackBanner";
import miAmor from "@/data/mi-amor.json";
import UpcomingRelease from "@/components/UpcomingRelease";

export default function HomePage() {
  return <><Header /><main className="space-y-8"><AlbumBanner data={album} /><UpcomingRelease /><TrackBanner data={miAmor} sectionLabel="НОВЫЙ РЕЛИЗ" highlight /><TrackBanner /><TrackBanner data={aestheticGirl} showLabel={false} /></main><Footer /></>;
}
