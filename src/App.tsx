import { useState } from 'react';
import { NavBar } from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import Photo from './Components/Photo';
import TechStackCarousel from './Components/Stacks';

function App() {
  return (
    <div className='bg-neutral-900 min-h-screen font-mono text-gray-100'>
      <header className='flex justify-center py-6 md:py-10'>
        <NavBar />
      </header>

      <main className='container mx-auto px-4'>
        {/* Seção Sobre Mim + Foto */}
        <section className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 mb-20'>
          <div className='w-full lg:w-1/2 lg:pr-8'>
            <AboutMe />
          </div>

          {/* Container da Foto */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
            {/* Efeito Raikiri */}
            <div className="absolute inset-0 rounded-full 
                          bg-[radial-gradient(circle_at_center,_rgba(140,0,255,0.4)_0%,_transparent_70%)] 
                          animate-[pulse_4s_infinite] blur-lg"></div>

            {/* Partículas de energia */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} 
                    className={`absolute w-2.5 h-2.5 rounded-full 
                              bg-purple-400 shadow-[0_0_12px_4px_#a855f7]
                              animate-[float_${3+(i*0.5)}s_infinite_${i*0.3}s_ease-in-out]
                              ${i%2 === 0 ? 'bg-purple-400' : 'bg-fuchsia-500'}`}
                    style={{
                      top: `${Math.random() * 30 + 10}%`,
                      left: `${Math.random() * 30 + 10}%`
                    }}></div>
              ))}
            </div>

            {/* Imagem */}
            <Photo className="relative z-10 w-full h-full object-cover 
                            [filter:drop-shadow(0_0_15px_#8b5cf6)
                                    drop-shadow(0_0_30px_#c026d3)
                                    brightness(1.15)]
                            border-2 border-purple-900/30 rounded-full" />
          </div>
        </section>

        {/* Seção Stacks */}
        <section className='mb-24'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold bg-clip-text text-transparent 
                          bg-gradient-to-r from-purple-400 to-fuchsia-600 mb-4'>
              Minhas Stacks
            </h2>
            <p className='text-gray-400 max-w-2xl mx-auto'>
              Tecnologias que domino e utilizo no meu dia a dia
            </p>
          </div>
          <TechStackCarousel />
        </section>
      </main>
    </div>
  );
}

export default App;