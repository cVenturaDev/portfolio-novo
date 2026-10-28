import Reveal from "./Reveal";
export default function Statement() {
  return (
    <section aria-label="Destaque" className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" aria-hidden />
      <Reveal className="relative mx-auto max-w-6xl px-6">
        <p className="bg-bg/60 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
          <span className="outline-text">SEMPRE CONSTRUINDO.</span><br />
          <span className="grad-text">SEMPRE EVOLUINDO.</span>
        </p>
      </Reveal>
    </section>
  );
}
