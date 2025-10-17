// src/pages/ConferenciasPage.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  Sparkles,
  Award,
  TrendingUp,
  Zap,
  Brain,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function ConferenciasPage() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroRef.current.style.opacity = `${Math.max(0, 1 - scrolled / 600)}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
        {/* Luces suaves de fondo */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />
        </div>

        {/* Rejilla sutil */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Líneas decorativas */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        {/* Contenido principal */}
        <div ref={heroRef} className="relative w-full py-32 flex items-center justify-center text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 mb-12 animate-fade-in">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs tracking-[0.25em] uppercase font-light text-white/90">
                Experiencias que Transforman
              </span>
            </div>

            <div className="mb-10 space-y-3">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
                <span className="block opacity-0 animate-slide-up-refined" style={{ animationDelay: "0.2s" }}>
                  Conferencias
                </span>
                <span
                  className="block text-white/20 text-4xl sm:text-5xl lg:text-6xl opacity-0 animate-slide-up-refined italic font-light mt-2"
                  style={{ animationDelay: "0.4s" }}
                >
                  que
                </span>
                <span className="block opacity-0 animate-slide-up-refined mt-2" style={{ animationDelay: "0.6s" }}>
                  Inspiran
                </span>
              </h1>
            </div>

            <p
              className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-16 font-light leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Donde el conocimiento se encuentra con la emoción
              <br className="hidden sm:block" />
              para crear experiencias inolvidables
            </p>
          </div>
        </div>
      </section>

      {/* Animaciones globales */}
      <style>{`
        @keyframes slide-up-refined {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; } to { opacity: 1; }
        }
        .animate-slide-up-refined {
          animation: slide-up-refined 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
