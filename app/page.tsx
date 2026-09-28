import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlbumBanner from "@/components/AlbumBanner";
import album from "@/data/album.json";
import aestheticGirl from "@/data/aesthetic-girl.json";
import TrackBanner from "@/components/TrackBanner";
import miAmor from "@/data/mi-amor.json";
import neZabyvai from "@/data/ne-zabyvai.json";
import maaToMaa from "@/data/maa-to-maa.json";

export default function HomePage() {
  return <><Header /><main className="space-y-8"><AlbumBanner data={album} /><TrackBanner data={maaToMaa} sectionLabel="НОВЫЙ РЕЛИЗ" highlight /><TrackBanner data={neZabyvai} /><TrackBanner /><TrackBanner data={aestheticGirl} showLabel={false} /><TrackBanner data={miAmor} showLabel={false} /></main><Footer /></>;
}
