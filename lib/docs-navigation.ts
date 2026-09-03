export type DocumentationLink = {
  label: string;
  href: string;
};

export type DocumentationSection = {
  label: string;
  links: DocumentationLink[];
  standalone?: boolean;
};

export const documentationLandingPath = "/documentation";

export const documentationSections: DocumentationSection[] = [
  {
    label: "Tutorials",
    links: [
      { label: "Run your first ciphernode", href: "/tutorials/run-your-first-ciphernode" },
    ],
  },
  {
    label: "How-to guides",
    links: [
      { label: "Register an operator", href: "/how-to/register-an-operator" },
      { label: "Bond FOLD", href: "/how-to/bond-fold" },
      { label: "Add tickets", href: "/how-to/add-tickets" },
      { label: "Verify active status", href: "/how-to/verify-active-status" },
    ],
  },
  {
    label: "Reference",
    links: [
      { label: "Operator requirements", href: "/reference/operator-requirements" },
      { label: "Operator lifecycle", href: "/reference/lifecycle" },
      { label: "Contracts", href: "/reference/contracts" },
      { label: "CLI", href: "/reference/cli" },
      { label: "Glossary", href: "/reference/glossary" },
    ],
  },
  {
    label: "Explanation",
    links: [
      { label: "Why ciphernodes exist", href: "/explanation/why-ciphernodes" },
    ],
  },
  {
    label: "Release notes",
    links: [{ label: "Release notes", href: "/release-notes" }],
    standalone: true,
  },
  {
    label: "Contribute",
    links: [{ label: "Contribute", href: "/contribute" }],
    standalone: true,
  },
  {
    label: "About this documentation",
    links: [{ label: "About this documentation", href: "/about" }],
    standalone: true,
  },
];

export function filterDocumentationSections(query: string): DocumentationSection[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) {
    return documentationSections;
  }

  return documentationSections.flatMap((section) => {
    if (section.label.toLocaleLowerCase().includes(normalizedQuery)) {
      return [section];
    }

    const links = section.links.filter((link) =>
      link.label.toLocaleLowerCase().includes(normalizedQuery),
    );

    return links.length ? [{ label: section.label, links }] : [];
  });
}

export function getSectionLabelForPath(pathname: string): string | undefined {
  return documentationSections.find((section) =>
    section.links.some((link) => link.href === pathname),
  )?.label;
}
