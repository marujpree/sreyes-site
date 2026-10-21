import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

import routesData from "@/data/routes.json";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            {routesData.routes.map((route) => (
              <li key={route.path} className="link">
                <Link href={route.path} title={route.description}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
