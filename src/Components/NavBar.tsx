import { Github, Linkedin, Mail } from "lucide-react";

export function NavBar() {
  return (
    <section className="bg-zinc-800/80 backdrop-blur-sm rounded-full w-full max-w-2xl mx-4 p-2 flex justify-center items-center border border-zinc-700 shadow-lg">
      <nav className="text-white/90 flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-9 px-4 py-2">
        {/* Links de navegação */}
        <a href="#about" className="hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
          Sobre mim
        </a>
        <a href="#skills" className="hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
          Skills
        </a>
        <a href="#projects" className="hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
          Projetos
        </a>

        {/* Ícones sociais com efeito neon */}
        <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 ml-2 md:ml-4">
          <a href="https://github.com/arthurharysson" target="_blank"  className="p-1.5 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all duration-300">
            <Github size={20} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/arthurharysson/" target="_blank" className="p-1.5 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)] transition-all duration-300">
            <Linkedin size={20} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arthurharysson03@gmail.com" target="_blank"  rel= "noopener noreferrer" className="p-1.5 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(248,113,113,0.6)] transition-all duration-300">
            <Mail size={20} className="hover:scale-110 transition-transform" />
          </a>
        </div>
      </nav>
    </section>
  );
}