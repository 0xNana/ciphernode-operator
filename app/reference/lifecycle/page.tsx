import { DocShell } from "@/components/DocShell";
import { OperatorLifecycle } from "@/components/OperatorLifecycle";

export const metadata = { title: "Operator Lifecycle | Ciphernode Operator Guide" };

const states = [
  ["Unbonded", "No ciphernode bond deposited; registration is unavailable."],
  ["Bonded", "FOLD is deposited, but the operator is not registered."],
  ["Registered", "The operator is in the registry but does not meet every active requirement."],
  ["Active", "Registered, sufficiently bonded and ticket-funded, and eligible for sortition."],
  ["Inactive", "Still registered, but below a current bond or ticket requirement."],
  ["ExitPending", "Deregistration was requested; collateral is waiting through the exit delay."],
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Reference</div>
      <h1>Operator lifecycle</h1>
      <p className="intro">Use this state map when software is running but the operator is not behaving as expected onchain.</p>

      <OperatorLifecycle />

      <div className="table-wrap"><table><thead><tr><th>State</th><th>Protocol meaning</th></tr></thead><tbody>
        {states.map(([state, meaning]) => (
          <tr key={state}><td><strong>{state}</strong></td><td>{meaning}</td></tr>
        ))}
      </tbody></table></div>

      <h2>Slashing intersects the lifecycle</h2>
      <p><strong>Slashed</strong> is not a registry state in the official lifecycle table. A slash policy can burn tickets, confiscate bond, remove a node from committee duty, ban it, or reduce its collateral enough to make it inactive.</p>
      <p>Appeal behavior is also policy-specific. A zero-second appeal window means immediate execution, so operators should monitor <code>SlashProposed</code> rather than assuming every penalty includes time to respond.</p>

      <h2>State-changing actions</h2>
      <div className="table-wrap"><table><thead><tr><th>Action</th><th>Likely transition</th></tr></thead><tbody>
        <tr><td>Bond the full required FOLD</td><td>Unbonded → Bonded</td></tr>
        <tr><td>Register the operator</td><td>Bonded → Registered</td></tr>
        <tr><td>Meet ticket and bond minimums</td><td>Registered or Inactive → Active</td></tr>
        <tr><td>Fall below an eligibility minimum</td><td>Active → Inactive</td></tr>
        <tr><td>Deregister</td><td>Registered or Active → ExitPending</td></tr>
      </tbody></table></div>

      <div className="source-note">Checked 3 Sep 2026. Sources: <a href="https://docs.theinterfold.com/ciphernode-operators">Ciphernode Operators</a> and <a href="https://docs.theinterfold.com/ciphernode-operators/exits-and-slashing">Exits, Rewards &amp; Slashing</a>.</div>
    </DocShell>
  );
}
