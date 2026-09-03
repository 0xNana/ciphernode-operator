const steps = [
  ["E3 requested", "A confidential computation is published onchain."],
  ["Committee selected", "Eligible ciphernodes compete via verifiable ticket sortition."],
  ["Shared key", "The committee runs publicly verifiable distributed key generation."],
  ["Encrypted inputs", "Participants encrypt data to the committee public key."],
  ["FHE execution", "A compute provider evaluates the secure process over ciphertexts."],
  ["Threshold decrypt", "Committee shares unlock only the permitted plaintext output."],
];

export function ProtocolFlow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 my-8" aria-label="Interfold E3 flow">
      {steps.map(([title, copy], i) => (
        <div className="relative border border-border rounded-xl p-4 bg-[#0d1117] min-h-[94px]" key={title}>
          <strong className="block text-sm font-semibold text-slate-200 mb-1">{title}</strong>
          <span className="text-slate-400 text-xs leading-relaxed">{copy}</span>
          {i !== steps.length - 1 && (
            <div className="hidden lg:block absolute -right-3 top-10 text-primary z-10 text-lg leading-none">
              &rarr;
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
