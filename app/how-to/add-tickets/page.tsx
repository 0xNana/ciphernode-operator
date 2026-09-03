import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Add Ciphernode Tickets | Ciphernode Operator Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">How-to guide</div>
      <h1>Add ticket collateral</h1>
      <p className="intro">Deposit ticket collateral from the bond-owner wallet to mint non-transferable tFOLD for the operator and increase its sortition weight.</p>

      <h2>Before you sign</h2>
      <ul>
        <li>Confirm the operator is registered and has no exit in progress.</li>
        <li>Check the live <code>ticketPrice</code> and <code>minTicketBalance</code>.</li>
        <li>Fund the bond owner with the configured collateral token and ETH for gas.</li>
      </ul>
      <p>Mainnet currently uses sUSDS shares, with 1,000 shares documented as the price of one available ticket.</p>

      <h2>1. Buy tickets from the owner configuration</h2>
      <pre><code>{`interfold --config /path/to/owner.yaml ciphernode tickets --operator 0xOPERATOR buy --amount 1000`}</code></pre>
      <p>The deposit mints tFOLD to the operator and re-evaluates active status.</p>

      <h2>2. Understand the resulting weight</h2>
      <pre><code>{`availableTickets = floor(ticketTokenBalance / ticketPrice)`}</code></pre>
      <p>More available tickets increase committee-selection probability relative to peers; they do not guarantee selection. Ticket balances are snapshotted at <code>requestBlock - 1</code>, so a deposit made after an E3 request does not affect that round.</p>

      <h2>3. Verify the balance</h2>
      <pre><code>{`interfold ciphernode status --chain mainnet`}</code></pre>
      <p>Confirm the ticket balance, available-ticket count, and <code>Active: true</code>.</p>

      <div className="callout"><p><strong>Keep a buffer.</strong> Burning or slashing tickets below the minimum makes the operator inactive immediately, while withdrawn collateral remains subject to the exit delay.</p></div>

      <div className="source-note">Checked 3 Sep 2026. Verify live token and pricing parameters before signing. Source: <a href="https://docs.theinterfold.com/ciphernode-operators/tickets-and-sortition">Tickets &amp; Sortition</a>.</div>
    </DocShell>
  );
}
