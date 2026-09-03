import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Release Notes | Ciphernode Operator Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Release notes</div>
      <h1>What changed in the field guide</h1>
      <p className="intro">A concise record of meaningful content and navigation changes. Protocol releases remain documented by Interfold in its official channels.</p>

      <h2>3 September 2026</h2>
      <h3>Initial operator field guide</h3>
      <ul>
        <li>Added the testnet-first ciphernode tutorial.</li>
        <li>Added focused guides for registration, bonding, tickets, and active-status checks.</li>
        <li>Added operator requirements, lifecycle, contracts, CLI, and glossary references.</li>
        <li>Organized the documentation around tutorials, how-to guides, reference, and explanation.</li>
      </ul>

      <div className="callout"><p><strong>Scope:</strong> these notes describe this community guide, not changes to the Interfold protocol, contracts, or CLI.</p></div>
    </DocShell>
  );
}
