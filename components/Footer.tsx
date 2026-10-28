"use client";
import { Github, Linkedin } from "lucide-react";
import { nav, person } from "@/data/site";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-bold tracking-[0.25em]">VENTURA<span className="text-brand"> DEV</span></p>
          <p className="mt-1 text-sm text-muted">Desenvolvido com criatividade e código.</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5 text-sm text-muted">{nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-brand-lilac">{n.label}</a></li>)}</ul>
        <div className="flex gap-4 text-muted">
          <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-brand-lilac"><Github className="h-5 w-5" /></a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-lilac"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted/70">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> VENTURA DEV</p>
    </footer>
  );
}
