import { Code2, Globe, Cpu, Sprout } from "lucide-react";
import Reveal from "./Reveal";
import { aboutCards } from "@/data/site";
const icons = { code: Code2, globe: Globe, cpu: Cpu, sprout: Sprout } as const;
export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-brand">01 / SOBRE</p>
          <h2 className="mt-4 text-4xl font-bold">Um pouco sobre mim.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">Sou estudante de Análise e Desenvolvimento de Sistemas e tenho interesse em desenvolvimento de software, tecnologias web e infraestrutura de computadores. Gosto de aprender na prática, explorar novas ferramentas e transformar ideias em projetos funcionais.</p>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((c, i) => { const Icon = icons[c.icon as keyof typeof icons]; return (
            <li key={c.title} className={i % 2 ? "sm:translate-y-8" : ""}>
              <Reveal delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-card p-6 transition hover:border-brand/50">
                  <span className="font-mono text-xs text-brand-dark">0{i + 1}</span>
                  <Icon className="my-3 h-6 w-6 text-brand-lilac" aria-hidden />
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted">{c.text}</p>
                </div>
              </Reveal>
            </li>); })}
        </ol>
      </div>
    </section>
  );
}
