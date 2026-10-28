// Edite aqui seus dados. Troque os placeholders pelos links reais.
export const person = {
  brand: "VENTURA",
  email: "otavioboomb@gmail.com" , // TODO: e-mail real
  github: "https://github.com/cVenturaDev", // TODO
  linkedin: "https://www.linkedin.com/in/otavioventuraestavam/", // TODO
};
export const nav = [
  { id: "inicio", label: "Início" }, { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" }, { id: "projetos", label: "Projetos" }, { id: "contato", label: "Contato" },
];
export const aboutCards = [
  { icon: "code", title: "Desenvolvimento de software", text: "Lógica, boas práticas e código legível." },
  { icon: "globe", title: "Desenvolvimento web", text: "Interfaces e aplicações para a web." },
  { icon: "cpu", title: "Hardware e configuração", text: "Montagem, ajustes e infraestrutura de computadores." },
  { icon: "sprout", title: "Aprendizado contínuo", text: "Aprender na prática, um projeto por vez." },
];
export const skills = [
  { title: "Linguagens", icon: "code", items: ["Python", "JavaScript", "TypeScript", "Java"] },
  { title: "Frontend", icon: "layout", items: ["HTML", "CSS", "React", "Next.js"] },
  { title: "Backend e banco de dados", icon: "database", items: ["Node.js", "PostgreSQL"] },
  { title: "Ferramentas e ambiente", icon: "wrench", items: ["Git", "GitHub", "VS Code", "Figma", "Linux", "Docker"] },
];
export type Category = "Frontend" | "Backend" | "Outros";
export type Project = { id: string; name: string; description: string; tags: string[]; category: Category; demo?: string; repo?: string; example?: boolean };
// DADOS DE EXEMPLO: substitua por projetos reais (demo/repo opcionais).
export const projects: Project[] = [
  { id: "p1", name: "MonitorTJSP", description: "Ferramenta de monitoramento para o Tribunal de Justiça do Estado de São Paulo.", tags: ["Next.js", "TypeScript", "HTML", "CSS"], category: "Outros", example: false, repo: "https://github.com/cVenturaDev/Monitor-TJSP" },
  { id: "p2", name: "Em Desenvolvimento", description: "Espaço reservado para uma API ou serviço de backend.", tags: ["Python", "PostgreSQL"], category: "Backend", example: true },
  { id: "p3", name: "Em Desenvolvimento", description: "Espaço reservado para um projeto de automação ou ferramenta.", tags: ["Docker", "Linux"], category: "Outros", example: true },
];
