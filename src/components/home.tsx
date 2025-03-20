/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";

//utils
const myFont = localFont({ src: "../../fonts/brigendsexpanded-nrek1.otf" });

function Home() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [subtitleAnimationStarted, setSubtitleAnimationStarted] =
    useState(false);
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
    <div className="mx-auto max-w-4xl mb-10 mt-10 p-4 lg:p-12">
      <div className="w-full absolute inset-0 h-[65px] opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <p
        className={`pb-4 text-gray-300 font-mono ${
          subtitleAnimationStarted ? "animate-text" : "opacity-20"
        }`}
      >
        Welcome, I'm
      </p>
      <h1
        style={myFont.style}
        className={`mb-3 text-5xl text-white ${
          animationStarted ? "animate-text" : "opacity-20"
        }`}
      >
        I AM CESAR MARINES
      </h1>
      <h2
        style={myFont.style}
        className={`text-3xl text-gray-300 ${
          subtitleAnimationStarted ? "animate-text" : "opacity-10"
        }`}
      >
        SOFTWARE DEVELOPER
      </h2>
      <style jsx global>{`
        @keyframes fadeIn {
          0%,
          10%,
          20%,
          30%,
          40%,
          50%,
          60%,
          70%,
          80%,
          90%,
          100% {
            opacity: 0;
          }
          5%,
          15%,
          25%,
          35%,
          45%,
          55%,
          65%,
          75%,
          85%,
          95% {
            opacity: 5;
          }
        }

        .animate-text {
          animation: fadeIn 0.15s;
        }
      `}</style>
      <p
        className={`pt-4 text-gray-500 ${
          animationStarted ? "animate-text" : "opacity-10"
        }`}
      >
I'm an engineer and currently work as a Full Stack developer, passionate about designing and developing modern web platforms using cutting-edge technologies. My journey began with a TSU degree, and my professional path has led me to establish myself in the world of software development. I'm committed to building the digital future through innovative and high-quality solutions.
      </p>
      <div className="mt-6">
        <Link href="mailto:cesarml2002@hotmail.com">
          <Button
            className={`${
              ButtonAnimationStarted ? "animate-text" : "opacity-5"
            }`}
            variant="secondary"
          >
            Get in touch
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
