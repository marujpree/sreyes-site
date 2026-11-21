import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <article className="mt-12 flex flex-col gap-8 pb-16">
      <header className="flex flex-col gap-2">
        <p className="eyebrow">03 / work</p>
        <h1 className="title text-4xl sm:text-5xl">things i&apos;ve built.</h1>
      </header>
      <Projects />
    </article>
  );
}
