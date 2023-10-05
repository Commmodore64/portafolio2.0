"use client";

import localFont from 'next/font/local';
import { useEffect, useState } from 'react';

const myFont = localFont({ src: '../../fonts/brigendsexpanded-nrek1.otf' });

function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Inicia la animación después de 1 segundo
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-16">
      <h1
        style={myFont.style}
        className={`text-3xl text-white ${
          animationStarted ? 'animate-text' : 'opacity-0'
        }`}
      >
        I AM CESAR MARINES
      </h1>
      <h2
        style={myFont.style}
        className={`text-2xl text-white ${
          animationStarted ? 'animate-text' : 'opacity-0'
        }`}
      >
        SOFTWARE DEVELOPER
      </h2>
      <style jsx global>{`
        @keyframes fadeIn {
          0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
            opacity: 0;
          }
          5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
            opacity: 5;
          }
        }

        .animate-text {
          animation: fadeIn 0.15s;
        }
      `}</style>
    </div>
  );
}

export default Home
