import { useState } from 'react';
import { NavBar } from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Photo from './Components/Photo';
import TechStackCarousel from './Components/Stacks';
import { Footer } from './Components/Footer';
import { Instagram, Linkedin, Mail } from 'lucide-react';

// Exemplo simples para Skills com barra de progresso
const skills = [
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 70 },
  { name: 'React Native', level: 75 },
  { name: 'Tailwind', level: 80 },
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 75 },
];

// Projetos para mostrar (exemplo)
const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Um site moderno para mostrar minhas habilidades e projetos.',
    url: 'https://meuportfolio.com',
  },
  {
    title: 'FutBolão',
    description: 'Aplicativo React Native para fazer palpites de jogos de futebol e acompanhar resultados em tempo real.',
    url: 'https://github.com/arthurharysson/FutBolao',
  },
  {
    title: 'InterApp',
    description: 'Aplicativo de gerenciamento e pagamento de faturas de sistemas de automação',
    url: 'https://github.com/arthurharysson/InterApp',
  },
];

// Links para o NavBar com âncoras
const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contato' },
];

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen font-mono text-gray-100 overflow-x-hidden">
      {/* NavBar corrigida com links */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-900/95 shadow-md shadow-fuchsia-700/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 cursor-default">
            Arthur Harysson - Portfólio
          </div>
          <NavBar links={navLinks} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 scroll-smooth">
        {/* HERO */}
        <section
          id="about"
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 pt-20 pb-32"
        >
          {/* About Me */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text leading-tight drop-shadow-lg">
              Olá, eu sou um <br className="hidden sm:block" />
              Desenvolvedor Front-end & Mobile
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
              Transformo ideias em experiências digitais utilizando tecnologias modernas e design responsivo.
            </p>
            <AboutMe />
          </div>

          {/* Foto com partículas */}
          <div
            className="relative w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[400px] lg:h-[400px] mx-auto animate-fade-in"
          >
            {/* Glow de fundo */}
            <div
              className="absolute inset-0 rounded-full 
                          bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.25)_0%,_transparent_80%)] 
                          blur-3xl shadow-[0_0_100px_40px_rgba(168,85,247,0.2)] animate-pulse"
            ></div>

            {/* Partículas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2.5 h-2.5 rounded-full
                    ${i % 2 === 0 ? 'bg-purple-400' : 'bg-fuchsia-500'}
                    shadow-[0_0_12px_3px_#a855f7]
                    animate-[float_${2.5 + i * 0.4}s_infinite_${i * 0.15}s_ease-in-out]`}
                  style={{
                    top: `${Math.random() * 85}%`,
                    left: `${Math.random() * 85}%`,
                  }}
                />
              ))}
            </div>

            {/* Foto */}
            <Photo
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-fuchsia-500/20 
                                shadow-[0_0_60px_#9333ea] brightness-110 contrast-125 saturate-150"
            />
          </div>
        </section>

        {/* Skills com carousel */}
        <section id="skills" className="mb-28 px-4 sm:px-0 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-fuchsia-600 text-transparent bg-clip-text">
            Minhas Skills
          </h2>

          {/* Barra de progresso das skills */}
          <div className="space-y-6 mb-12">
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1 text-gray-300 font-semibold">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full h-4 bg-purple-900 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-4 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel de tecnologias */}
          <TechStackCarousel />
        </section>

        {/* Projetos */}
        <section id="projects" className="mb-28 max-w-5xl mx-auto px-4 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-purple-300 to-fuchsia-600 text-transparent bg-clip-text">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ title, description, url }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-gradient-to-r from-purple-700 via-fuchsia-700 to-pink-700 p-6 hover:scale-[1.03] transition-transform shadow-lg shadow-purple-900/40"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mb-20 max-w-3xl mx-auto px-4 sm:px-0">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-300 to-fuchsia-600 text-transparent bg-clip-text">
            Contate-me
          </h2>

          <div className="bg-neutral-800 rounded-xl p-8 shadow-lg shadow-purple-900/30 text-gray-100 text-center space-y-6">
            <p className="text-lg font-semibold">
              Você pode me encontrar nas redes sociais ou enviar um email direto:
            </p>

            <ul className="flex flex-col sm:flex-row justify-center gap-8 text-xl font-semibold">
              <li>
                <a
                  href="https://www.instagram.com/arthurharysson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Instagram size={24} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthurharysson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={24} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=arthurharysson03@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Mail size={24} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
