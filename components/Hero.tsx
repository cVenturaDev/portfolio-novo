import { ChevronDown } from "lucide-react";
export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-brand-lilac">OLÁ, MUNDO! SOU O VENTURA</p>
          <h1 className="text-4xl font-bold leading-[1.1] sm:text-6xl">Transformando <span className="grad-text">ideias</span> em <span className="grad-text">experiências digitais.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-muted">Estudante de Análise e Desenvolvimento de Sistemas, explorando o desenvolvimento web, a programação e a criação de soluções tecnológicas.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projetos" className="rounded-full bg-brand px-7 py-3 font-medium shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark">Explorar projetos</a>
            <a href="#contato" className="rounded-full border border-brand/40 px-7 py-3 font-medium text-brand-lilac transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand/10">Entrar em contato</a>
          </div>
        </div>
        <div className="float rounded-2xl border border-white/10 bg-card shadow-2xl shadow-brand/20" role="img" aria-label="Painel decorativo inspirado em um editor de código">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-brand-deep" /><span className="h-3 w-3 rounded-full bg-brand-dark" /><span className="h-3 w-3 rounded-full bg-brand" />
            <span className="ml-3 font-mono text-xs text-muted">ventura.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7"><code>
<span className="text-brand">const</span> <span className="text-brand-lilac">ventura</span> = {"{"}{"\n"}
{"  "}curso: <span className="text-emerald-300/80">&quot;ADS&quot;</span>,{"\n"}
{"  "}foco: [<span className="text-emerald-300/80">&quot;web&quot;</span>, <span className="text-emerald-300/80">&quot;software&quot;</span>, <span className="text-emerald-300/80">&quot;hardware&quot;</span>],{"\n"}
{"  "}status: <span className="text-emerald-300/80">&quot;sempre evoluindo&quot;</span>{"\n"}
{"}"};<span className="cursor text-brand-lilac">▌</span>
          </code></pre>
        </div>
      </div>
      <a href="#sobre" aria-label="Rolar para a próxima seção" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-brand-lilac">
        <span className="flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest">ROLE<ChevronDown className="h-4 w-4" /></span>
      </a>
    </section>
  );
}
