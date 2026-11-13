import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  FileText, 
  HeartHandshake, 
  UserCheck, 
  AlertCircle, 
  Luggage, 
  ShieldAlert, 
  ClipboardCheck,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Clock
} from 'lucide-react';
import { TabType } from '../types';

interface AdmissionProcedureProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const AdmissionProcedure: React.FC<AdmissionProcedureProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [kitFilter, setKitFilter] = useState<'todos' | 'obligatorio' | 'aseo' | 'campo' | 'prohibido'>('todos');

  const steps = [
    {
      step: '01',
      title: 'Inscripción en Plataforma Oficial SENA',
      subtitle: 'Convocatoria trimestral en Sofia Plus / Zajuna',
      desc: 'El aspirante debe estar registrado en el portal oficial del SENA y postularse al programa de tecnólogo ofertado en la subsede Aguas Calientes (Sede El Playón, Santander).',
      requirements: [
        'Haber culminado y aprobado grado 11 (Título de Bachiller)',
        'Haber presentado las pruebas de Estado Saber 11 (ICFES)',
        'Documento de identidad vigente (TI o CC)',
        'Afiliación vigente a salud (EPS o régimen subsidiado Sisbén)',
      ],
      tip: 'Verifica que la modalidad seleccionada indique Sede Aguas Calientes - Internado.',
    },
    {
      step: '02',
      title: 'Prueba de Competencias Básicas',
      subtitle: 'Evaluación digital estandarizada',
      desc: 'Prueba en línea que mide razonamiento lógico, comprensión lectora y competencias actitudinales para el nivel de formación tecnológica.',
      requirements: [
        'Conexión a internet estable durante la fecha asignada por citación',
        'Duración aproximada de 25 a 30 minutos',
        'Puntaje mínimo aprobatorio según el corte del trimestre',
      ],
      tip: 'Si vives en zona rural sin conectividad, acércate a la alcaldía o punto Vive Digital más cercano.',
    },
    {
      step: '03',
      title: 'Valoración Psicosocial y Vocacional de Internado',
      subtitle: 'Entrevista especializada obligatoria',
      desc: 'Dado que el 100% de los aprendices residen en la sede, el equipo de Bienestar al Aprendiz y psicología realiza una entrevista para evaluar la adaptabilidad a la vida comunitaria, vocación por el sector agropecuario y disposición a cumplir el manual de convivencia.',
      requirements: [
        'Asistencia del aspirante y preferiblemente acudiente (si es menor de edad)',
        'Presentación personal adecuada y disposición dialogante',
        'Demostración de interés genuino por el campo y el trabajo práctico',
      ],
      tip: 'Es fundamental que el aspirante esté 100% de acuerdo con vivir en la sede como interno.',
    },
    {
      step: '04',
      title: 'Publicación de Admitidos y Asignación de Cupo',
      subtitle: '130 cupos totales distribuidos en los 3 tecnólogos',
      desc: 'El SENA publica la lista oficial de aprendices seleccionados que obtuvieron cupo residencial en la Sede Aguas Calientes.',
      requirements: [
        'Consulta de resultados con número de documento en la plataforma',
        'Confirmación inmediata de aceptación del cupo en las fechas estipuladas',
      ],
      tip: 'Los cupos son limitados y de alta demanda debido a que incluye alojamiento y manutención gratuita.',
    },
    {
      step: '05',
      title: 'Matrícula Oficial y Firma del Pacto de Convivencia',
      subtitle: 'Formalización del compromiso entre familia, aprendiz y SENA',
      desc: 'Entrega de documentos físicos, legalización de matrícula y firma solemne del acta de aceptación del Reglamento del Aprendiz SENA y el Manual de Convivencia del Internado.',
      requirements: [
        'Fotocopia legible de documento de identidad al 150%',
        'Copia de diploma o acta de grado de bachiller',
        'Certificado de pruebas Saber 11',
        'Certificado de afiliación a EPS/Sisbén con vigencia no mayor a 30 días',
        'Firma mancomunada del aprendiz y padre/madre o acudiente legal',
      ],
      tip: 'Este pacto garantiza la tranquilidad de los padres y el orden armónico de la sede.',
    },
    {
      step: '06',
      title: 'Exámenes Médicos y Esquema de Vacunación',
      subtitle: 'Protección de la salud en ambiente rural de campo',
      desc: 'Por tratarse de trabajo agropecuario con animales y suelo, se exige certificado médico general de aptitud física y vacunas al día.',
      requirements: [
        'Certificado médico general emitido por entidad de salud',
        'Vacuna contra el Tétanos (Toxoide Tetánico) - indispensable para manejo pecuario',
        'Vacuna contra Fiebre Amarilla y Hepatitis B (recomendadas)',
        'Declaración de alergias o condiciones médicas preexistentes',
      ],
      tip: 'El centro cuenta con enfermería para primeros auxilios y convenios de urgencia.',
    },
    {
      step: '07',
      title: 'Ingreso al Campus e Inducción Residencial',
      subtitle: 'Llegada al Km 4 adelante de El Playón',
      desc: 'Recepción formal de los aprendices y sus familias en la Sede Aguas Calientes, asignación de dormitorio, entrega de casillero y recorrido de inducción.',
      requirements: [
        'Llegada en el horario establecido para el registro de equipaje',
        'Acompañamiento familiar en la jornada inaugural de bienvenida',
        'Revisión y verificación del kit de internado',
      ],
      tip: 'Las familias pueden conocer las instalaciones, dormitorios y al equipo de instructores.',
    },
  ];

  const kitItems = [
    {
      category: 'campo',
      name: 'Botas de caucho con suela antideslizante',
      desc: 'Indispensables para labores en establos, potreros y cultivos con barro.',
      status: 'obligatorio',
    },
    {
      category: 'campo',
      name: 'Ropa de trabajo resistente y fresca',
      desc: '3 a 4 pantalones tipo dril/jean y camisas de manga larga para protección solar.',
      status: 'obligatorio',
    },
    {
      category: 'campo',
      name: 'Sombrero de ala ancha o gorra con cubrenuca',
      desc: 'Protección para jornadas de campo bajo el sol tropical de Santander.',
      status: 'obligatorio',
    },
    {
      category: 'campo',
      name: 'Guantes de carnaza o vaqueta para faena',
      desc: 'Para manejo de alambre, madera, forrajes y herramientas agrícolas.',
      status: 'obligatorio',
    },
    {
      category: 'dormitorio',
      name: 'Juego de sábanas para cama sencilla (2 mudas)',
      desc: 'Incluye funda para almohada y sábana ajustable.',
      status: 'obligatorio',
    },
    {
      category: 'dormitorio',
      name: 'Cobija liviana o manta y almohada personal',
      desc: 'Para las noches frescas de la serranía cerca a las fuentes de agua.',
      status: 'obligatorio',
    },
    {
      category: 'dormitorio',
      name: 'Toallas de baño (mínimo 2)',
      desc: 'Para ducha diaria después de las prácticas de campo.',
      status: 'obligatorio',
    },
    {
      category: 'dormitorio',
      name: 'Candado mediano con 2 copias de llave',
      desc: 'Para asegurar tu casillero o clóset personal en el dormitorio.',
      status: 'obligatorio',
    },
    {
      category: 'aseo',
      name: 'Kit de aseo personal completo',
      desc: 'Jabón corporal, champú, cepillo dental, crema, desodorante, máquina de afeitar.',
      status: 'aseo',
    },
    {
      category: 'aseo',
      name: 'Protector solar FPS 50+ y repelente de insectos',
      desc: 'Esencial para el bienestar de la piel durante actividades en las 130 hectáreas.',
      status: 'aseo',
    },
    {
      category: 'estudio',
      name: 'Cuaderno argollado de campo y libreta de apuntes',
      desc: 'Para registro de pesajes, registros reproductivos y bitácoras agronómicas.',
      status: 'obligatorio',
    },
    {
      category: 'estudio',
      name: 'Computador portátil o tablet (opcional)',
      desc: 'La sede cuenta con sala de cómputo, pero puedes traer el tuyo con registro en celaduría.',
      status: 'opcional',
    },
    {
      category: 'prohibido',
      name: 'Bebidas alcohólicas o sustancias psicoactivas',
      desc: 'Tolerancia cero. Infracción gravísima causal de expulsión inmediata y sanción legal.',
      status: 'prohibido',
    },
    {
      category: 'prohibido',
      name: 'Armas de fuego, traumáticas o cortopunzantes no autorizadas',
      desc: 'Solo se permiten las herramientas de labor agrícola bajo custodia de instructores.',
      status: 'prohibido',
    },
    {
      category: 'prohibido',
      name: 'Electrodomésticos de alta potencia en dormitorios',
      desc: 'Prohibidas estufas eléctricas, calentadores o planchas no supervisadas por riesgo de incendio.',
      status: 'prohibido',
    },
  ];

  const filteredKit = kitItems.filter((item) => {
    if (kitFilter === 'todos') return true;
    if (kitFilter === 'obligatorio') return item.status === 'obligatorio';
    if (kitFilter === 'aseo') return item.status === 'aseo';
    if (kitFilter === 'campo') return item.category === 'campo';
    if (kitFilter === 'prohibido') return item.status === 'prohibido';
    return true;
  });

  return (
    <section id="procedimiento-ingreso" className="py-16 sm:py-24 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <span>Ruta Oficial del Aspirante</span>
            <span aria-hidden="true">·</span>
            <span>Admisiones SENA Aguas Calientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Procedimiento de Ingreso al Internado
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Conoce paso a paso cómo postularte, los requisitos indispensables y la documentación que debes preparar junto a tus padres o acudientes para asegurar tu cupo residencial en la Sede Aguas Calientes (El Playón, Santander).
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block px-2 mb-3">
              Fases del Proceso de Selección:
            </span>
            
            {steps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#39A900]/10 border-[#39A900] text-stone-900 dark:text-white shadow-sm'
                      : 'bg-stone-50 dark:bg-stone-900/60 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold px-2 py-1 rounded-md shrink-0 ${
                    isSelected
                      ? 'bg-[#39A900] text-white'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                  }`}>
                    {s.step}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold truncate">
                      {s.title}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                      {s.subtitle}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#39A900] translate-x-1' : 'text-stone-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Step Detail Card (Right Column) */}
          <div className="lg:col-span-7 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-extrabold text-[#39A900] bg-[#39A900]/10 px-2.5 py-1 rounded-md">
                  PASO {steps[activeStep].step} DE 07
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  {steps[activeStep].subtitle}
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-5">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm text-stone-600 dark:text-stone-300 mt-3 leading-relaxed">
              {steps[activeStep].desc}
            </p>

            {/* Requirements check list */}
            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3">
                Requisitos y Documentos Clave de este paso:
              </h5>
              <div className="space-y-2.5">
                {steps[activeStep].requirements.map((req, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Advice Tip Box */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong className="font-bold">Recomendación para la familia:</strong> {steps[activeStep].tip}
              </div>
            </div>

            {/* Quick navigation buttons */}
            <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                ← Paso anterior
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenInterestModal}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors"
                >
                  Registrar Interés
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700 disabled:opacity-30 disabled:pointer-events-none"
                >
                  Siguiente paso →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Kit del Aprendiz Interno: Qué traer a la Sede Aguas Calientes */}
        <div className="mt-20 pt-16 border-t border-stone-200 dark:border-stone-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-1">
                <Luggage className="w-4 h-4" />
                <span>Dotación para el Internado</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                ¿Qué debo empacar en mi maleta de interno?
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
                Guía indispensable para padres de familia y aprendices: elementos necesarios para el confort en dormitorios y la faena diaria en las 130 hectáreas de campo.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shrink-0">
              <button
                onClick={() => setKitFilter('todos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  kitFilter === 'todos'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setKitFilter('campo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  kitFilter === 'campo'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Trabajo de Campo
              </button>
              <button
                onClick={() => setKitFilter('aseo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  kitFilter === 'aseo'
                    ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Aseo Personal
              </button>
              <button
                onClick={() => setKitFilter('prohibido')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  kitFilter === 'prohibido'
                    ? 'bg-red-500 text-white font-bold'
                    : 'text-red-600 dark:text-red-400 hover:text-red-700'
                }`}
              >
                No Permitido ⚠️
              </button>
            </div>
          </div>

          {/* Kit Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKit.map((item, idx) => {
              const isForbidden = item.status === 'prohibido';
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    isForbidden
                      ? 'bg-red-50/60 dark:bg-red-950/20 border-red-200 dark:border-red-900/60'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      {item.name}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                      isForbidden
                        ? 'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300'
                        : item.status === 'opcional'
                        ? 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                        : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                    }`}>
                      {isForbidden ? 'Prohibido' : item.status === 'opcional' ? 'Opcional' : 'Requerido'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Reassurance Note for Parents */}
          <div className="mt-8 p-5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-5 h-5 text-[#39A900] shrink-0" />
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <strong>¿Tienes dudas sobre los documentos o las fechas de la convocatoria actual?</strong> Puedes comunicarte directamente con la oficina de bienestar e inducción de la Sede Aguas Calientes.
              </p>
            </div>
            <button
              onClick={onOpenInterestModal}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#39A900] text-white hover:bg-[#2e8800] transition-colors shrink-0"
            >
              Resolver Inquietudes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
