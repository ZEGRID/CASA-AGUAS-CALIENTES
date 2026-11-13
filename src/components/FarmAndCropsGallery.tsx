import React, { useState } from 'react';
import { 
  Trees, 
  Sprout, 
  Beef, 
  Maximize2, 
  X,
  Play,
  ExternalLink,
  Video,
  Fish,
  Egg,
  Home,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TabType } from '../types';

interface FarmAndCropsGalleryProps {
  onNavigate: (tab: TabType) => void;
}

export const FarmAndCropsGallery: React.FC<FarmAndCropsGalleryProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'agricola' | 'pecuaria' | 'infraestructura' | 'videos'>('todos');
  const [activeImageModal, setActiveImageModal] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const units = [
    {
      id: 'porteria-oficial',
      name: 'Portería y Fachada Principal Oficial',
      category: 'infraestructura' as const,
      area: 'Acceso Km 48 Vía al Mar',
      image: '/assets/aistudio/aguas_calientes_1_eb15b122.jpeg',
      title: 'Entrada Oficial: Subsede Aguas Calientes El Playón',
      description: 'Acceso principal de la sede sobre la vía nacional al mar con su emblemática valla: "SENA - Centro de Atención al Sector Agropecuario - Regional Santander - Subsede Aguas Calientes El Playón", jardineras florecidas y caseta de seguridad 24/7.',
      highlights: ['Control de acceso y vigilancia privada permanente', 'Ubicada en el Km 48 de la vía al mar desde Bucaramanga', 'Bienvenida a los 130 aprendices e instructores'],
    },
    {
      id: 'cultivo-citricos-evaluacion',
      name: 'Cultivo de Cítricos y Evaluación Agronómica',
      category: 'agricola' as const,
      area: '35 Hectáreas agrícolas',
      image: '/assets/aistudio/Aguas_calientes_9_8c103317.jpg',
      title: 'Monitoreo Técnico en Huertos de Cítricos',
      description: 'Aprendiz SENA del programa de Gestión de la Producción Agrícola realizando registros de desarrollo fenológico, sanidad y calidad de frutos en el lote de cítricos tecnificados de la finca.',
      highlights: ['Naranja Valencia y Limón Tahití', 'Manejo fitosanitario y Buenas Prácticas Agrícolas', 'Registro de campo y trazabilidad'],
    },
    {
      id: 'vivero-agroforestal',
      name: 'Vivero Tecnificado bajo Polisombra',
      category: 'agricola' as const,
      area: 'Unidad de propagación',
      image: '/assets/aistudio/Aguas_calientes_4_ae50347a.jpg',
      title: 'Vivero de Cacao Clonal y Especies Forestales',
      description: 'Instalación tecnificada protegida con polisombra y sistema de aspersión aéreo para el enraizamiento, injertación y propagación de clones de cacao, frutales y árboles protectores para las 130 hectáreas.',
      highlights: ['Microaspersión automatizada', 'Propagación de clones élite de cacao', 'Sustratos orgánicos y biofertilizantes'],
    },
    {
      id: 'unidad-porcicola',
      name: 'Granja Porcícola Tecnificada',
      category: 'pecuaria' as const,
      area: 'Módulo pecuario porcino',
      image: '/assets/aistudio/aguas_calientes_5_82e72168.jpg',
      title: 'Instalaciones de Manejo y Cría Porcina',
      description: 'Nave porcícola con corrales individuales y colectivos de mampostería lavable, pasillos de circulación, comederos higiénicos y manejo de bioseguridad para el aprendizaje pecuario.',
      highlights: ['Corrales sanitarios con ventilación natural', 'Manejo reproductivo y nutrición', 'Aprovechamiento de porquinaza para abono'],
    },
    {
      id: 'unidad-avicola',
      name: 'Galpón Avícola de Postura y Engorde',
      category: 'pecuaria' as const,
      area: 'Módulo avícola',
      image: '/assets/aistudio/Aguas_calientes_6_783d8345.jpg',
      title: 'Galpón Avícola de Aprendizaje',
      description: 'Estructura techada en perfiles verdes con cerramiento en malla, bebederos automáticos y nidales donde los aprendices gestionan lotes de aves de postura y pollos de engorde para autoconsumo y comercialización.',
      highlights: ['Bebederos y comederos automáticos', 'Control sanitario y bioseguridad avícola', 'Abastecimiento de proteína para el casino'],
    },
    {
      id: 'estanques-piscicultura',
      name: 'Estanques de Piscicultura y Espejos de Agua',
      category: 'pecuaria' as const,
      area: 'Unidad acuícola y reservorio',
      image: '/assets/aistudio/Aguas_calientes_2_a0796987.jpg',
      title: 'Piscicultura Sostenible y Maquinaria Agrícola',
      description: 'Lagos y reservorios artificiales dedicados a la siembra de peces (mojarra y cachama), provistos con motobombas y tractores agrícolas que apoyan las faenas de adecuación de terrenos.',
      highlights: ['Cultivo de tilapia y peces nativos', 'Aprovechamiento integral del recurso hídrico', 'Práctica con maquinaria agrícola en campo'],
    },
    {
      id: 'kiosco-bioclimatico-aprendizaje',
      name: 'Maloca y Kiosco Bioclimático de Formación',
      category: 'infraestructura' as const,
      area: 'Ambiente abierto de aprendizaje',
      image: '/assets/aistudio/Aguas_calientes_7_322bfa0d.jpg',
      title: 'Espacio Abierto de Trabajo Colaborativo',
      description: 'Kiosco circular con estructura tradicional de guadua y ventilación perimetral donde los aprendices internos se reúnen a trabajar con computadores portátiles, debatir proyectos y socializar en horario extracurricular.',
      highlights: ['Ambiente fresco integrado a la naturaleza', 'Conectividad para estudio grupal', 'Espacio de convivencia y bienestar'],
    },
    {
      id: 'pabellon-alojamiento-enfermeria',
      name: 'Pabellón Residencial y Enfermería',
      category: 'infraestructura' as const,
      area: 'Área residencial del internado',
      image: '/assets/aistudio/Aguas_calientes_8_d11f2e9c.jpg',
      title: 'Instalaciones de Convivencia y Punto de Encuentro',
      description: 'Construcción en ladrillo a la vista protegida por árboles nativos, con dormitorios acondicionados, casilleros, baños y módulo de enfermería con señalización oficial de punto de encuentro para emergencias.',
      highlights: ['Pabellones separados con seguridad 24 horas', 'Punto de encuentro y brigada de salud', 'Tranquilidad y descanso para los 130 internos'],
    },
    {
      id: 'paisaje-reservorios-finca',
      name: 'Lagos y Serranía de las 130 Hectáreas',
      category: 'infraestructura' as const,
      area: 'Reserva hídrica y paisajística',
      image: '/assets/aistudio/Aguas_calientes_3_3ada47ea.jpg',
      title: 'Paisaje Natural y Reservorios Hídricos',
      description: 'Vista panorámica de los cuerpos de agua y las montañas que rodean la Finca Aguas Calientes en El Playón, que garantizan el suministro de agua para riego, ganadería y consumo.',
      highlights: ['Riqueza hídrica que da nombre a la sede', 'Topografía de montaña y valles fértiles', 'Entorno ecológico libre de contaminación'],
    },
  ];

  const videos = [
    {
      id: 'youtube-tour',
      title: 'Video Oficial: SENA Aguas Calientes El Playon',
      author: 'Barichara Prodigital / SENA',
      image: '/assets/youtube_aguas_calientes_max.jpg',
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=1WKVxDUcJYc',
      embedId: '1WKVxDUcJYc',
      desc: 'Recorrido audiovisual en alta definición por los ambientes de aprendizaje, cultivos, unidades productivas y la vida de los aprendices en la Sede Aguas Calientes.',
    },
  ];

  const filteredUnits = units.filter((u) => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'agricola') return u.category === 'agricola';
    if (selectedCategory === 'pecuaria') return u.category === 'pecuaria';
    if (selectedCategory === 'infraestructura') return u.category === 'infraestructura';
    return false;
  });

  return (
    <section id="finca-cultivos" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
              <Trees className="w-4 h-4" />
              <span>Campus Agroecológico de 130 Hectáreas</span>
              <span aria-hidden="true">·</span>
              <span>Km 48 Vía al Mar · El Playón, Santander</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
              La Finca Aguas Calientes y sus Cultivos Productivos
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              Fotografías reales de las instalaciones, cultivos de cítricos, vivero tecnificado de cacao, unidades porcícolas, avícolas, lagos de piscicultura y pabellones de convivencia de la subsede del Centro de Atención al Sector Agropecuario (CASA).
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shrink-0">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'todos'
                  ? 'bg-[#39A900] text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Todas las Fotos ({units.length})
            </button>
            <button
              onClick={() => setSelectedCategory('agricola')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'agricola'
                  ? 'bg-[#39A900] text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Agrícola (Cítricos y Vivero)
            </button>
            <button
              onClick={() => setSelectedCategory('pecuaria')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'pecuaria'
                  ? 'bg-[#39A900] text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Pecuaria (Porcinos, Aves, Peces)
            </button>
            <button
              onClick={() => setSelectedCategory('infraestructura')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'infraestructura'
                  ? 'bg-[#39A900] text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Campus e Internado
            </button>
            <button
              onClick={() => setSelectedCategory('videos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'videos'
                  ? 'bg-red-600 text-white shadow-sm font-bold'
                  : 'text-red-600 dark:text-red-400 hover:text-red-700'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Video de la Sede</span>
            </button>
          </div>
        </div>

        {/* VIDEOS SHOWCASE SECTION (YouTube Official Video Only) */}
        {(selectedCategory === 'todos' || selectedCategory === 'videos') && (
          <div className="mt-10 mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Video className="w-4 h-4" />
                  Video Oficial de la Sede
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
                  Recorrido en Video: SENA Aguas Calientes El Playón
                </h3>
              </div>
              <span className="text-xs text-stone-500">
                Producción oficial de la comunidad educativa SENA
              </span>
            </div>

            {/* Single Prominent YouTube Card */}
            <div className="group rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch hover:border-red-500/50 transition-all shadow-sm">
              <div className="lg:col-span-7 relative aspect-video bg-black overflow-hidden">
                <img
                  src="/assets/youtube_aguas_calientes_max.jpg"
                  alt="Video SENA Aguas Calientes El Playon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <button
                    onClick={() => setActiveVideoModal('1WKVxDUcJYc')}
                    className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform active:scale-95"
                    title="Reproducir video de YouTube"
                    aria-label="Reproducir video de YouTube"
                  >
                    <Play className="w-10 h-10 fill-current ml-1.5" />
                  </button>
                </div>
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/75 backdrop-blur-sm px-3 py-1 rounded-md">
                  YouTube · Barichara Prodigital / SENA
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Documental y Recorrido de Campo
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                    SENA Aguas Calientes El Playón
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
                    Conoce las 130 hectáreas, los cultivos de cítricos, el vivero de cacao, las instalaciones pecuarias y el testimonio de los 130 aprendices que conviven en el único internado del SENA en el oriente del país.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-700 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveVideoModal('1WKVxDUcJYc')}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Reproducir Video</span>
                  </button>

                  <a
                    href="https://www.youtube.com/watch?v=1WKVxDUcJYc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-700/80 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Abrir en YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Units / Photos Grid */}
        {selectedCategory !== 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    {/* Category Tag & Area */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                        {unit.area}
                      </span>
                    </div>

                    {/* Zoom full view trigger */}
                    <button
                      onClick={() => setActiveImageModal({ src: unit.image, title: unit.title, desc: unit.description })}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-colors"
                      title="Ampliar fotografía"
                      aria-label="Ampliar fotografía"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base font-bold text-white text-balance drop-shadow-sm leading-snug">
                        {unit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-5">
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      {unit.description}
                    </p>

                    <div className="mt-4 space-y-1.5">
                      {unit.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-[11px] text-stone-600 dark:text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39A900] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    Finca Aguas Calientes
                  </span>
                  <button
                    onClick={() => setActiveImageModal({ src: unit.image, title: unit.title, desc: unit.description })}
                    className="text-xs font-bold text-[#39A900] hover:underline"
                  >
                    Ampliar foto
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Institutional Relationship Card */}
        <div className="mt-16 bg-white dark:bg-stone-900 border border-[#39A900]/30 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#39A900] uppercase tracking-wider">
                Estructura Administrativa Institucional
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                Sede del Centro de Atención al Sector Agropecuario (CASA)
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
                La Finca Aguas Calientes (El Playón) es una <strong>subsede campestre de formación e internado</strong> adscrita al <strong>Centro de Atención al Sector Agropecuario (CASA) de la Regional Santander</strong>, cuya <strong>sede administrativa principal se encuentra ubicada en Piedecuesta (Santander), en la vereda Guatiguara</strong>.
              </p>
            </div>

            <button
              onClick={() => onNavigate('ubicacion')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Ver Ubicación en Mapa (Km 48)
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Image Modal */}
      {activeImageModal && (
        <div 
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-900 text-white rounded-2xl max-w-4xl w-full overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={activeImageModal.src}
                alt={activeImageModal.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Cerrar vista ampliada"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{activeImageModal.title}</h3>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">{activeImageModal.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* YouTube Video Player Modal */}
      {activeVideoModal && (
        <div 
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-stone-950 text-white rounded-2xl max-w-4xl w-full overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                <span className="text-xs font-bold text-stone-200">Video: SENA Aguas Calientes El Playón</span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800"
                aria-label="Cerrar reproductor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideoModal}?autoplay=1`}
                title="SENA Aguas Calientes El Playon"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
