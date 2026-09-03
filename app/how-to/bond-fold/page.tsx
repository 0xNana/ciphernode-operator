import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Bond FOLD | Ciphernode Field Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">How-to guide</div>
      <h1>Bond FOLD for an operator</h1>
      <p className="intro">Use the bond-owner wallet to establish the operator’s FOLD collateral after the running node has authorized that owner.</p>

      <h2>Before you sign</h2>
      <ul>
        <li>Confirm the operator address and selected bond owner.</li>
        <li>Check the live <code>requiredCiphernodeBond</code>; the current documented mainnet value is 32,000 FOLD.</li>
        <li>Fund the bond-owner wallet with FOLD and ETH for gas.</li>
        <li>Use a configuration whose encrypted signer is the bond owner.</li>
      </ul>

      <h2>1. Inspect the current position</h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>

      <h2>2. Authorize the owner if needed</h2>
      <p>This transaction is signed by the operator key.</p>
      <pre><code>{`interfold ciphernode set-bond-owner --owner 0xBOND_OWNER --chain mainnet`}</code></pre>

      <h2>3. Bond from the owner configuration</h2>
      <pre><code>{`interfold --config /path/to/owner.yaml ciphernode bond \\\n  --operator 0xOPERATOR bond --amount 32000`}</code></pre>
      <p>The CLI handles any required token approval before submitting the bond transaction.</p>

      <h2>4. Verify before registering</h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>
      <p>Compare the reported bond with the full current requirement. <code>isCiphernodeBonded</code> can remain true at the active-maintenance floor while a new registration still requires the full bond.</p>

      <div className="callout"><p><strong>Operational margin:</strong> official guidance recommends keeping 10–20% above the minimum so a penalty does not immediately make the position inactive.</p></div>

      <div className="source-note">Checked 3 Sep 2026. Verify the live requirement before signing. Source: <a href="https://docs.theinterfold.com/ciphernode-operators/registration">Registration &amp; Bonding</a>.</div>
    </DocShell>
  );
}
