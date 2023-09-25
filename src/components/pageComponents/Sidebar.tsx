import { HomeIcon, Library, Search } from "lucide-react";
import { PlayList } from "../globalComponents/PlayList";
import { FormatedIcon } from "../globalComponents/FormatedIcon";

export function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <FormatedIcon icon={<HomeIcon />} description="Home" />
        <FormatedIcon icon={<Search />} description="Search" />
        <FormatedIcon icon={<Library />} description="Your Library" />
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <PlayList name="Hot Hits Brasil" />
        <PlayList name="Aniver Funk" />
        <PlayList name="My Playlist #13" />
        <PlayList name="Foo Fighters Mais Tocadas" />
        <PlayList name="Top Brasil" />
      </nav>
    </aside>
  );
}
