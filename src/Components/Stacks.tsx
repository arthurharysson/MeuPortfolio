import { useState, useEffect, useRef } from 'react';
import { Github, GitFork, Code2, Atom, ChevronLeft, ChevronRight  } from "lucide-react";

const techStacks = [
  { 
    id: 1, 
    name: 'TypeScript', 
    icon: (
      <img 
        src="/logos/typescript.svg" 
        alt="TypeScript" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'} 
      />
    )
  },

  { 
    id: 2, 
    name: 'React', 
    icon: (
      <img 
        src="/logos/react.svg" 
        alt="React Native" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'} 
        />
    )
  },

  { 
    id: 3, 
    name: 'React Native', 
    icon: (
      <img 
        src="/logos/react.svg" 
        alt="React Native" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'} 
      />
    )
  },
  { 
    id: 4, 
    name: 'Tailwind', 
    icon: (
      <img 
        src="/logos/tailwindcss.svg" 
        alt="Tailwind CSS" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'} 
      />
    )
  },
  { 
    id: 6, 
    name: 'Git', 
    icon: <GitFork className="text-orange-500 w-28 h-28" />
  },
  { 
    id: 7, 
    name: 'GitHub', 
    icon: <Github className="text-gray-800 dark:text-gray-200 w-28 h-28" />
  },

  {
    id: 8,
  name: 'HTML',
  icon: (
    <img 
       src="/logos/html.svg" 
        alt="Tailwind CSS" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'}  />
  )
  },
  { 
    id: 9, 
    name: 'CSS', 
    icon: (
      <img 
       src="/logos/css.svg" 
        alt="Tailwind CSS" 
        className="w-28 h-28 object-contain"
        onError={(e) => e.currentTarget.src = '/logos/default.svg'} />
    )
  },
];

const TechStackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<'left'|'right'|null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setTransitionDirection('right');
    setCurrentIndex(prev => (prev + 1) % techStacks.length);
  };

  const handlePrev = () => {
    setTransitionDirection('left');
    setCurrentIndex(prev => (prev - 1 + techStacks.length) % techStacks.length);
  };

  const goToIndex = (index: number) => {
    if (index > currentIndex) setTransitionDirection('right');
    else if (index < currentIndex) setTransitionDirection('left');
    setCurrentIndex(index);
  };

  const getCardPosition = (index: number) => {
    const total = techStacks.length;
    let position = (index - currentIndex + total) % total;
    
    if (position > total / 2) position -= total;
    
    return position;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 relative overflow-hidden">
      <div className="relative h-[420px]">
        {/* Botões de navegação */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 text-purple-300 hover:text-purple-100 rounded-full hover:bg-purple-900/50 transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 text-purple-300 hover:text-purple-100 rounded-full hover:bg-purple-900/50 transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </button>

        {/* Container do carrossel */}
        <div 
          ref={carouselRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {techStacks.map((stack, index) => {
            const position = getCardPosition(index);
            const isActive = position === 0;
            const isRight = position === 1 || (position === -(techStacks.length - 1));
            const isLeft = position === -1 || (position === techStacks.length - 1);
            
            let transform = '';
            let zIndex = 10;
            let opacity = 0.8;
            let scale = 0.9;
            
            if (isActive) {
              transform = 'translateX(0)';
              zIndex = 20;
              opacity = 1;
              scale = 1;
            } else if (isRight) {
              transform = 'translateX(30%)';
            } else if (isLeft) {
              transform = 'translateX(-30%)';
            } else {
              opacity = 0;
              transform = position > 0 ? 'translateX(100%)' : 'translateX(-100%)';
            }

            return (
              <div
                key={stack.id}
                className={`
                  absolute flex flex-col items-center p-8 rounded-2xl w-72 h-96
                  bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900
                  border border-purple-900/50 shadow-lg
                  transition-all duration-500 ease-in-out
                  ${transitionDirection ? 'transitioning' : ''}
                  hover:shadow-purple-900/50 hover:border-purple-700/70
                `}
                style={{
                  transform: `${transform} scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <div className="w-28 h-28 mb-6 flex items-center justify-center bg-white/5 rounded-xl backdrop-blur-sm p-4 border border-purple-900/30">
                  {stack.icon}
                </div>
                <h3 className="font-bold text-xl text-center text-purple-100/90 drop-shadow-[0_0_6px_rgba(139,92,246,0.9)]">
                  {stack.name}
                </h3>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-transparent via-purple-500/80 to-transparent rounded-full" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-10 gap-2">
        {techStacks.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className="relative h-2 w-8 rounded-full overflow-hidden"
          >
            <div className={`
              absolute inset-0 bg-gray-600 rounded-full
              transition-all duration-300
              ${currentIndex === index ? 'opacity-0' : 'opacity-100'}
            `} />
            <div 
              className={`
                absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full
                transition-all duration-500
                ${currentIndex === index ? 'w-full' : 'w-0'}
              `}
            />
            <div className={`
              absolute inset-0 shadow-[0_0_8px_2px_rgba(192,38,211,0.7)] rounded-full
              transition-all duration-300
              ${currentIndex === index ? 'opacity-100' : 'opacity-0'}
            `} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;