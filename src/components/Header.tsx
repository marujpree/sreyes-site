"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

import routesData from "@/data/routes.json";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-8 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="font-heading text-lg tracking-tight">
            s.reyes<span className="text-primary">/</span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <ul className="flex gap-4 font-mono text-sm sm:gap-6">
              {routesData.routes.map((route) => {
                const active =
                  route.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(route.path);
                return (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      title={route.description}
                      className={cn(
                        "pb-1 transition-colors hover:text-primary",
                        active
                          ? "border-b-2 border-primary text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
