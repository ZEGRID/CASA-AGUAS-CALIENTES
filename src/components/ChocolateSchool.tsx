import React, { useState } from 'react';
import { 
  Award, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Layers, 
  ArrowRight, 
  ExternalLink, 
  X, 
  Maximize2,
  Heart,
  Building2
} from 'lucide-react';
import { TabType } from '../types';

interface ChocolateSchoolProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const ChocolateSchool: React.FC<ChocolateSchoolProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const chocolateImages = [
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.39.17_AM_9067addd.jpeg',
      title: 'Escuela Latinoamericana de Chocolatería · Stand Institucional',
      desc: 'Escuela de formación del CASA en la Vereda Guatiguara (Piedecuesta, Santander).'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.26.46_AM_fb19d928.jpeg',
      title: 'Bombones Finos de Autor con Pintura Artística',
      desc: 'Elaborados por aprendices del SENA utilizando cacao de alta calidad de Santander.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.26.46_AM__1__ba48bedf.jpeg',
      title: 'Artesanías en Chocolate Navideñas y Decorativas',
      desc: 'Técnicas de modelado, moldes de policarbonato y acabado brillante.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.26.46_AM__2__51df3610.jpeg',
      title: 'Caja Regalo de Chocolatería Fina',
      desc: 'Bombones rellenos, trufas, frutos secos y barras de origen.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.31.39_AM_713f87af.jpeg',
      title: 'Bombones Esferas y Moldes Profesionales',
      desc: 'Demostración de manteca de cacao coloreada y técnica de encamisado.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.43.01_AM_11a72a01.jpeg',
      title: 'Prácticas de Aerografía y Pintura de Moldes',
      desc: 'Aprendices aplicando colorantes liposolubles para lograr efectos metálicos y marmoleados.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.46.43_AM_9dd05cfd.jpeg',
      title: 'Maquinaria de Transformación: Tostadora Centoventi',
      desc: 'Equipos industriales de tostación de grano de cacao para la obtención del licor de chocolate.'
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.46.43_AM__1__cf94337b.jpeg',
      title: 'Planta de Transformación Agroindustrial y Conchas',
      desc: 'Ambiente especializado de molienda, refinación y conchado en Guatiguara.'
    }
  ];

  return (
    <section id="escuela-chocolateria" className="py-16 sm:py-24 bg-stone-100/70 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/25 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Innovación y Valor Agregado Agroindustrial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Escuela Latinoamericana de Chocolatería
          </h2>

          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Un ambiente de formación especializada del SENA ubicado en el <strong>Centro de Atención al Sector Agropecuario (CASA)</strong>, en la <strong>sede de Guatiguara (Piedecuesta, Santander)</strong>, dedicado a la transformación fina del cacao y la maestría chocolatera.
          </p>
        </div>

        {/* HERO FEATURE CARD: Sede Guatiguara & Sede Aguas Calientes Synergy */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-emerald-950 text-white p-6 sm:p-10 shadow-2xl border border-amber-700/40 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39A900] text-white text-xs font-extrabold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Sede Administrativa CASA · Vereda Guatiguara, Piedecuesta</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Del Grano a la Barra: Sinergia Perfecta entre Aguas Calientes y Guatiguara
              </h3>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                El objetivo fundamental de la Escuela Latinoamericana de Chocolatería es <strong>darle valor agregado al grano de cacao</strong>. Lo extraordinario de esta cadena formativa es que <strong>el cacao procesado en Guatiguara proviene también de los cultivos productivos de nuestra Sede Aguas Calientes (El Playón)</strong>, cerrando el ciclo completo: desde la cosecha en la finca 100% internado hasta la chocolatería fina de exportación.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/15 space-y-1">
                  <div className="text-xs uppercase font-extrabold text-amber-400">1. Sede Aguas Calientes (El Playón)</div>
                  <div className="text-xs text-stone-200">Cosecha, fermentación, secado y producción primaria del cacao fino en 130 hectáreas.</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 border border-white/15 space-y-1">
                  <div className="text-xs uppercase font-extrabold text-[#4cd906]">2. Sede Guatiguara (Piedecuesta)</div>
                  <div className="text-xs text-stone-200">Escuela de Chocolatería: tostación, molienda, conchado, templado y bombonería fina.</div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('finca')}
                  className="px-4 py-2.5 rounded-xl bg-[#39A900] hover:bg-[#2e8800] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>Ver Cultivos en Aguas Calientes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenInterestModal}
                  className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
                >
                  <span>Consultar Programas de Chocolatería</span>
                </button>
              </div>
            </div>

            {/* Featured Image preview from uploaded photos */}
            <div className="lg:col-span-5">
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl group cursor-pointer"
                onClick={() => setLightboxImage('/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.39.17_AM_9067addd.jpeg')}
              >
                <img 
                  src="/assets/aistudio/WhatsApp_Image_2026-11-13_at_12.39.17_AM_9067addd.jpeg" 
                  alt="Escuela Latinoamericana de Chocolatería SENA Guatiguara" 
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-300">Fotografía Oficial · Stand y Sede Guatiguara</span>
                  <h4 className="text-base font-bold text-white">Escuela Latinoamericana de Chocolatería</h4>
                  <p className="text-xs text-stone-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Km 2 Vía Palogordo, Vereda Guatiguara, Piedecuesta</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Programs offered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Tecnólogo en Transformación de Cacao y Elaboración de Chocolatería Fina
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Programa de formación integral enfocado en los procesos fisicoquímicos del cacao, control de fermentación, tostación, molienda, técnicas avanzadas de templado, formulación de ganaches, pralinés y diseño de empaques para la industria chocolatera de alta gama.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#39A900] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Titulación gratuita · Presencial en Guatiguara (CASA)</span>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Técnico en Chocolatería y Buenas Prácticas de Manufactura
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Capacitación práctica en el manejo de maquinaria chocolatera, moldes de policarbonato, aerografía artística, bombonería moldeada, barras rellenas y control microbiológico e higiénico en plantas de procesamiento de alimentos.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#39A900] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ambientes especializados con maquinaria industrial</span>
            </div>
          </div>
        </div>

        {/* PHOTO GALLERY OF UPLOADED ASSETS */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
                Galería Fotográfica de la Escuela y Productos
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                Explore las imágenes de nuestros aprendices, instructores, maquinaria especializada (tostadoras, conchas) y piezas de chocolatería fina elaboradas con cacao santandereano.
              </p>
            </div>
            <span className="text-xs font-semibold text-stone-500 bg-stone-200/70 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
              {chocolateImages.length} Fotografías oficiales
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chocolateImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxImage(img.src)}
                className="group relative bg-white dark:bg-stone-800 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-stone-900">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-stone-900/80 text-white backdrop-blur-sm">
                      <Maximize2 className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-2" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-stone-900/90 text-white hover:bg-stone-800 transition-colors border border-white/20 shadow-xl"
              aria-label="Cerrar imagen ampliada"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Imagen ampliada Escuela de Chocolatería SENA"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}

    </section>
  );
};
