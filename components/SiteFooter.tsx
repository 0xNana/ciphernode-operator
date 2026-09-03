import { SocialLinks } from "@/components/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 text-slate-400 text-sm">
      <div className="max-w-[1160px] mx-auto grid gap-7 px-4 text-center sm:text-left md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:px-8">
        <div>
          <p>Community-maintained learning resource. Not official Interfold documentation.</p>
          <p className="mt-1">Verify live protocol parameters and contract addresses against Interfold before transacting.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
