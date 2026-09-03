import { DocShell } from "@/components/DocShell";
import { NextStep } from "@/components/NextStep";
import { CopyableCode } from "@/components/CopyableCode";

export const metadata = { title: "Run Your First Ciphernode | Ciphernode Operator Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Tutorial</div>
      <h1>Run your first ciphernode on Sepolia</h1>
      <p className="intro">This walkthrough is deliberately testnet-first. The goal is to understand the node lifecycle, validate your configuration, and get the process running before you put mainnet collateral at risk.</p>

      <div className="callout"><p><strong>Sepolia caveat:</strong> the current Interfold Sepolia deployment uses mock proof verifiers that accept proofs. Use it to rehearse wiring and node operation, not to validate production proving correctness.</p></div>

      <h2>1. Check your machine</h2>
      <p>Interfold’s current operator baseline is Linux or macOS, 8+ CPU cores, 32GB+ DDR5 RAM, 500GB+ NVMe storage, stable connectivity, an open UDP port, and a WebSocket Ethereum RPC endpoint. Those are operator requirements, not just tutorial niceties.</p>
      <p>You can quickly verify your machine resources using the following Linux command:</p>
      <CopyableCode code={`lscpu | grep -E '^CPU\\(s\\):' && free -h && df -h /`} />

      <h2>2. Install the Interfold CLI</h2>
      <CopyableCode code={`curl -fsSL https://raw.githubusercontent.com/theinterfold/interfold/main/install | bash\ninterfoldup install`} />
      <p>Confirm the CLI is available and record the build revision you are testing before proceeding.</p>
      <CopyableCode code={`interfold --help\ninterfold rev`} />

      <h2>3. Initialize ciphernode configuration</h2>
      <CopyableCode code={`interfold ciphernode setup`} />
      <p>The setup creates the Interfold config under <code>~/.config/interfold/</code> and prompts for local encryption.</p>

      <h2>4. Create local credentials</h2>
      <CopyableCode code={`interfold password set\ninterfold net keypair generate\ninterfold wallet set --private-key 0xYOUR_OPERATOR_PRIVATE_KEY\n\n# Safe values to display after secret entry\ninterfold wallet get\ninterfold net get-peer-id`} />
      <p>The network keypair is used for the node’s peer-to-peer identity. The wallet is the operator key used for onchain protocol actions. Treat it as a hot operational key, keep it out of screenshots and recordings, and never reuse the example value.</p>

      <h2>5. Point the node at Sepolia</h2>
      <p>Set the node network to <code>sepolia</code>, enable the Sepolia chain entry, use chain ID <code>11155111</code>, and provide a WebSocket RPC. Keep the generated contract map synchronized with the current Interfold deployment rather than copying addresses from an old post or cached video.</p>
      <CopyableCode code={`node:\n  network: sepolia\n\nchains:\n  - name: sepolia\n    enabled: true\n    rpc_url: 'wss://YOUR_SEPOLIA_RPC'\n    chain_id: 11155111\n    # Keep the current contract map below this point.`} />
      <CopyableCode code={`interfold config check --chain sepolia`} />
      <p>This is a hard checkpoint. The command exits non-zero when a contract address is wrong. Do not start the node until the check passes; a stale deployment can otherwise leave a process syncing nothing without an obvious crash.</p>

      <h2>6. Start the node</h2>
      <CopyableCode code={`# Foreground with INFO logging\ninterfold start -v\n\n# Or use the supervisor\ninterfold nodes up --detach\ninterfold nodes ps\ninterfold nodes logs cn1`} />
      <p>Watch logs for chain sync, P2P connectivity, committee requests, and protocol events. Replace <code>cn1</code> with your configured node name when using the supervisor.</p>

      <h2>7. Prove to yourself that “running” is not “active”</h2>
      <CopyableCode code={`interfold ciphernode status --chain sepolia`} />
      <p>A process can be online while the onchain operator is unbonded, unregistered, or missing ticket collateral. At this point the software is running, but running a process does not yet make it an active ciphernode. The next guide handles the economic/operator state machine.</p>

      <h2>What you learned</h2>
      <ul>
        <li>The node has local keys, chain configuration, and a P2P identity.</li>
        <li>Contract deployment data is operational configuration, not documentation trivia.</li>
        <li>Sepolia is useful for rehearsing the operator workflow, but its current proof-verification setup is intentionally mocked.</li>
        <li>Software uptime and protocol eligibility are separate states.</li>
      </ul>

      <h2>Primary sources</h2>
      <ul>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators/running">Running a Ciphernode</a></li>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators">Ciphernode Operators</a></li>
      </ul>

      <div className="source-note">Tutorial commands and caveats checked against the current Interfold operator documentation on 3 Sep 2026. Re-check the release, deployment manifest, and network configuration before recording or operating.</div>

      <NextStep
        title="Activate the operator position."
        copy="Once the process is healthy, move to the onchain sequence: separate keys, bond FOLD, register, and add tickets."
        href="/how-to/register-an-operator"
        label="Open Activation"
      />
    </DocShell>
  );
}
