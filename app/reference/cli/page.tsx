import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Ciphernode CLI Reference | Ciphernode Operator Guide" };

const groups = [
  {
    title: "Identity and configuration",
    commands: [
      ["interfold rev", "Show the build revision."],
      ["interfold wallet get", "Show the configured wallet address without exposing the private key."],
      ["interfold net get-peer-id", "Show the libp2p peer ID."],
      ["interfold config check --chain sepolia", "Compare one chain’s configured deployment with the current manifest."],
    ],
  },
  {
    title: "Node process",
    commands: [
      ["interfold start -v", "Run in the foreground with INFO logging."],
      ["interfold nodes up --detach", "Start configured nodes in the background."],
      ["interfold nodes ps", "List supervised node processes."],
      ["interfold nodes logs cn1", "Inspect one configured node’s logs."],
      ["interfold nodes down", "Stop all supervised nodes."],
    ],
  },
  {
    title: "Onchain operator",
    commands: [
      ["interfold ciphernode status --chain mainnet", "Read registration, eligibility, collateral, and exits."],
      ["interfold ciphernode set-bond-owner --owner 0xBOND_OWNER --chain mainnet", "Authorize the initial collateral owner from the operator key."],
      ["interfold --config owner.yaml ciphernode register --operator 0xOPERATOR", "Register from an EOA bond-owner configuration."],
    ],
  },
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Reference</div>
      <h1>CLI quick reference</h1>
      <p className="intro">A compact lookup for the commands used across this guide. Confirm syntax against the installed CLI before automating it.</p>

      {groups.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <div className="table-wrap"><table><thead><tr><th>Command</th><th>Purpose</th></tr></thead><tbody>
            {group.commands.map(([command, purpose]) => (
              <tr key={command}><td><code>{command}</code></td><td>{purpose}</td></tr>
            ))}
          </tbody></table></div>
        </section>
      ))}

      <h2>Destructive commands</h2>
      <div className="callout"><p><code>interfold nodes purge</code> removes local ciphernode data, while <code>interfold purge-all</code> wipes all local Interfold data. They are intentionally excluded from the copy-first table above. Confirm backups and the exact target before using either command.</p></div>

      <h2>Two commands that answer different questions</h2>
      <ul>
        <li><code>interfold nodes ps</code> answers: is the local process running?</li>
        <li><code>interfold ciphernode status</code> answers: what is the onchain operator state?</li>
      </ul>

      <div className="source-note">Checked 3 Sep 2026. Source: <a href="https://docs.theinterfold.com/ciphernode-operators/running">Running a Ciphernode</a>.</div>
    </DocShell>
  );
}
