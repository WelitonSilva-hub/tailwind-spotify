import { Play } from "lucide-react";
import Image from "next/image";

export interface imgProps {
  src: string;
  width: number;
  height: number;
}

export function RecentlyPlayed({ src, width, height }: imgProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-2 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />
      <strong>Wasting Light</strong>

      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
        <Play className="fill-current" />
      </button>
    </a>
  );
}
