import { ChevronLeft, ChevronRight } from "lucide-react";
import { RecentlyPlayed } from "../globalComponents/RecentlyPlayed";
import { SugestedAlbum } from "../globalComponents/SugestedAlbum";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-6">Good afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
        <RecentlyPlayed src="/album.jpg" width={68} height={68} />
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Weliton Silva</h2>

      <div className="grid grid-cols-6 gap-4 mt-4">
        <SugestedAlbum src="/album.jpg" width={120} height={120} />
        <SugestedAlbum src="/album.jpg" width={120} height={120} />
        <SugestedAlbum src="/album.jpg" width={120} height={120} />
        <SugestedAlbum src="/album.jpg" width={120} height={120} />
        <SugestedAlbum src="/album.jpg" width={120} height={120} />
      </div>
    </main>
  );
}
