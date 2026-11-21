import Icon from "@/components/Icon";
import socialsData from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "santireyes19915@gmail.com";

export const metadata = { title: "Contact | Santiago Reyes" };

export default function ContactPage() {
  const socials = socialSchema
    .parse(socialsData)
    .socials.filter((item) => item.name !== "Email");

  return (
    <article className="mt-12 flex flex-col gap-12 pb-16">
      <header className="flex flex-col gap-4">
        <p className="eyebrow">04 / contact</p>
        <h1 className="title text-4xl sm:text-5xl">say hello.</h1>
        <p className="max-w-md text-balance text-muted-foreground">
          Open to internships, interesting projects, or just talking shop. Email
          is the fastest way to reach me.
        </p>
      </header>

      <ul className="flex flex-col divide-y border-y">
        <li>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-between py-5 transition-colors hover:text-primary"
          >
            <span className="flex flex-col gap-1">
              <span className="eyebrow">email</span>
              <span className="font-heading text-xl sm:text-2xl">{EMAIL}</span>
            </span>
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </li>
        {socials.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-4">
                <Icon
                  name={item.icon as React.ComponentProps<typeof Icon>["name"]}
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="font-heading text-xl sm:text-2xl">
                  {item.name}
                </span>
              </span>
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
