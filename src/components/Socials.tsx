import data from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import Icon from "./Icon";

export default function Socials() {
  const socials = socialSchema.parse(data).socials;

  return (
    <section className="flex gap-6">
      {socials.map((item) => (
        <a
          href={item.href}
          key={item.name}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="sr-only">{item.name}</span>
          <Icon
            name={item.icon as React.ComponentProps<typeof Icon>["name"]}
            aria-hidden="true"
            className="size-5"
          />
        </a>
      ))}
    </section>
  );
}
