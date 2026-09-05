import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-interfold",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ciphernode Operator Guide",
  description: "A community-maintained guide to understanding, running, and operating Interfold ciphernodes.",
  openGraph: {
    title: "Ciphernode Operator Guide",
    description: "Understand ciphernodes. Run one on Sepolia. Operate one responsibly.",
    siteName: "Ciphernode Operator Guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciphernode Operator Guide",
    description: "Understand ciphernodes. Run one on Sepolia. Operate one responsibly.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
