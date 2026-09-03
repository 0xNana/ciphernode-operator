import { DocShell } from "@/components/DocShell";

export const metadata = { title: "Ciphernode Glossary | Ciphernode Field Guide" };

const terms = [
  ["E3", "Encrypted Execution Environment: a request-scoped confidential computation coordinated by Interfold."],
  ["Ciphernode", "An operator participating in the distributed threshold layer for E3 key generation and decryption."],
  ["CiCo", "Ciphernode Committee selected for a particular E3."],
  ["PVDKG", "Publicly Verifiable Distributed Key Generation: committee members jointly generate key material with proofs that make the process checkable."],
  ["BFV", "Brakerski–Fan–Vercauteren, the homomorphic encryption scheme used by Interfold’s current first-party FHE path."],
  ["FHE", "Fully Homomorphic Encryption: computation directly over ciphertexts without first decrypting the private inputs."],
  ["Sortition", "The verifiable ticket-scoring process used to rank eligible ciphernodes for committee selection."],
  ["tFOLD", "Non-transferable ticket token representing an operator’s ticket balance."],
  ["Bond owner", "Wallet that controls a ciphernode position’s FOLD and ticket collateral and receives protocol rewards."],
  ["Operator key", "The online key used by the running node for protocol operations."],
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Reference</div>
      <h1>Glossary</h1>
      <div className="table-wrap"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
        {terms.map(([term,meaning]) => <tr key={term}><td><strong>{term}</strong></td><td>{meaning}</td></tr>)}
      </tbody></table></div>
      <div className="source-note">Terminology checked 3 Sep 2026 against the <a href="https://docs.theinterfold.com/ciphernode-operators">operator overview</a> and <a href="https://github.com/theinterfold/interfold/blob/main/docs/pages/cryptography.mdx">cryptography implementation guide</a>.</div>
    </DocShell>
  );
}
