import { ReactNode } from "react";
import { DocsSidebar } from "@/components/DocsSidebar";

export function DocShell({ children }: { children: ReactNode }) {
  return (
    <main className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-14 grid grid-cols-1 md:grid-cols-[268px_minmax(0,760px)] gap-8 md:gap-16 items-start">
      <DocsSidebar />
      <article className="prose prose-invert prose-slate max-w-none 
        prose-headings:text-slate-100 prose-headings:font-bold prose-headings:tracking-tight 
        prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-8
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2
        prose-p:text-slate-300 prose-p:leading-7 
        prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline
        prose-code:text-primary/90 prose-code:bg-primary-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#07090d] prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-5
        prose-li:text-slate-300
        prose-strong:text-slate-100
      ">
        {children}
      </article>
    </main>
  );
}
