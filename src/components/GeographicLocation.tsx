import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Bus, 
  Car, 
  Compass, 
  Thermometer, 
  Mountain, 
  Clock, 
  ExternalLink,
  Info,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Trees
} from 'lucide-react';
import { TabType } from '../types';

interface GeographicLocationProps {
  onNavigate: (tab: TabType) => void;
}

export const GeographicLocation: React.FC<GeographicLocationProps> = ({ onNavigate }) => {
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [originCity, setOriginCity] = useState<'bucaramanga' | 'sanalberto' | 'rionegro' | 'piedecuesta'>('bucaramanga');

  const coordinates = "7.4851° N, 73.2014° W";

  const handleCopy = () => {
    navigator.clipboard?.writeText("7.4851, -73.2014");
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const routes = {
    bucaramanga: {
      origin: 'Bucaramanga (Vía al Mar / Troncal 45A)',
      distance: 'Km 48 Vía al Mar (48 km exactos)',
      time: '1 h 15 min',
      cost: '$14.000 - $18.000 COP',
      companies: 'Lusitania, Cotaxi, Cootransmagdalena, Copetran',
      steps: [
        'Abordar transporte intermunicipal en la Terminal de Bucaramanga o en la glorieta de La Cemento con destino hacia El Playón / San Alberto.',
        'Tomar la Troncal Nacional 45A (conocida como la Vía al Mar hacia la Costa Caribe).',
        'Avanzar 44 km hasta el casco urbano del municipio de El Playón (Santander).',
        'Continuar exactamente 4 kilómetros más adelante sobre la vía nacional pavimentada hasta el Kilómetro 48 de la Vía al Mar.',
        'La portada oficial y valla del SENA Aguas Calientes se ubica sobre el costado de la carretera con acceso directo.',
      ],
    },
    piedecuesta: {
      origin: 'Sede Administrativa Principal CASA (Piedecuesta, Vereda Guatiguara)',
      distance: '68 km totales',
      time: '1 h 45 min',
      cost: 'Ruta institucional o transporte intermunicipal',
      companies: 'Línea Metropolitana hasta Bucaramanga + Bus hacia El Playón',
      steps: [
        'Desde la Sede Administrativa Principal del Centro de Atención al Sector Agropecuario en la Vereda Guatiguara (Piedecuesta), tomar la autopista hacia Bucaramanga.',
        'Cruzar la capital santandereana hacia la salida norte (Glorieta La Cemento).',
        'Tomar la Vía al Mar y recorrer los 48 km hasta la subsede Aguas Calientes en El Playón.',
      ],
    },
    sanalberto: {
      origin: 'San Alberto (Cesar) / Sur del Cesar',
      distance: '38 km en sentido sur',
      time: '40 min',
      cost: '$10.000 - $14.000 COP',
      companies: 'Copetran, Cootransmagdalena, Expreso Brasilia',
      steps: [
        'Tomar transporte en sentido sur hacia Bucaramanga por la Troncal del Magdalena.',
        'Descender pasando por los paradores de La Esperanza.',
        'Aproximadamente 4 km antes de llegar al casco urbano de El Playón, indicar al conductor la parada en el portón del SENA Aguas Calientes.',
        'Llegada directa a la portería con vigilancia 24 horas.',
      ],
    },
    rionegro: {
      origin: 'Rionegro (Santander)',
      distance: '28 km',
      time: '35 min',
      cost: '$8.000 - $11.000 COP',
      companies: 'Colectivos y buses de ruta Bucaramanga - Playón',
      steps: [
        'Tomar colectivo o bus sobre la troncal principal hacia el norte.',
        'Atravesar el municipio de El Playón y continuar 4 kilómetros adelante hasta la sede (Km 48 vía al mar).',
      ],
    },
  };

  const activeRoute = routes[originCity];

  return (
    <section id="ubicacion-geografica" className="py-16 sm:py-24 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>Localización Geográfica Oficial</span>
            <span aria-hidden="true">·</span>
            <span>Ruta Nacional 45A</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Kilómetro 48 de la Vía al Mar desde Bucaramanga
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            La <strong>Sede Aguas Calientes</strong> se ubica exactamente en el <strong>Kilómetro 48 de la vía al mar desde Bucaramanga</strong> (y a <strong>4 kilómetros adelante del casco urbano de El Playón, Santander</strong>). Es una subsede de internado y formación campestre del <strong>Centro de Atención al Sector Agropecuario (CASA)</strong>.
          </p>
        </div>

        {/* Administrative Headquarters Note Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#39A900]/10 dark:bg-[#39A900]/20 text-[#39A900] flex items-center justify-center shrink-0 mt-0.5">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#39A900] dark:text-[#4cd906]">
                Subsede de Formación e Internado (130 Has)
              </span>
              <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Sede Aguas Calientes - El Playón
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                Km 48 Vía al Mar desde Bucaramanga · Km 4 adelante de El Playón. Campus de 130 hectáreas con internado para 130 aprendices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-stone-200 dark:border-stone-800 md:pl-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Sede Administrativa Principal CASA
              </span>
              <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Piedecuesta (Santander) · Vereda Guatiguara
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                El Centro de Atención al Sector Agropecuario (Regional Santander) coordina su gestión directiva, convenios y trámites centrales desde Guatiguara, Piedecuesta.
              </p>
            </div>
          </div>

        </div>

        {/* Real entrance photo banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-900 relative">
          <div className="aspect-[21/9] sm:aspect-[24/8] w-full">
            <img
              src="/assets/aistudio/aguas_calientes_1_eb15b122.jpeg"
              alt="Entrada oficial SENA Centro de Atencion al Sector Agropecuario Subsede Aguas Calientes El Playon"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-mono uppercase bg-[#39A900] text-white px-2.5 py-1 rounded-md font-bold">
                  Fotografía Real de la Entrada
                </span>
                <h3 className="text-lg sm:text-2xl font-bold mt-1.5 drop-shadow">
                  Portería Oficial SENA Aguas Calientes · Km 48 Vía al Mar
                </h3>
                <p className="text-xs text-stone-200 max-w-xl hidden sm:block mt-0.5">
                  Valla oficial: Centro de Atención al Sector Agropecuario · Subsede Aguas Calientes El Playón.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                  {coordinates}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinates and Geo Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-mono">
            <span className="text-stone-500">Coordenadas:</span>
            <span className="font-bold text-stone-900 dark:text-stone-100">{coordinates}</span>
            <button
              onClick={handleCopy}
              className="ml-2 text-stone-400 hover:text-[#39A900] transition-colors"
              title="Copiar coordenadas GPS"
            >
              {copiedCoords ? <Check className="w-3.5 h-3.5 text-[#39A900]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300">
            <Navigation className="w-4 h-4 text-[#39A900]" />
            <span>Hito vial: <strong>Km 48 Vía al Mar desde Bucaramanga</strong></span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300">
            <Thermometer className="w-4 h-4 text-amber-500" />
            <span>Clima: <strong>26°C a 31°C (Cálido Tropical)</strong></span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300">
            <Mountain className="w-4 h-4 text-emerald-600" />
            <span>Altitud: <strong>~450 msnm</strong></span>
          </div>
        </div>

        {/* Main Grid: Interactive Map Visualizer + Route Steps */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Custom Styled Geographic Map Simulator */}
          <div className="lg:col-span-7 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#39A900]" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  Croquis del Corredor Vial Vía al Mar
                </span>
              </div>
              <span className="text-[11px] font-mono text-stone-500">Ruta Nacional 45A</span>
            </div>

            {/* SVG Visual Graphic Road Map */}
            <div className="relative aspect-[16/10] bg-stone-900 rounded-xl overflow-hidden border border-stone-800 p-4 flex flex-col justify-between">
              
              {/* Background terrain patterns */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Waterway: Quebrada Aguas Calientes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250" preserveAspectRatio="none">
                {/* River blue ribbon */}
                <path
                  d="M0,70 Q100,120 220,90 T400,140"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="6"
                  strokeOpacity="0.6"
                />
                <text x="230" y="80" fill="#38bdf8" fontSize="9" fontWeight="bold">Quebrada Aguas Calientes</text>

                {/* Main Highway 45A: Vía al Mar */}
                <path
                  d="M50,240 C120,180 180,140 250,90 L360,20"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="5"
                  strokeDasharray="6,4"
                />
              </svg>

              {/* Waypoints overlaid */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Top Point: Towards San Alberto / Caribbean Coast */}
                <div className="flex items-center justify-between text-xs text-stone-300">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-stone-700">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Hacia San Alberto & Costa Caribe (Norte)</span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Troncal 45A</span>
                </div>

                {/* Center Core Pin: SENA Aguas Calientes at Km 48 */}
                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="bg-[#39A900] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border-2 border-white/90 animate-bounce">
                    <MapPin className="w-6 h-6 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-black uppercase">SENA Sede Aguas Calientes</div>
                      <div className="text-[10px] text-emerald-100 font-bold">Km 48 Vía al Mar · Km 4 adelante de El Playón</div>
                      <div className="text-[9px] text-emerald-200">Subsede Centro de Atención al Sector Agropecuario</div>
                    </div>
                  </div>
                  <span className="mt-2 text-[11px] font-bold text-emerald-400 bg-black/80 px-3 py-1 rounded-full border border-emerald-500/40">
                    ★ 130 Hectáreas · 100% Internado
                  </span>
                </div>

                {/* Bottom Points: El Playón & Bucaramanga / Piedecuesta */}
                <div className="flex items-center justify-between text-xs">
                  <div className="bg-stone-800/90 text-stone-200 px-3 py-1.5 rounded-lg border border-stone-700 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div>
                      <span className="font-bold">El Playón (Casco Urbano)</span>
                      <span className="text-[10px] text-stone-400 block">Km 44 desde Bucaramanga</span>
                    </div>
                  </div>

                  <div className="bg-black/75 text-stone-300 px-3 py-1.5 rounded-lg border border-stone-700 text-right">
                    <span>Bucaramanga (Km 0) · Piedecuesta (Guatiguara)</span>
                    <span className="text-[10px] text-emerald-400 block">Sede Administrativa Principal CASA</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Location Note */}
            <div className="mt-4 p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-start gap-3">
              <Info className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                <strong>Referencia de llegada para conductores:</strong> Sobre la Vía al Mar saliendo de Bucaramanga rumbo a la Costa, se pasa por Rionegro y el casco urbano de El Playón (Km 44). Se continúa 4 kilómetros más adelante hasta el mojón del <strong>Kilómetro 48</strong>, donde se encuentra la portería oficial de la subsede del Centro de Atención al Sector Agropecuario.
              </p>
            </div>
          </div>

          {/* How to get there: City Route Selector */}
          <div className="lg:col-span-5 bg-stone-50 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 mb-4">
              <Bus className="w-5 h-5 text-[#39A900]" />
              ¿Cómo llegar a la Sede Aguas Calientes?
            </h3>

            {/* City Tabs */}
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-200/70 dark:bg-stone-800 rounded-xl mb-6">
              <button
                onClick={() => setOriginCity('bucaramanga')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  originCity === 'bucaramanga'
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Bucaramanga (Vía al Mar)
              </button>
              <button
                onClick={() => setOriginCity('piedecuesta')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  originCity === 'piedecuesta'
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Piedecuesta (Guatiguara)
              </button>
              <button
                onClick={() => setOriginCity('sanalberto')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  originCity === 'sanalberto'
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                San Alberto (Cesar)
              </button>
              <button
                onClick={() => setOriginCity('rionegro')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  originCity === 'rionegro'
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Rionegro
              </button>
            </div>

            {/* Route Stats Strip */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="text-[10px] text-stone-500 uppercase font-semibold">Distancia</span>
                <div className="text-base font-extrabold text-stone-900 dark:text-stone-100">{activeRoute.distance}</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="text-[10px] text-stone-500 uppercase font-semibold">Tiempo Estimado</span>
                <div className="text-base font-extrabold text-[#39A900] tabular-nums">{activeRoute.time}</div>
              </div>
            </div>

            {/* Route details */}
            <div className="space-y-2.5">
              <div className="text-xs text-stone-500 dark:text-stone-400">
                <strong className="text-stone-700 dark:text-stone-300">Empresas de transporte:</strong> {activeRoute.companies}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400">
                <strong className="text-stone-700 dark:text-stone-300">Pasaje aproximado:</strong> {activeRoute.cost}
              </div>
            </div>

            {/* Step list */}
            <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-3">
                Indicaciones paso a paso:
              </span>
              <div className="space-y-3">
                {activeRoute.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-[#39A900]/15 text-[#39A900] font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
