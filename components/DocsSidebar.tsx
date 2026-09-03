"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useId, useState } from "react";
import {
  documentationLandingPath,
  documentationSections,
  filterDocumentationSections,
  getSectionLabelForPath,
} from "@/lib/docs-navigation";

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m12.5 12.5 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={open ? "rotate-180" : undefined}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentSection = getSectionLabelForPath(pathname);
  const [expandedSections, setExpandedSections] = useState<string[]>(
    currentSection ? [currentSection] : [],
  );
  const sections = query ? filterDocumentationSections(query) : documentationSections;

  useEffect(() => {
    const nextSection = getSectionLabelForPath(pathname);

    if (nextSection) {
      setExpandedSections([nextSection]);
    }
  }, [pathname]);

  function preventSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function toggleSection(label: string) {
    setExpandedSections((expanded) =>
      expanded.includes(label)
        ? expanded.filter((section) => section !== label)
        : [...expanded, label],
    );
  }

  return (
    <aside className="docs-sidebar" aria-label="Documentation sidebar">
      <button
        type="button"
        className="docs-sidebar-toggle"
        aria-controls="documentation-navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span>Browse documentation</span>
        <MenuIcon open={mobileOpen} />
      </button>

      <div
        id="documentation-navigation"
        className={`${mobileOpen ? "block" : "hidden"} md:block`}
      >
        <Link className="docs-sidebar-title" href={documentationLandingPath}>
          <span>Ciphernode</span>
          developer documentation
        </Link>

        <form className="docs-search" role="search" onSubmit={preventSearchSubmit}>
          <label className="sr-only" htmlFor={searchId}>Search documentation</label>
          <SearchIcon />
          <input
            id={searchId}
            type="search"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>

        <nav aria-label="Documentation sections">
          {sections.map((section) => {
            if (section.standalone) {
              const link = section.links[0];
              const active = pathname === link.href;

              return (
                <Link
                  key={section.label}
                  className={`docs-sidebar-standalone${active ? " is-active" : ""}`}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {section.label}
                </Link>
              );
            }

            const isExpanded = Boolean(query) || expandedSections.includes(section.label);
            const sectionId = `docs-section-${section.label.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="docs-sidebar-section" key={section.label}>
                <h2>
                  <button
                    type="button"
                    aria-controls={sectionId}
                    aria-expanded={isExpanded}
                    onClick={() => toggleSection(section.label)}
                  >
                    <span>{section.label}</span>
                    <ChevronIcon open={isExpanded} />
                  </button>
                </h2>
                {isExpanded && (
                  <ul id={sectionId}>
                    {section.links.map((link) => {
                      const active = pathname === link.href;

                      return (
                        <li key={link.href}>
                          <Link
                            className={active ? "is-active" : undefined}
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}

          {sections.length === 0 && (
            <p className="docs-search-empty" role="status">
              No pages match “{query}”.
            </p>
          )}
        </nav>
      </div>
    </aside>
  );
}
