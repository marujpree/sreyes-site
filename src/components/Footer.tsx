export default function Footer() {
  return (
    <footer className="w-full pt-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-8 pb-16 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Santiago Reyes
        </p>
        <div className="flex gap-6 text-sm">
          <a
            className="link"
            href="https://github.com/marujpree"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="link"
            href="https://linkedin.com/in/santiagoreyes1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
