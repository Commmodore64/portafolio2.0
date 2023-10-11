/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import localFont from 'next/font/local';
import Link from "next/link";
import { useEffect, useState } from 'react';

//utils
const myFont = localFont({ src: '../../fonts/brigendsexpanded-nrek1.otf' });

function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [subtitleAnimationStarted, setSubtitleAnimationStarted] = useState(false);
  const [ButtonAnimationStarted, setButtonAnimationStarted] = useState(false);

  useEffect(() => {
    // Inicia la animación después de 1 segundo
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      // Inicia la animación del subtítulo con un pequeño retraso
      setTimeout(() => {
        setSubtitleAnimationStarted(true);
      }, 200); // Ajusta el tiempo de retraso según tu preferencia
      setTimeout(() => {
        setButtonAnimationStarted(true);
      }, 300); // Ajusta el tiempo de retraso según tu preferencia
    }, 325);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-12 lg:mx-52 md:mx-16">
      <p className={`pb-6 text-gray-300 font-mono ${subtitleAnimationStarted ? 'animate-text' : 'opacity-20'}`}>Welcome, I'm</p>
      <h1
        style={myFont.style}
        className={`text-5xl text-white ${animationStarted ? 'animate-text' : 'opacity-20'
          }`}
      >
        I AM CESAR MARINES
      </h1>
      <h2
        style={myFont.style}
        className={`text-3xl text-gray-300 ${subtitleAnimationStarted ? 'animate-text' : 'opacity-10'
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
      <p className={`pt-10 text-gray-500 ${animationStarted ? 'animate-text' : 'opacity-10'}`}>I'm a software developer based in Mexico, passionate about crafting modern web platforms using cutting-edge technologies. I'm on the path to becoming an engineer, and I'm here to build the digital future.</p>
      <div className="mt-6">
        <Link href="mailto:cesarml2002@hotmail.com">
          <Button className={`${ButtonAnimationStarted ? 'animate-text' : 'opacity-5'}`} variant="secondary">Get in touch</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home
