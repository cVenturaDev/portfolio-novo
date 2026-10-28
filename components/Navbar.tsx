"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, person } from "@/data/site";
export default function Navbar() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-md">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="font-mono text-sm font-bold tracking-[0.25em]">VENTURA<span className="text-brand"> DEV</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.filter((n) => n.id !== "inicio" || true).slice(0, 4).map((n) => (
            <li key={n.id}><a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
              className={`relative text-sm transition-colors hover:text-brand-lilac ${active === n.id ? "text-brand-lilac" : "text-muted"}`}>
              {n.label}{active === n.id && <span className="absolute -bottom-2 left-0 h-px w-full bg-brand" />}</a></li>
          ))}
          <li><a href="#contato" className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">Contato</a></li>
        </ul>
        <button className="md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="border-t border-white/5 bg-bg px-6 py-4 md:hidden">
          {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-brand-lilac">{n.label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
