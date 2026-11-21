import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import PhotoFrame from "@/components/PhotoFrame";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { ArrowRight } from "lucide-react";

import homeContent from "@/data/home.json";

const FEATURED_LIMIT = 2;

export default function Home() {
  const { greeting, description } = homeContent.introduction;

  return (
    <article className="mt-12 flex flex-col gap-16 pb-16">
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:justify-between sm:gap-12">
        <div className="flex flex-col gap-4">
        <p className="eyebrow">01 / intro</p>
        <h1 className="title text-balance text-4xl sm:text-6xl">{greeting}</h1>
        <p className="max-w-md text-balance text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
        <div className="mt-2">
          <Socials />
        </div>
        </div>
        <PhotoFrame photos={homeContent.photos} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">02 / experience</p>
          <h2 className="title text-2xl sm:text-3xl">where i&apos;ve been</h2>
        </div>
        <Experience />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="eyebrow">03 / work</p>
            <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          </div>
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
