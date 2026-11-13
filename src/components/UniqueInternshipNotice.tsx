import React from 'react';
import { Home, Utensils, HeartHandshake, Shield, Sparkles, Trees, Users, Clock } from 'lucide-react';
import { TabType } from '../types';

interface UniqueInternshipNoticeProps {
  onNavigate: (tab: TabType) => void;
}

export const UniqueInternshipNotice: React.FC<UniqueInternshipNoticeProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-20 bg-stone-100/70 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Editorial Discipline */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <span>Identidad Institucional</span>
            <span aria-hidden="true">·</span>
            <span>Oriente Colombiano</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Un Centro de Convivencia diseñado para transformar vidas en el campo
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            La Sede Aguas Calientes (adscrita al <strong>Centro de Atención al Sector Agropecuario - CASA</strong>, cuya sede administrativa está en <strong>Piedecuesta, vereda Guatiguara</strong>) no es un centro de paso: es una comunidad formativa de 130 hectáreas en el Km 48 de la vía al mar donde los aprendices residen permanentemente durante su etapa lectiva.
          </p>
        </div>

        {/* Feature Grid with Asymmetric Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: 100% Internado */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-[#39A900] mb-5">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                100% Régimen Interno Residencial
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                A diferencia de otras sedes del país con modalidades mixtas, en Aguas Calientes <strong>el 100% de los 130 aprendices viven en la sede</strong>. Cuenta con pabellones residenciales independientes para hombres y mujeres, debidamente acondicionados y supervisados.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">Paz mental familiar:</span> Acompañamiento y celaduría profesional 24/7.
            </div>
          </div>

          {/* Card 2: Bienestar y Alimentación */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                Alimentación y Bienestar Integral Gratuito
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                El SENA garantiza el servicio de comedor comunitario con minuta nutricional balanceada: <strong>desayuno, almuerzo, cena y refrigerios diarios</strong>, además de servicios de enfermería básica, psicología, canchas deportivas y actividades recreativas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">Cero costo económico:</span> Formación y sostenimiento 100% público.
            </div>
          </div>

          {/* Card 3: Formación en 130 Hectáreas */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                Aprender Haciendo en Campo Real
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Los aprendices no ven diapositivas teóricas lejanas; conviven directamente con las <strong>130 hectáreas</strong>: ordeñan, siembran cacao y cítricos, operan sistemas de riego y administran la producción como verdaderos empresarios rurales.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">Pedagogía SENA:</span> Teoría en aula y práctica directa e inmediata en campo.
            </div>
          </div>

        </div>

        {/* Coexistence Callout Banner for Parents and Candidates */}
        <div className="mt-10 bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#39A900]/15 dark:bg-[#39A900]/25 text-[#39A900] flex items-center justify-center shrink-0 mt-0.5">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                Compromiso de Doble Cumplimiento Normativo
              </h4>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
                Al ser un internado, todo aspirante y su acudiente deben firmar la aceptación del <strong>Reglamento del Aprendiz SENA</strong> y el <strong>Manual de Convivencia Interno</strong> (horarios, respeto, aseo de cuartos y sana convivencia colectiva).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('centros')}
              className="px-4 py-2.5 rounded-xl text-xs font-bold border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 whitespace-nowrap text-center transition-colors"
            >
              Ver Centros de Convivencia Nacionales
            </button>
            <button
              onClick={() => onNavigate('convivencia')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white whitespace-nowrap text-center transition-colors shadow-sm"
            >
              Conocer Manual y Normas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
