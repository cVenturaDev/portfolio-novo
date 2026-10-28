import { Code2, LayoutTemplate, Database, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { skills } from "@/data/site";
const icons = { code: Code2, layout: LayoutTemplate, database: Database, wrench: Wrench } as const;
export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-brand">02 / HABILIDADES</p>
        <h2 className="mt-4 text-4xl font-bold">Tecnologias que estudo.</h2>
        <p className="mt-4 max-w-xl text-muted">Lista das tecnologias que venho estudando, sem níveis de domínio.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => { const Icon = icons[s.icon as keyof typeof icons]; return (
          <Reveal key={s.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-white/10 bg-card p-6">
              <h3 className="flex items-center gap-3 font-semibold"><Icon className="h-5 w-5 text-brand" aria-hidden />{s.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {s.items.map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-xl border border-white/10 bg-bg px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-brand hover:shadow-md hover:shadow-brand/20">
                    <span aria-hidden className="grid h-6 w-6 place-items-center rounded-md bg-brand-deep font-mono text-[10px] font-bold text-brand-lilac">{t.slice(0, 2)}</span>{t}
                  </li>))}
              </ul>
            </div>
          </Reveal>); })}
      </div>
    </section>
  );
}
