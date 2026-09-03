"use client";

import { useState } from "react";

export function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="relative group my-6 not-prose">
      <pre className="bg-[#07090d] border border-border rounded-xl p-5 overflow-x-auto text-primary/90">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 px-2.5 py-1 text-xs font-semibold bg-[#171d1b] border border-[#35403d] text-slate-300 rounded opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all hover:bg-[#1d2522] hover:text-white"
        aria-label="Copy code"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
