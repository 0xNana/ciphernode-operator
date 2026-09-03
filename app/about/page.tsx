import { DocShell } from "@/components/DocShell";

export const metadata = { title: "About This Documentation | Ciphernode Field Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">About this documentation</div>
      <h1>A community field guide for ciphernode operators</h1>
      <p className="intro">This site turns the operator journey into a small, task-oriented curriculum. It is maintained independently and is not official Interfold documentation.</p>

      <h2>How the documentation is organized</h2>
      <ul>
        <li><strong>Tutorials</strong> teach by walking through a complete learning experience.</li>
        <li><strong>How-to guides</strong> help an operator complete a specific task.</li>
        <li><strong>Reference</strong> keeps commands, requirements, contracts, and terminology easy to scan.</li>
        <li><strong>Explanation</strong> builds the mental model behind the operator layer.</li>
      </ul>

      <h2>Editorial boundary</h2>
      <p>The guide can clarify sequence, context, and operational implications. It cannot replace current deployment manifests, live contracts, release artifacts, or protocol policy. When this site and an official primary source differ, use the official source and report the discrepancy here.</p>

      <p><a href="https://docs.theinterfold.com/ciphernode-operators">Open the official ciphernode operator documentation.</a></p>
    </DocShell>
  );
}
