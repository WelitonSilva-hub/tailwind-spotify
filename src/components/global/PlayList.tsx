export interface PlayListProps {
  name: string;
}

export function PlayList({ name }: PlayListProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {name}
    </a>
  );
}
