import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "VenturaDev Portfólio",
  description: "Portfólio de Ventura, estudante de Análise e Desenvolvimento de Sistemas. Projetos, tecnologias e contato.",
  openGraph: { title: "VENTURA DEV", description: "Transformando ideias em experiências digitais.", type: "website", locale: "pt_BR" },
};
export const viewport: Viewport = { themeColor: "#0B0912", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR"><body>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-4 focus:py-2">Pular para o conteúdo</a>
      {children}
    </body></html>
  );
}
