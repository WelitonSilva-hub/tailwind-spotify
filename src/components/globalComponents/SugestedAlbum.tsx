import Image from "next/image";

export interface imgProps {
  src: string;
  width: number;
  height: number;
}

export function SugestedAlbum({ src, width, height }: imgProps) {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src={src}
        className="w-full"
        width={width}
        height={height}
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">
        Wallows, COIN, girl in red and more
      </span>
    </a>
  );
}
