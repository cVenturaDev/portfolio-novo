"use client";
import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { person } from "@/data/site";
const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:-translate-y-0.5";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(person.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { window.prompt("Copie o e-mail:", person.email); }
  }
  return (
    <section id="contato" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-brand">04 / CONTATO</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Vamos conversar?</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">Estou aberto a oportunidades de estágio, novos aprendizados e conexões com pessoas da área de tecnologia.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${person.email}`} className={`${btn} bg-brand shadow-lg shadow-brand/30 hover:bg-brand-dark`}><Mail className="h-5 w-5" />E-mail</a>
          <button onClick={copy} className={`${btn} border border-brand/40 text-brand-lilac hover:bg-brand/10`}>{copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}{copied ? "Copiado!" : "Copiar e-mail"}</button>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-brand/40 text-brand-lilac hover:bg-brand/10`}><Github className="h-5 w-5" />GitHub</a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-brand/40 text-brand-lilac hover:bg-brand/10`}><Linkedin className="h-5 w-5" />LinkedIn</a>
          <a href={person.instagram} target="_blank" rel="noopener noreferrer" className={`${btn} border border-brand/40 text-brand-lilac hover:bg-brand/10`}><Instagram className="h-5 w-5" />Instagram</a>
        </div>
        <p className="sr-only" aria-live="polite">{copied ? "E-mail copiado" : ""}</p>
      </Reveal>
    </section>
  );
}
