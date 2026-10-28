"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import { projects, type Category } from "@/data/site";
const filters: ("Todos" | Category)[] = ["Todos", "Frontend", "Backend", "Outros"];
const soon = "inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted/60";
const live = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition";
export default function Projects() {
  const [f, setF] = useState<"Todos" | Category>("Todos");
  const list = projects.filter((p) => f === "Todos" || p.category === f);
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-brand">03 / PROJETOS</p>
        <h2 className="mt-4 text-4xl font-bold">Projetos selecionados.</h2>
        <p className="mt-4 max-w-xl text-muted">Algumas ideias que tirei do papel e projetos que fazem parte da minha evolução como desenvolvedor.</p>
      </Reveal>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
        {filters.map((x) => <button key={x} onClick={() => setF(x)} aria-pressed={f === x}
          className={`rounded-full border px-4 py-1.5 text-sm transition ${f === x ? "border-brand bg-brand/20 text-brand-lilac" : "border-white/10 text-muted hover:border-brand/50"}`}>{x}</button>)}
      </div>
      <ul className="mt-10 grid gap-6 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.id} className={i === 0 && list.length > 1 ? "lg:col-span-2" : ""}>
            <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl hover:shadow-brand/20">
              <div className="relative h-44 bg-gradient-to-br from-brand-deep via-brand-dark/50 to-card p-5" role="img" aria-label={`Prévia visual decorativa de ${p.name}`}>
                <div className="space-y-2 opacity-60 transition group-hover:opacity-100"><div className="h-2 w-1/3 rounded bg-brand-lilac/60" /><div className="h-2 w-2/3 rounded bg-white/20" /><div className="h-2 w-1/2 rounded bg-white/10" /></div>
                {p.example && <span className="absolute right-4 top-4 rounded-full bg-bg/70 px-3 py-1 font-mono text-[10px] text-brand-lilac">EXEMPLO</span>}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-md bg-brand-deep/60 px-2 py-1 font-mono text-xs text-brand-lilac">{t}</li>)}</ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.demo ? <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`${live} bg-brand text-white hover:bg-brand-dark`}><ExternalLink className="h-4 w-4" />Ver projeto</a>
                    : <span aria-disabled="true" className={soon}><ExternalLink className="h-4 w-4" />Em breve</span>}
                  {p.repo ? <a href={p.repo} target="_blank" rel="noopener noreferrer" className={`${live} border border-brand/40 text-brand-lilac hover:bg-brand/10`}><Github className="h-4 w-4" />GitHub</a>
                    : <span aria-disabled="true" className={soon}><Github className="h-4 w-4" />Repositório</span>}
                </div>
              </div>
            </article>
          </li>))}
      </ul>
    </section>
  );
}
