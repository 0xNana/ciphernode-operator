import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Contract Reference | Ciphernode Field Guide" };

const mainnet = [
  ["Interfold", "0x28cF63B459e6218C69EA97ea7D90541cf648c715"],
  ["CiphernodeRegistry", "0xC927A5B2d8F68697bC28C0670df05178c93df2d7"],
  ["BondingRegistry", "0x0ec90465095C21830BEcED07e032809A2Bd2915F"],
  ["SlashingManager", "0x974E865B1BB24AF2a9ef8204AdEA9251Cc7C5FD9"],
  ["E3RefundManager", "0x1940eF168f4E0B3dA24BEca539856684793B0F6e"],
  ["InterfoldTicketToken", "0xC0B5b49a3949eC4B520eF21BaCFE16e3695F3B5D"],
  ["FOLD", "0xE172e9B6cfBeeB5593bDcE3f077356FDb33af904"],
  ["USDS", "0xdC035D45d973E3EC169d2276DDab16f1e407384F"],
  ["sUSDS", "0xa3931d71877C0E7a3148CB7Eb4463524FEc27fbD"],
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Reference</div>
      <h1>Mainnet contracts</h1>
      <p className="intro">Fast lookup for the current documented Network Alpha deployment. Always run <code>interfold config check</code> or inspect the official deployment manifest before using these values operationally.</p>
      <div className="table-wrap"><table><thead><tr><th>Contract/token</th><th>Address</th></tr></thead><tbody>
        {mainnet.map(([name,address]) => <tr key={name}><td>{name}</td><td><code>{address}</code></td></tr>)}
      </tbody></table></div>
      <h2>What each core contract does</h2>
      <ul>
        <li><strong>Interfold:</strong> coordinates E3 requests and lifecycle.</li>
        <li><strong>CiphernodeRegistry:</strong> tracks operators and committee formation.</li>
        <li><strong>BondingRegistry:</strong> manages FOLD bonds, ticket collateral, registration, and exits.</li>
        <li><strong>SlashingManager:</strong> handles slash proposals, appeals, penalties, and bans.</li>
        <li><strong>E3RefundManager:</strong> allocates failure-path refunds and compensation.</li>
      </ul>
      <div className="callout"><p>Mainnet E3 requests may be paused during operator onboarding while bonding, registration, and ticket deposits remain available. Check <code>requestsPaused()</code> before assuming request flow is open.</p></div>
      <p><a href="https://docs.theinterfold.com/ciphernode-operators">Verify the current deployment in the official operator overview.</a></p>
      <div className="source-note">Addresses checked against Interfold docs on 3 Sep 2026. These are intentionally labeled volatile operational data.</div>
    </DocShell>
  );
}
