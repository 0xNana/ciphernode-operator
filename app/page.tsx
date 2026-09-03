import Link from "next/link";
import { ProtocolFlow } from "@/components/ProtocolFlow";
import { NextStep } from "@/components/NextStep";

export default function Home() {
  return (
    <main>
      <section className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-4">Ciphernode Field Guide</div>
          <h1 className="text-5xl md:text-[6.5rem] font-bold tracking-tighter leading-[0.98] max-w-[940px] mb-6 text-slate-100">
            From zero to active.
          </h1>
          <p className="max-w-[760px] text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            Learn the ciphernode model, run a node on Sepolia, and prepare an operator for mainnet participation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-lg bg-primary text-black font-semibold hover:-translate-y-px transition-transform" href="/documentation">
              Start now
            </Link>
            <Link className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-lg border border-border bg-surface text-slate-100 font-semibold hover:-translate-y-px hover:border-slate-600 transition-all" href="/tutorials/run-your-first-ciphernode">
              Run one on Sepolia
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 border-t border-border/70">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-primary uppercase tracking-[0.16em] text-xs font-bold mb-4">A docs-shaped operator curriculum</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-100">What you’ll be able to do</h2>
          <p className="max-w-[760px] text-slate-400 text-lg mb-10">
            Each section answers a different operator question. Move through them in order, or jump directly to the task you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              ["01", "Build the mental model", "Explanation", "See how E3s, committees, DKG, FHE, and threshold decryption fit together."],
              ["02", "Run the software", "Tutorial", "Rehearse a complete ciphernode setup on Sepolia before committing capital."],
              ["03", "Prepare the operator", "How-to", "Separate keys, validate configuration, and understand the onchain activation path."],
              ["04", "Enter the protocol", "How-to", "Bond FOLD, register, add tickets, and verify that the operator is eligible."],
              ["05", "Operate responsibly", "Reference", "Keep requirements, lifecycle states, contracts, and CLI commands close at hand."],
              ["06", "Stay current", "Source map", "Use official Interfold docs and live contracts as the authority for volatile values."],
            ].map(([number, title, mode, copy]) => (
              <div key={number} className="border border-border bg-surface/70 rounded-xl p-5">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-sm text-primary">{number}</span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-500">{mode}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-100 mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1160px] mx-auto">
          <span className="inline-block border border-border rounded-full px-3 py-1 text-slate-400 text-xs mb-4">Mental model</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-100">One confidential computation, end to end</h2>
          <p className="max-w-[760px] text-slate-400 text-lg mb-10">
            A ciphernode is not the machine doing the application computation. It is part of the committee that collectively establishes encryption and decryption authority for an E3.
          </p>
          <ProtocolFlow />
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 border-t border-border/70">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-100">Operator path at a glance</h2>
          <p className="max-w-[760px] text-slate-400 text-lg mb-8">
            The sequence is progressive, but the reference layer stays available whenever you need to verify a detail.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-surface text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-semibold">Stage</th>
                  <th className="px-4 py-3 font-semibold">Diátaxis mode</th>
                  <th className="px-4 py-3 font-semibold">Outcome</th>
                  <th className="px-4 py-3 font-semibold">Next</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {[
                  ["01", "Understand", "A reliable mental model of the operator layer", "/explanation/why-ciphernodes"],
                  ["02", "Tutorial", "A running Sepolia process you can inspect", "/tutorials/run-your-first-ciphernode"],
                  ["03", "How-to", "A configured operator ready for activation", "/how-to/register-an-operator"],
                  ["04", "Reference", "A repeatable operating and verification loop", "/reference/operator-requirements"],
                ].map(([stage, mode, outcome, href]) => (
                  <tr key={stage}>
                    <td className="px-4 py-4 font-mono text-primary">{stage}</td>
                    <td className="px-4 py-4 font-semibold text-slate-200">{mode}</td>
                    <td className="px-4 py-4 text-slate-400">{outcome}</td>
                    <td className="px-4 py-4"><Link className="text-primary hover:underline whitespace-nowrap" href={href}>Open →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-100">Read the docs in order</h2>
          <p className="max-w-[760px] text-slate-400 text-lg mb-10">
            Start with the mental model, rehearse the software, activate the onchain position, then keep the reference pages nearby while you operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Link className="group border border-border bg-gradient-to-b from-surface/80 to-background rounded-2xl p-6 hover:border-slate-500 transition-colors" href="/start-here">
              <div className="text-primary text-xs tracking-widest uppercase font-bold mb-3">01 · Orient</div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-2 group-hover:text-primary transition-colors">Start here</h3>
              <p className="text-slate-400 leading-relaxed">See the complete route from understanding a ciphernode to operating one responsibly.</p>
            </Link>
            <Link className="group border border-border bg-gradient-to-b from-surface/80 to-background rounded-2xl p-6 hover:border-slate-500 transition-colors" href="/explanation/why-ciphernodes">
              <div className="text-primary text-xs tracking-widest uppercase font-bold mb-3">02 · Understand</div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-2 group-hover:text-primary transition-colors">Why ciphernodes?</h3>
              <p className="text-slate-400 leading-relaxed">
                Understand the trust problem, threshold cryptography, committee formation, and why “encrypted” is not the same as “decentralized.”
              </p>
            </Link>
            <Link className="group border border-border bg-gradient-to-b from-surface/80 to-background rounded-2xl p-6 hover:border-slate-500 transition-colors" href="/tutorials/run-your-first-ciphernode">
              <div className="text-primary text-xs tracking-widest uppercase font-bold mb-3">03 · Tutorial</div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-2 group-hover:text-primary transition-colors">Run your first node</h3>
              <p className="text-slate-400 leading-relaxed">
                Use Sepolia to install the CLI, create credentials, configure contracts, verify your setup, and start the process.
              </p>
            </Link>
            <Link className="group border border-border bg-gradient-to-b from-surface/80 to-background rounded-2xl p-6 hover:border-slate-500 transition-colors" href="/how-to/register-an-operator">
              <div className="text-primary text-xs tracking-widest uppercase font-bold mb-3">04 · Activate</div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-2 group-hover:text-primary transition-colors">Become active</h3>
              <p className="text-slate-400 leading-relaxed">
                Separate your operator and bond-owner roles, bond FOLD, register the operator, add tickets, and verify active status.
              </p>
            </Link>
          </div>
          <NextStep
            title="Begin with the operator mental model."
            copy="Start with why ciphernodes exist, then follow the tutorial and activation guides in sequence."
            href="/start-here"
            label="Start here"
          />
        </div>
      </section>
    </main>
  );
}
