import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Operator Requirements | Ciphernode Operator Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Reference</div>
      <h1>Operator requirements</h1>
      <p className="intro">Current values for quick lookup. Protocol parameters can change; verify them against the live dashboard and contracts before committing capital.</p>
      <div className="table-wrap"><table><thead><tr><th>Requirement</th><th>Current documented value</th></tr></thead><tbody>
        <tr><td>FOLD bond</td><td>32,000 FOLD on mainnet</td></tr>
        <tr><td>Ticket collateral</td><td>1,000 sUSDS shares per available ticket on mainnet</td></tr>
        <tr><td>Gas</td><td>ETH on the target network</td></tr>
        <tr><td>CPU</td><td>8+ cores</td></tr>
        <tr><td>Memory</td><td>32GB+ DDR5</td></tr>
        <tr><td>Storage</td><td>500GB+ NVMe SSD</td></tr>
        <tr><td>OS</td><td>Linux or macOS</td></tr>
        <tr><td>Network</td><td>Stable connection with open UDP port</td></tr>
        <tr><td>Ethereum access</td><td>WebSocket RPC endpoint</td></tr>
      </tbody></table></div>
      <h2>Operational distinction</h2>
      <p><code>isCiphernodeBonded</code> and “can register” are not identical checks. The protocol can consider a node bonded at the active-maintenance floor while still requiring the full configured bond for a new registration. Use the current required bond when testing registration readiness.</p>
      <h2>Operating margin</h2>
      <p>The official operator guidance recommends keeping 10–20% above the minimum bond and maintaining extra tickets. A slash or ticket removal can otherwise push a just-at-minimum position directly into <code>Inactive</code>.</p>
      <p><a href="https://docs.theinterfold.com/ciphernode-operators">Verify the current requirements in the official operator overview.</a></p>
      <div className="source-note">Checked 3 Sep 2026 against Interfold operator documentation.</div>
    </DocShell>
  );
}
