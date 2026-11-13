import React from 'react';
import { ArrowRight, MapPin, Users, Compass, BookOpen, ShieldCheck } from 'lucide-react';
import { TabType } from '../types';

const senaDroneHero = '/src/assets/images/aguas_calientes_drone_background.jpg';

interface HeroProps {
  onNavigate: (tab: TabType) => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Hero Image with professional contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={senaDroneHero}
          alt="Fotografía aérea de la Finca Sede Aguas Calientes del SENA en El Playón Santander"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        
        {/* Unboxed Metadata & Authority Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wide uppercase mb-4">
          <span>Centro de Atención al Sector Agropecuario (CASA)</span>
          <span aria-hidden="true">·</span>
          <span>Sede Administrativa en Guatiguara, Piedecuesta</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400 font-bold">Subsede Aguas Calientes 100% Internado</span>
        </div>

        {/* Primary Hero Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl text-balance leading-tight sm:leading-none">
          Sede Aguas Calientes: <br className="hidden sm:inline" />
          <span className="text-[#4cd906]">El único internado SENA</span> del oriente colombiano
        </h1>

        {/* Value proposition tailored for parents and future apprentices */}
        <p className="mt-6 text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
          Subsede campestre del <strong>Centro de Atención al Sector Agropecuario</strong> (con sede administrativa en <strong>Piedecuesta, vereda Guatiguara</strong>). Un entorno productivo de <strong>130 hectáreas</strong> donde el <strong>100% de los 130 aprendices son internos</strong>, ubicado en el <strong>Kilómetro 48 de la vía al mar desde Bucaramanga</strong> (Km 4 adelante de El Playón, Santander).
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('ingreso')}
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#39A900] hover:bg-[#2e8800] text-white shadow-lg shadow-[#39A900]/25 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Procedimiento de Ingreso</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('convivencia')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Manual de Convivencia y Reglamento</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-stone-300 hover:text-white transition-colors flex items-center gap-2 border border-transparent hover:border-stone-700"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>¿Tengo perfil para el internado?</span>
          </button>
        </div>

        {/* 4-Item KPI Proof Strip (Clean tabular layout as mandated by guidelines) */}
        <div className="mt-14 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">130</span>
              <span className="text-sm font-semibold text-emerald-400">Hectáreas</span>
            </div>
            <span className="text-xs text-stone-400 mt-1">
              Finca integral con cultivos de cítricos, vivero, porcicultura, avicultura y lagos.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#4cd906] tabular-nums">100%</span>
              <span className="text-sm font-semibold text-emerald-400">Internos</span>
            </div>
            <span className="text-xs text-stone-400 mt-1">
              Único centro del país donde la totalidad de los aprendices residen en sede.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">130</span>
              <span className="text-sm font-semibold text-emerald-400">Cupos</span>
            </div>
            <span className="text-xs text-stone-400 mt-1">
              Capacidad residencial para 3 programas de tecnólogo sin ningún costo.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">Km 48</span>
              <span className="text-sm font-semibold text-amber-400">Vía al Mar</span>
            </div>
            <span className="text-xs text-stone-400 mt-1">
              Desde Bucaramanga (y a 4 km adelante de El Playón hacia la Costa Caribe).
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
