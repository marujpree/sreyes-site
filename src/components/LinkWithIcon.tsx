import { cn } from "@/lib/utils";
import Link from "next/link";

type LinkWithIconProps = {
  href: string;
  icon?: React.ReactNode;
  text: string;
  className?: string;
};

export default function LinkWithIcon({
  href,
  icon,
  text,
  className,
}: LinkWithIconProps) {
  return (
    <Link href={href} className={cn("link flex items-center gap-2", className)}>
      <span>{text}</span>
      {icon}
    </Link>
  );
}
