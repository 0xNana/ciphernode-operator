import assert from "node:assert/strict";
import test from "node:test";

import {
  documentationLandingPath,
  documentationSections,
  filterDocumentationSections,
  getSectionLabelForPath,
} from "../lib/docs-navigation";

test("documentation navigation has a dedicated landing route", () => {
  assert.equal(documentationLandingPath, "/documentation");
});

test("sidebar follows the requested documentation section order", () => {
  assert.deepEqual(
    documentationSections.map((section) => section.label),
    [
      "Tutorials",
      "How-to guides",
      "Reference",
      "Explanation",
      "Release notes",
      "Contribute",
      "About this documentation",
    ],
  );
});

test("search keeps matching links and their parent section", () => {
  assert.deepEqual(filterDocumentationSections("ticket"), [
    {
      label: "How-to guides",
      links: [{ label: "Add tickets", href: "/how-to/add-tickets" }],
    },
  ]);
});

test("search is case-insensitive and can match a section label", () => {
  const [section] = filterDocumentationSections("REFERENCE");

  assert.equal(section.label, "Reference");
  assert.equal(section.links.length, 5);
});

test("the section containing the current page can be expanded initially", () => {
  assert.equal(getSectionLabelForPath("/reference/cli"), "Reference");
  assert.equal(getSectionLabelForPath("/documentation"), undefined);
});
