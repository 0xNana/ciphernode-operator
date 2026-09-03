import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Verify Ciphernode Status | Ciphernode Field Guide" };

const checks = [
  ["Registered: false", "The operator is not in the ciphernode registry.", "Register from the authorized bond-owner configuration."],
  ["Active: false + low tickets", "The ticket balance is below the current minimum.", "Add ticket collateral, then read status again."],
  ["Active: false + low bond", "The bond is below the active-maintenance floor.", "Top up FOLD from the bond owner."],
  ["Exit pending: true", "A deregistration or collateral exit is in progress.", "Inspect pending exits and wait for the configured delay before re-registering."],
  ["Requirements changed", "Cached eligibility may be stale after governance changes.", "Use the dashboard or call BondingRegistry.refreshOperatorStatus; the CLI currently has no command for it."],
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">How-to guide</div>
      <h1>Verify active operator status</h1>
      <p className="intro">Separate three questions: is the process running, is the onchain position active, and is the network currently accepting E3 requests?</p>

      <h2>1. Check the local process</h2>
      <pre><code>{`interfold nodes ps`}</code></pre>
      <pre><code>{`interfold nodes logs cn1`}</code></pre>
      <p>Replace <code>cn1</code> with the configured node name. This verifies software state only.</p>

      <h2>2. Read the onchain position</h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>
      <p>An eligible position should report the expected operator and bond-owner addresses, <code>Registered: true</code>, <code>Active: true</code>, <code>Exit pending: false</code>, sufficient bond, and at least the minimum available tickets.</p>

      <h2>3. Diagnose a failed check</h2>
      <div className="table-wrap"><table><thead><tr><th>Signal</th><th>Meaning</th><th>Next action</th></tr></thead><tbody>
        {checks.map(([signal, meaning, action]) => (
          <tr key={signal}><td><code>{signal}</code></td><td>{meaning}</td><td>{action}</td></tr>
        ))}
      </tbody></table></div>

      <h2>4. Check request availability separately</h2>
      <p><code>Active: true</code> means the operator meets registry eligibility requirements. It does not prove that new E3 requests are currently enabled. During onboarding, mainnet requests can remain paused while operators bond, register, and add tickets; check <code>requestsPaused()</code> or the current dashboard before assuming live workload flow.</p>

      <div className="source-note">Checked 3 Sep 2026. Sources: <a href="https://docs.theinterfold.com/ciphernode-operators">Ciphernode Operators</a> and <a href="https://docs.theinterfold.com/ciphernode-operators/registration">Registration &amp; Bonding</a>.</div>
    </DocShell>
  );
}
