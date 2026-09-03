import Link from "next/link";

type NextStepProps = {
  title: string;
  copy: string;
  href: string;
  label?: string;
};

export function NextStep({ title, copy, href, label = "Continue" }: NextStepProps) {
  return (
    <aside className="next-step" aria-label="Next step">
      <div>
        <div className="next-step-label">Next step</div>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link href={href}>{label} →</Link>
    </aside>
  );
}
