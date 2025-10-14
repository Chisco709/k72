import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Target, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";

const InicioTransformacion = () => {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden pt-[130px] md:pt-[140px]">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/optimized-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <div className="relative z-10 max-w-3xl mt-8 md:mt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Inicia tu transformación personal y mental
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Eleva tu mente, disciplina y propósito. Diseñado para quienes buscan evolución real.
          </p>

          <Link to="/servicios">
            <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
              Explorar Servicios <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN VALORES */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-gradient-to-b from-black to-blue-950">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Tu camino al máximo potencial</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <Brain size={36} />, title: "Mentalidad", desc: "Entrena tu mente para soportar, avanzar y conquistar tus metas." },
            { icon: <Target size={36} />, title: "Disciplina", desc: "Crea constancia que trascienda los días y supere la motivación." },
            { icon: <Zap size={36} />, title: "Acción", desc: "Convierte tus ideas en resultados medibles y reales." },
          ].map((item, i) => (
            <Link
              key={i}
              to="/retos"
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-all block"
            >
              <div className="flex justify-center mb-4 text-blue-400">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SECCIÓN BENEFICIOS */}
      <section className="py-24 bg-black text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">¿Qué lograrás con nosotros?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 mb-10">
          {[
            "Dominar tu enfoque mental y emocional",
            "Desarrollar una autodisciplina sólida",
            "Adoptar hábitos que cambian tu vida",
            "Superar bloqueos mentales y dudas",
            "Convertirte en una persona más firme y segura",
            "Inspirar a otros con tu propio cambio",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
            >
              <CheckCircle2 className="text-blue-400" size={24} />
              <p className="text-gray-200 text-left">{benefit}</p>
            </div>
          ))}
        </div>

        <Link to="/productos">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
            Ver Productos <ArrowRight size={18} />
          </Button>
        </Link>
      </section>

      {/* LLAMADO FINAL */}
      <section className="py-24 px-6 md:px-20 text-center bg-gradient-to-t from-blue-900 to-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Este es el comienzo de tu transformación
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          No esperes a estar listo. Empieza hoy, porque el cambio verdadero comienza con un paso decidido.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/blog">
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              Leer más en el Blog <Sparkles size={18} />
            </Button>
          </Link>

          <Link to="/retos">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              Empezar Retos <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InicioTransformacion;
