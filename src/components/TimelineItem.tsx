import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, logo, positions } = experience;

  return (
    <li className="relative ml-10 py-4">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-background"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={href} target="_blank" rel="noreferrer" className="w-fit">
          <h2 className="text-base font-semibold leading-none">{name}</h2>
        </Link>
        <div className="flex flex-col gap-4">
          {positions.map((position) => (
            <div key={`${position.title}-${position.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {position.title}
                </p>
                <time className="whitespace-nowrap pr-8 text-xs tabular-nums text-muted-foreground">
                  {position.start} - {position.end ?? "Present"}
                </time>
              </div>
              {position.description && (
                <ul className="ml-4 mt-2 list-outside list-disc pr-8 text-sm">
                  {position.description.map((desc, i) => (
                    <li key={i} className="mt-1">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
