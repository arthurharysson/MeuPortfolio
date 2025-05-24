import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-purple-700/50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm select-none">
        <p>© {new Date().getFullYear()} Arthur Harysson. Todos os direitos reservados.</p>

        <nav className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="#about"
            className="hover:text-purple-600 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="hover:text-purple-600 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="hover:text-purple-600 transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex space-x-6 mt-6 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/arthurharysson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arthurharysson03@gmail.com"
            aria-label="Email"
            target="_blank"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/arthurharysson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-purple-600 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
