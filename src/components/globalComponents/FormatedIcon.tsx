import { ReactElement } from "react";

export interface FormatedIconProps {
  icon: ReactElement;
  description: string;
}

export function FormatedIcon({ icon, description }: FormatedIconProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      {icon} {description}
    </a>
  );
}
