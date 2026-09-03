import Link from "next/link";
import { documentationLandingPath } from "@/lib/docs-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1160px] mx-auto px-4 md:px-8 min-h-[68px] flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-0 gap-4 sm:gap-6">
        <Link className="font-bold tracking-tight whitespace-nowrap text-lg" href="/">
          The Interfold <span className="text-primary">/ Ciphernode Field Guide</span>
        </Link>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-slate-400 text-sm font-medium" aria-label="Primary navigation">
          <Link className="hover:text-slate-100 transition-colors" href={documentationLandingPath}>Documentation</Link>
          <a className="hover:text-slate-100 transition-colors" href="https://docs.theinterfold.com/ciphernode-operators">Official docs ↗</a>
        </nav>
      </div>
    </header>
  );
}
