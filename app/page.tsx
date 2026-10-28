import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Statement from "@/components/Statement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (<><Navbar /><main id="conteudo"><Hero /><About /><Skills /><Projects /><Statement /><Contact /></main><Footer /></>);
}
