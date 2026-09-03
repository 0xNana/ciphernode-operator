import Link from "next/link";
import { DocShell } from "@/components/DocShell";
import { NextStep } from "@/components/NextStep";

export const metadata = { title: "Start Here | Ciphernode Field Guide" };

const path = [
  {
    mode: "02 · Understand",
    title: "Why ciphernodes exist",
    copy: "Build the mental model: E3s, committee selection, distributed keys, encrypted computation, and threshold decryption.",
    href: "/explanation/why-ciphernodes",
  },
  {
    mode: "03 · Tutorial",
    title: "Start a node on Sepolia",
    copy: "Install the CLI, create local credentials, validate deployment configuration, and inspect the running process.",
    href: "/tutorials/run-your-first-ciphernode",
  },
  {
    mode: "04 · Activate",
    title: "Become an active operator",
    copy: "Separate the operator and bond-owner keys, bond FOLD, register, add tickets, and verify eligibility.",
    href: "/how-to/register-an-operator",
  },
];

export default function Page() {
  return (
    <DocShell>
      <div className="eyebrow">Start here</div>
      <h1>The shortest route from curious to operational</h1>
      <p className="intro">This community guide compresses the operator journey into four ordered stages. Use the official Interfold documentation as the protocol authority; use this site to decide what to learn or do next.</p>

      <ol className="path-list">
        {path.map((item, index) => (
          <li key={item.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{item.mode}</small>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
              <Link href={item.href}>Open this guide →</Link>
            </div>
          </li>
        ))}
      </ol>

      <div className="callout"><p><strong>Do not start with mainnet capital.</strong> First rehearse the software workflow on Sepolia, confirm which wallet controls each responsibility, and verify every live economic parameter before signing.</p></div>

      <NextStep
        title="Build the mental model first."
        copy="Understand where ciphernodes sit inside an E3 before you run or fund one."
        href="/explanation/why-ciphernodes"
        label="Open Explanation"
      />

      <h2>What this site deliberately does not do</h2>
      <p>It does not duplicate the complete official documentation, replace the deployment manifest, or guarantee that a parameter copied today remains current tomorrow.</p>

      <p><a href="https://docs.theinterfold.com/ciphernode-operators">Open the official ciphernode operator documentation.</a></p>
    </DocShell>
  );
}
