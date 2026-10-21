import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { ArrowRight } from "lucide-react";

import homeContent from "@/data/home.json";

const FEATURED_LIMIT = 2;

export default function Home() {
  const { greeting, tagline, description } = homeContent.introduction;

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col gap-4">
        <h1 className="title text-balance text-4xl sm:text-5xl">{greeting}</h1>
        <p className="text-sm font-medium sm:text-base">{tagline}</p>
        <p className="max-w-md text-balance text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
        <div className="mt-2">
          <Socials />
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            text="view more"
            icon={<ArrowRight className="size-4" />}
          />
        </div>
        <Projects limit={FEATURED_LIMIT} />
      </section>
    </article>
  );
}
