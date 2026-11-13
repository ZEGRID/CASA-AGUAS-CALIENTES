import React from 'react';
import { 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  LandPlot, 
  MapPin, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Sun, 
  Moon, 
  Download,
  ArrowRight,
  Info
} from 'lucide-react';
import { TabType } from '../types';

interface ManualInstructionsProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const ManualInstructions: React.FC<ManualInstructionsProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  return (
    <section id="manual-instrucciones-aguas-calientes" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39A900]/10 dark:bg-[#39A900]/20 text-[#2c8400] dark:text-[#4cd906] text-xs font-bold uppercase tracking-wider mb-4 border border-[#39A900]/25">
            <BookOpen className="w-4 h-4" />
            <span>Guía de Uso del Prototipo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
            Manual de Instrucciones · SENA Aguas Calientes
          </h2>

          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Este manual explica paso a paso cómo utilizar esta herramienta digital interactiva diseñada para futuros aprendices, padres de familia y la comunidad general interesada en conocer el único internado del SENA en el oriente del país.
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#39A900] flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Propósito de la Herramienta</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Brindar información clara, transparente y accesible sobre el régimen 100% residencial, los procesos de inscripción, las normas de convivencia y la red nacional de internados del SENA.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#39A900] flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Navegación Intuitiva</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              El menú superior y el pie de página permiten acceder instantáneamente a los 8 módulos clave, adaptándose a computadores, tabletas y teléfonos celulares.
            </p>
          </div>

          <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#39A900] flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">Interactividad y Ayuda</h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Incluye un test de vocación para aspirantes, un buscador de centros de convivencia con filtros regionales y un canal directo de atención de dudas.
            </p>
          </div>
        </div>

        {/* Detailed Sections Breakdown */}
        <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm space-y-10">
          
          <div className="border-b border-stone-200 dark:border-stone-800 pb-6">
            <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100 mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#39A900]" />
              <span>Estructura de Menús y Módulos de la Herramienta</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              Cada sección del prototipo cumple una función específica orientada al aspirante y su familia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Item 1 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Inicio (Presentación Institucional)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('inicio')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Muestra la panorámica general de la Sede Aguas Calientes, resaltando su estatus único de 130 hectáreas, 130 cupos y régimen 100% residencial en el oriente colombiano.
              </p>
            </div>

            {/* Item 2 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Procedimiento de Ingreso (Paso a Paso)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('ingreso')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Detalla las 4 etapas para postularse en SofiaPlus, la selección socioeconómica y la inducción para la vida en el internado.
              </p>
            </div>

            {/* Item 3 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Manual de Convivencia y Reglamento</span>
                </h4>
                <button 
                  onClick={() => onNavigate('convivencia')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Presenta la rutina diaria (4:00 AM a 8:00 PM), los compromisos en pabellones, el enlace de descarga del Acuerdo 007 y el manual oficial en PDF.
              </p>
            </div>

            {/* Item 4 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Centros de Convivencia SENA (Red Nacional)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('centros')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Directorio interactivo con los 13 centros de formación con internado en Colombia (incluyendo Aguas Calientes, El Hachón, Centro Minero de Sogamoso, LOPE, etc.) con filtros y fichas técnicas.
              </p>
            </div>

            {/* Item 5 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Programas Tecnológicos (130 Cupos)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('programas')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Explica los 3 tecnólogos ofertados en Aguas Calientes: Producción Pecuaria, Producción Agrícola y Gestión Agroempresarial.
              </p>
            </div>

            {/* Item 6 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>La Finca y Cultivos (130 Hectáreas)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('finca')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Galería fotográfica real de la finca, cultivos de cacao, cítricos, ganadería y reproductor del video institucional de YouTube.
              </p>
            </div>

            {/* Item 7 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Ubicación Geográfica (Km 48 Vía al Mar)</span>
                </h4>
                <button 
                  onClick={() => onNavigate('ubicacion')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Indica la ubicación exacta (Km 48 desde Bucaramanga, Km 4 adelante de El Playón) y la vinculación administrativa con CASA Piedecuesta (Guatiguara).
              </p>
            </div>

            {/* Item 8 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39A900]" />
                  <span>Preguntas Frecuentes para Padres y Aspirantes</span>
                </h4>
                <button 
                  onClick={() => onNavigate('padres')}
                  className="text-xs font-semibold text-[#39A900] hover:underline flex items-center gap-1"
                >
                  <span>Visitar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-4 border-l-2 border-[#39A900]/30">
                Resuelve dudas clave sobre seguridad, alimentación, visitas familiares, costos (100% gratuito) y salidas de fin de semana.
              </p>
            </div>

          </div>

          {/* Controls & Accessibility Instructions */}
          <div className="pt-8 border-t border-stone-200 dark:border-stone-800 space-y-6">
            <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#39A900]" />
              <span>Controles Especiales y Accesibilidad en la Interfaz</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span>Modo Claro y Oscuro</span>
                </div>
                <p className="text-stone-600 dark:text-stone-300">
                  En la parte superior derecha de la barra de navegación, el botón con icono de sol/luna permite alternar instantáneamente el contraste para lectura cómoda de día o de noche.
                </p>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100">
                  <Sparkles className="w-4 h-4 text-[#39A900]" />
                  <span>Test de Vocación (Autodiagnóstico)</span>
                </div>
                <p className="text-stone-600 dark:text-stone-300">
                  En la esquina inferior derecha hay un botón flotante para realizar un test rápido de 3 preguntas que evalúa si el aspirante tiene el perfil para vivir en el internado.
                </p>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-stone-900 dark:text-stone-100">
                  <HelpCircle className="w-4 h-4 text-[#39A900]" />
                  <span>Atención al Aspirante y Dudas</span>
                </div>
                <p className="text-stone-600 dark:text-stone-300">
                  El botón verde flotante de "Atención al Aspirante" abre un formulario para enviar consultas directamente a la coordinación de bienestar de la sede.
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500">
              SENA Regional Santander · Sede Aguas Calientes (El Playón)
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenInterestModal}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white shadow-sm transition-all"
              >
                Resolver Dudas o Inquietudes
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
