import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/documentation",
  "/start-here",
  "/explanation/why-ciphernodes",
  "/tutorials/run-your-first-ciphernode",
  "/how-to/register-an-operator",
  "/how-to/bond-fold",
  "/how-to/add-tickets",
  "/how-to/verify-active-status",
  "/reference/operator-requirements",
  "/reference/lifecycle",
  "/reference/contracts",
  "/reference/cli",
  "/reference/glossary",
  "/release-notes",
  "/contribute",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date() }));
}
