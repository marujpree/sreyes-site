import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, logo, positions } = experience;

  return (
    <li className="grid gap-4 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex h-fit w-fit items-center gap-3 sm:flex-col sm:items-start"
      >
        <Avatar className="size-12 rounded-sm border">
          <AvatarImage src={logo} alt={name} className="bg-background object-contain" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="font-heading text-lg leading-tight">{name}</h2>
      </Link>
      <div className="flex flex-col gap-6">
        {positions.map((position) => (
          <div key={`${position.title}-${position.start}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-medium">{position.title}</p>
              <time className="whitespace-nowrap font-mono text-xs tabular-nums text-muted-foreground">
                {position.start} - {position.end ?? "Present"}
              </time>
            </div>
            {position.description && (
              <ul className="mt-2 ml-4 flex list-outside list-disc flex-col gap-1.5 text-sm text-muted-foreground marker:text-primary">
                {position.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
  );
}
