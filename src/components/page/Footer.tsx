import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBackIcon,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/album.jpg"
          className="w-full"
          width={56}
          height={56}
          alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400 whitespace-nowrap">
            Foo Fighters
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBackIcon size={20} className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play className="fill-current" />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-20 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-20 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
