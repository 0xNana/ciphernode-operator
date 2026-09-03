import { DocShell } from "@/components/DocShell";
import { ProtocolFlow } from "@/components/ProtocolFlow";
import { SortitionDiagram } from "@/components/SortitionDiagram";
import { NextStep } from "@/components/NextStep";

export const metadata = { title: "Why Ciphernodes Exist | Ciphernode Field Guide" };

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Explanation</div>
      <h1>Why ciphernodes exist</h1>
      <p className="intro">Encryption can hide data while leaving control centralized. Interfold’s ciphernode layer is designed to distribute the authority required to generate encryption keys and reveal permitted outputs.</p>

      <div className="callout"><p><strong>Why now:</strong> Network Alpha is live on Ethereum mainnet. Public operator participation is still being opened in stages, but the current operator documentation says operators can bond, register, and add ticket collateral even while mainnet E3 requests are paused.</p></div>

      <h2>The trust problem</h2>
      <p>Imagine several organizations want a shared answer from sensitive data but cannot reveal their raw inputs to one another. Encrypting the data is necessary, but it does not answer a second question: <em>who controls the key?</em></p>
      <p>If one server creates or holds the complete decryption key, confidentiality still depends on that server. The operator can be compromised, coerced, or simply become unavailable. The computation is encrypted, but the control plane remains a single point of trust.</p>

      <div className="callout"><p><strong>A ciphernode isn’t there to learn the secret. It’s there to make sure nobody gets to control the secret alone.</strong></p></div>

      <h2>Where ciphernodes sit in an E3</h2>
      <ProtocolFlow />
      <p>An E3 is an Encrypted Execution Environment: a request-scoped confidential computation. Ciphernodes are selected into an E3 committee. The committee participates in publicly verifiable distributed key generation, contributes to the public encryption key, stays available while the E3 runs, and later produces decryption shares for the accepted encrypted output.</p>

      <h2>Ciphernodes are not compute providers</h2>
      <p>The distinction matters. The compute provider executes the secure process over encrypted inputs. The ciphernode committee supplies distributed cryptographic authority around that process. One role evaluates ciphertexts; the other prevents encryption and decryption control from collapsing into one party.</p>

      <h2>How committee selection works</h2>
      <p>Eligible registered operators hold ticket balances. For each E3, sortition derives deterministic ticket scores from the operator, ticket number, E3 identifier, and request-bound seed. Lower scores rank better. Operators submit their best ticket, and the registry finalizes the committee from those results.</p>
      <SortitionDiagram />
      <pre><code>{`availableTickets = floor(ticketTokenBalance / ticketPrice)\n\nscore = keccak256(node, ticketNumber, e3Id, seed)`}</code></pre>
      <p>More available tickets increase selection probability, but a ticket balance is not a guarantee of committee membership. The balance is economic weight in a verifiable selection process.</p>

      <h2>Why public verifiability matters</h2>
      <p>Threshold cryptography alone can distribute secret material, but observers still need evidence that the participants followed the protocol correctly. Interfold couples its threshold BFV workflow with zero-knowledge proof systems and publicly verifiable DKG so key-generation, share, and decryption behavior can be checked rather than merely trusted.</p>

      <h2>Economics completes the operator model</h2>
      <p>Cryptography tells the network what correct behavior looks like. Bonding and slashing attach consequences to operator behavior. A registered operator can face ticket penalties, FOLD bond penalties, committee removal, or bans under configured slash policies when assigned duties are violated.</p>

      <div className="callout"><p><strong>Useful mental model:</strong> ciphernodes distribute authority; proofs make behavior checkable; bonding and slashing make protocol obligations economically accountable.</p></div>

      <h2>Primary sources</h2>
      <ul>
        <li><a href="https://blog.theinterfold.com/network-alpha-mainnet/">Network Alpha: The Interfold on Mainnet</a></li>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators">Ciphernode Operators</a></li>
        <li><a href="https://docs.theinterfold.com/ciphernode-operators/tickets-and-sortition">Tickets &amp; Sortition</a></li>
        <li><a href="https://github.com/theinterfold/interfold/blob/main/docs/pages/cryptography.mdx">Cryptography implementation guide</a></li>
      </ul>

      <div className="source-note">Source-checked on 3 Sep 2026. This page is explanatory; verify current protocol parameters, participation status, and contract configuration against official sources before operating.</div>

      <NextStep
        title="Run the software on Sepolia."
        copy="Now that the operator layer is clear, rehearse the complete CLI workflow without mainnet capital."
        href="/tutorials/run-your-first-ciphernode"
        label="Start Tutorial"
      />
    </DocShell>
  );
}
