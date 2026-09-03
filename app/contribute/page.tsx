import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Contribute | Ciphernode Operator Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Contribute</div>
      <h1>Help keep the operator path accurate</h1>
      <p className="intro">The most useful contributions make a task easier to complete, correct an outdated operational detail, or connect a claim to a primary source.</p>

      <h2>Contribution priorities</h2>
      <ul>
        <li>Correct commands, contract addresses, and live protocol parameters.</li>
        <li>Document failure modes that an operator can reproduce and diagnose.</li>
        <li>Improve accessibility, mobile navigation, and plain-language explanations.</li>
        <li>Link technical claims to official Interfold documentation or source code.</li>
      </ul>

      <h2>Before proposing a change</h2>
      <ol>
        <li>Decide whether the content is a tutorial, how-to guide, reference, or explanation.</li>
        <li>Check volatile values against current primary sources.</li>
        <li>Run <code>npm test</code> and <code>npm run build</code>.</li>
        <li>Describe what changed, why it changed, and which source supports it.</li>
      </ol>

      <div className="callout"><p>Never include wallet secrets, private keys, RPC credentials, or operator logs containing sensitive data in an example or contribution.</p></div>
    </DocShell>
  );
}
