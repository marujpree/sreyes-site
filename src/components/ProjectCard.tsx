import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links } = project;

  return (
    <Card className="flex flex-col">
      {image && (
        <CardHeader>
          <Link href={href ?? image}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full rounded-md object-cover object-top"
            />
          </Link>
        </CardHeader>
      )}
      <CardContent className={image ? "flex flex-col gap-2" : "flex flex-col gap-2 pt-6"}>
        <CardTitle>{name}</CardTitle>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col items-start gap-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-1 py-0 text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {links.map((link) => (
              <Link href={link.href} key={link.href} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <Icon
                    name={link.icon as React.ComponentProps<typeof Icon>["name"]}
                    className="size-3"
                  />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
