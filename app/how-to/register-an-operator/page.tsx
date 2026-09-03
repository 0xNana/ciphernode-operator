import { DocShell } from "@/components/DocShell";
import { NextStep } from "@/components/NextStep";
import { OperatorLifecycle } from "@/components/OperatorLifecycle";

export const metadata = { title: "Register a Ciphernode Operator | Ciphernode Field Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">How-to guide</div>
      <h1>Register and activate a ciphernode operator</h1>
      <p className="intro">Use this after the node software is already running. The objective is specific: establish the onchain operator position and reach <code>Active</code> status.</p>

      <div className="callout"><p><strong>Network Alpha:</strong> public operator participation is opening in stages. The current operator docs say bonding, registration, and ticket collateral can proceed while mainnet E3 requests are paused. Confirm the current participation status before committing capital.</p></div>

      <h2>Before you transact</h2>
      <p>Interfold supports one-wallet and two-wallet setups. The safer production pattern separates the hot <strong>operator key</strong> from the <strong>bond owner</strong>. The operator runs the node; the bond owner controls FOLD, ticket collateral, exits, and position lifecycle.</p>
      <div className="callout"><p>Interfold explicitly recommends a separate cold wallet or Safe for the bond owner so the online node does not hold the key that controls collateral.</p></div>

      <h2>1. Inspect current status</h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>
      <p>Confirm the operator address, bond owner, registration state, active state, ticket balance, bond balance, and pending exits before changing anything.</p>

      <h2>2. Authorize the bond owner</h2>
      <pre><code>{`interfold ciphernode set-bond-owner --owner 0xBOND_OWNER --chain mainnet`}</code></pre>
      <p>This initial authorization comes from the operator key. Once the position is funded or registered, owner rotation uses a proposal-and-accept flow.</p>

      <h2>3. Bond FOLD from the owner wallet</h2>
      <p>Mainnet currently requires a full <strong>32,000 FOLD</strong> bond to register. Treat that number as a live protocol parameter and verify it before signing.</p>
      <pre><code>{`interfold --config /path/to/owner.yaml ciphernode bond \\\n  --operator 0xOPERATOR bond --amount 32000`}</code></pre>

      <h2>4. Register the operator</h2>
      <pre><code>{`interfold --config /path/to/owner.yaml ciphernode register \\\n  --operator 0xOPERATOR`}</code></pre>
      <p>Registration adds the operator to the ciphernode registry, but registration alone does not necessarily make it active.</p>

      <h2>5. Add ticket collateral</h2>
      <p>Mainnet currently uses sUSDS shares as ticket collateral. One available ticket requires <strong>1,000 sUSDS shares</strong> at the current ticket price.</p>
      <pre><code>{`interfold --config /path/to/owner.yaml ciphernode tickets \\\n  --operator 0xOPERATOR buy --amount 1000`}</code></pre>
      <pre><code>{`availableTickets = floor(ticketTokenBalance / ticketPrice)`}</code></pre>

      <h2>6. Verify <code>Active: true</code></h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>
      <p>The target output shows <code>Registered: true</code>, <code>Active: true</code>, <code>Exit pending: false</code>, at least one available ticket, and the full required bond.</p>

      <h2>The state machine to remember</h2>
      <OperatorLifecycle />
      <p>Slashing is shown separately because it is an event governed by the active slash policy, not an ordinary registry state. A penalty may reduce tickets or bond, remove the node from committee duty, make it inactive, or ban it.</p>

      <h2>After activation</h2>
      <ul>
        <li>Maintain a bond and ticket buffer rather than operating exactly at the minimum.</li>
        <li>Alert on <code>isActive</code> becoming false, low ticket balance, and <code>SlashProposed</code> events.</li>
        <li>Keep both the operator and bond-owner wallets funded for their respective gas needs.</li>
        <li>Preserve logs and check for active E3 duties before maintenance.</li>
      </ul>

      <h2>Primary sources</h2>
      <ul>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators/registration">Registration &amp; Bonding</a></li>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators/tickets-and-sortition">Tickets &amp; Sortition</a></li>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators/exits-and-slashing">Exits, Rewards &amp; Slashing</a></li>
      </ul>

      <div className="source-note">Registration sequence and current mainnet thresholds checked against Interfold’s operator documentation on 3 Sep 2026. Verify live values, participation status, and the active slash policy before signing.</div>

      <NextStep
        title="Verify active status."
        copy="Registration is only one state transition. Confirm bond, tickets, eligibility, and request availability separately."
        href="/how-to/verify-active-status"
        label="Verify Status"
      />
    </DocShell>
  );
}
