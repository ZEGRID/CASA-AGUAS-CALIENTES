import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Clock, 
  Moon, 
  Sun, 
  Users, 
  AlertTriangle, 
  FileCheck, 
  Heart, 
  PhoneOff, 
  DoorClosed, 
  BookOpen, 
  Award,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { TabType } from '../types';

interface CoexistenceRulesProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const CoexistenceRules: React.FC<CoexistenceRulesProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [selectedSection, setSelectedSection] = useState<'comparativa' | 'manual-internado' | 'reglamento-sena' | 'rutina-diaria' | 'pacto'>('manual-internado');

  const dailySchedule = [
    { time: '04:00 AM', title: 'Turno de Ordeño y Ganadería (L-V)', desc: 'Aprendices asignados a faena pecuaria matutina en establos (S-D a las 5:00 a.m.).', icon: Sun },
    { time: '04:40 AM', title: 'Inicio General de Actividades', desc: 'Levantada, arreglo de alojamiento y preparación de jornada.', icon: Sun },
    { time: '05:00 AM - 06:00 AM', title: 'Actividades de Limpieza y Ornato', desc: 'Cuidado de instalaciones, zonas verdes, pasillos y áreas comunes.', icon: ShieldCheck },
    { time: '06:00 AM - 06:45 AM', title: 'Desayuno en el Casino', desc: 'Minuta nutricional balanceada proporcionada por el SENA.', icon: Heart },
    { time: '07:00 AM - 09:30 AM', title: 'Ambiente de Aprendizaje (Bloque 1)', desc: 'Sesiones teórico-prácticas en aulas técnicas y laboratorios.', icon: BookOpen },
    { time: '09:30 AM - 10:00 AM', title: 'Descanso de la Mañana', desc: 'Pausa activa e hidratación en zonas de esparcimiento.', icon: Sun },
    { time: '10:00 AM - 12:00 PM', title: 'Ambiente de Aprendizaje (Bloque 2)', desc: 'Retorno a actividades formativas y talleres de campo.', icon: Award },
    { time: '12:00 PM - 12:45 PM', title: 'Almuerzo en Comedor', desc: 'Almuerzo completo y retorno de bandejas higienizadas.', icon: Heart },
    { time: '01:00 PM - 03:30 PM', title: 'Reinicio Formativo en Campo', desc: 'Prácticas aplicadas de producción agrícola, pecuaria o agroempresarial.', icon: BookOpen },
    { time: '03:30 PM - 04:30 PM', title: 'Procesos Productivos y Resodo', desc: 'Actividad técnica en Cacao, Cítricos La Loma/Camellones y residuos sólidos.', icon: Award },
    { time: '05:00 PM - 06:15 PM', title: 'Cena Comunitaria', desc: 'Alimentación vespertina en el casino del internado.', icon: Heart },
    { time: '05:45 PM - 07:45 PM', title: 'Espacio Recreo Deportivo y Gimnasio', desc: 'Deportes, biblioteca (7am a 4pm) y actividades al aire libre.', icon: Users },
    { time: '08:00 PM', title: 'Descanso en Alojamiento (Toque de Silencio)', desc: 'Restricción de celulares hasta las 4:40 a.m. para garantizar el reposo físico (9:00 p.m. fines de semana).', icon: Moon },
  ];

  const internRules = [
    {
      category: 'Pabellones y Dormitorios',
      icon: DoorClosed,
      rules: [
        'Separación física estricta entre pabellones femeninos y masculinos. El ingreso no autorizado al pabellón del género opuesto constituye falta gravísima.',
        'Cada interno es responsable de mantener su cama tendida, ropa en orden dentro de su casillero asignado y libre de desorden.',
        'Brigadas rotativas diarias para el barrido, trapeado y desinfección de pasillos y baterías sanitarias.',
        'Queda prohibido fumar, vapear o encender velas o aparatos térmicos en los dormitorios.',
      ],
    },
    {
      category: 'Vida Comunitaria y Respeto',
      icon: Users,
      rules: [
        'Trato digno, respetuoso y cordial entre todos los 130 aprendices, instructores, celadores y personal de cocina.',
        'Cero tolerancia a conductas de acoso, matoneo, discriminación por origen regional, credo, orientación o género.',
        'Cuidado ejemplar de las instalaciones, enseres, herramientas agrícolas y bienestar de los animales de la finca.',
        'Resolución pacífica de desacuerdos a través de los voceros de ficha y el equipo de Bienestar al Aprendiz.',
      ],
    },
    {
      category: 'Horarios, Permisos y Salidas',
      icon: Clock,
      rules: [
        'Puntualidad rigurosa en comedor, formaciones y ambientes de aprendizaje de campo.',
        'Las salidas de la sede los fines de semana requieren autorización formal firmada por los padres/acudientes y visto bueno de coordinación.',
        'Prohibido abandonar la finca o cruzar los linderos de las 130 hectáreas sin permiso escrito del instructor de turno.',
        'Registro obligatorio en portería con presentación del carné SENA tanto al salir como al reingresar.',
      ],
    },
    {
      category: 'Cero Tolerancia (Faltas Gravísimas)',
      icon: AlertTriangle,
      rules: [
        'Ingreso, porte, distribución o consumo de bebidas alcohólicas o cualquier sustancia psicoactiva dentro de la sede.',
        'Porte de armas de fuego, traumáticas, neumáticas o armas blancas no autorizadas para la labor técnica.',
        'Hurto, apropiación indebida de bienes de compañeros o sustracción de productos de las cosechas y unidades pecuarias.',
        'Estas faltas acarrean la cancelación inmediata de matrícula y reporte a las autoridades competentes.',
      ],
    },
  ];

  const generalSenaRules = [
    {
      title: 'Derechos del Aprendiz',
      points: [
        'Recibir formación profesional integral de calidad acorde al programa tecnológico elegido.',
        'Hacer uso adecuado de los ambientes de aprendizaje, maquinaria, laboratorios y biblioteca.',
        'Gozar de las garantías del debido proceso en cualquier comité disciplinario.',
        'Ser evaluado con criterios objetivos y recibir retroalimentación formativa oportuna.',
      ],
    },
    {
      title: 'Deberes Institucionales',
      points: [
        'Portar dignamente el uniforme reglamentario limpio y el carné institucional visible.',
        'Aprobar la totalidad de los resultados de aprendizaje de la etapa lectiva y productiva.',
        'Participar activamente en las brigadas de aseo y mantenimiento de la subsede Aguas Calientes.',
        'Representar con honor y decoro el buen nombre del SENA en todo momento.',
      ],
    },
    {
      title: 'Régimen Disciplinario',
      points: [
        'Tipificación clara de faltas leves, graves y gravísimas según el Acuerdo 007 de 2012.',
        'Instancias de Comité de Evaluación y Seguimiento con presencia del aprendiz y su vocero.',
        'Medidas formativas pedagógicas antes de aplicar sanciones definitivas.',
        'Sanciones posibles: Llamado de atención escrito, condicionamiento de matrícula y cancelación.',
      ],
    },
  ];

  return (
    <section id="manual-convivencia-reglamento" className="py-16 sm:py-24 bg-stone-50 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <Scale className="w-4 h-4" />
            <span>Marco Normativo Obligatorio</span>
            <span aria-hidden="true">·</span>
            <span>Seguridad y Disciplina</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Cumplimiento del Manual de Convivencia y Reglamento del Aprendiz
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Vivir en el único internado 100% residencial del SENA en el oriente del país es un privilegio que exige un alto sentido de responsabilidad. Todo aprendiz y su familia deben conocer y acatar la doble normativa que rige en la Sede Aguas Calientes.
          </p>
        </div>

        {/* Tab selection */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-2xl">
          <button
            onClick={() => setSelectedSection('manual-internado')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedSection === 'manual-internado'
                ? 'bg-[#39A900] text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Manual de Convivencia del Internado
          </button>
          <button
            onClick={() => setSelectedSection('rutina-diaria')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedSection === 'rutina-diaria'
                ? 'bg-[#39A900] text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Rutina Diaria del Interno
          </button>
          <button
            onClick={() => setSelectedSection('reglamento-sena')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedSection === 'reglamento-sena'
                ? 'bg-[#39A900] text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Reglamento General SENA (Acuerdo 007)
          </button>
          <button
            onClick={() => setSelectedSection('pacto')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedSection === 'pacto'
                ? 'bg-[#39A900] text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
            }`}
          >
            Pacto de Convivencia Familiar
          </button>
        </div>

        {/* SECTION 1: MANUAL DE CONVIVENCIA DEL INTERNADO */}
        {selectedSection === 'manual-internado' && (
          <div className="mt-10 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-1">
                  <span>Resolución No. 68 - 04281 de 2026</span>
                  <span aria-hidden="true">·</span>
                  <span>Acuerdo 0009 de 2024</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#39A900]" />
                  Manual de Convivencia Oficial · Subsede El Playón
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl leading-relaxed">
                  Adoptado mediante la <strong>Resolución No. 68 - 04281 de 2026</strong> expedida por la Subdirección del Centro de Atención al Sector Agropecuario (SENA Regional Santander) para orientar el comportamiento, deberes y permanencia de los aprendices en el internado.
                </p>
              </div>

              <a
                href="/assets/aistudio/RESOLUCI_N_04281MANUAL_DE_CONVIVENCIA_PLAYON__2__024f38c9.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors flex items-center gap-2 shrink-0 shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Resolución Completa (PDF)</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internRules.map((group, idx) => {
                const IconComponent = group.icon;
                const isAlert = group.category.includes('Tolerancia');
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 border transition-all ${
                      isAlert
                        ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/60'
                        : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isAlert
                          ? 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400'
                          : 'bg-[#39A900]/10 dark:bg-[#39A900]/20 text-[#39A900]'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className={`text-base font-bold ${
                        isAlert ? 'text-red-800 dark:text-red-300' : 'text-stone-900 dark:text-stone-100'
                      }`}>
                        {group.category}
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {group.rules.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isAlert ? 'text-red-500' : 'text-[#39A900]'
                          }`} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 2: RUTINA DIARIA DEL INTERNO */}
        {selectedSection === 'rutina-diaria' && (
          <div className="mt-10 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8">
            <div className="max-w-2xl mb-8">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#39A900]" />
                Un Día Típico en la Sede Aguas Calientes
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                La formación en internado combina la disciplina horaria con el aprendizaje técnico en campo. Conoce cómo se distribuye el tiempo desde el amanecer hasta el descanso nocturno.
              </p>
            </div>

            <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-4 sm:ml-6 space-y-6 sm:space-y-8 pl-6 sm:pl-8">
              {dailySchedule.map((slot, sIdx) => {
                const IconSlot = slot.icon;
                return (
                  <div key={sIdx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-stone-900 border-2 border-[#39A900] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#39A900]" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#39A900] dark:text-[#4cd906] shrink-0">
                        {slot.time}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                        {slot.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                      {slot.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 3: REGLAMENTO GENERAL SENA */}
        {selectedSection === 'reglamento-sena' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {generalSenaRules.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 pb-3 mb-4 border-b border-stone-100 dark:border-stone-800">
                    {sec.title}
                  </h4>
                  <ul className="space-y-3">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#39A900] shrink-0 mt-2" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 text-[11px] text-stone-500">
                  Norma matriz: Acuerdo No. 00007 de 2012
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECTION 4: PACTO DE CONVIVENCIA FAMILIAR */}
        {selectedSection === 'pacto' && (
          <div className="mt-10 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-10">
            <div className="max-w-3xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-[#39A900] mb-4">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                Pacto Tripartito: Aprendiz, Familia y SENA
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 leading-relaxed">
                El éxito formativo en un internado depende de la alianza permanente con el hogar. Antes de iniciar clases, se firma este documento vinculante que define las responsabilidades mutuas:
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                  <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                    1. Compromiso del Padre / Acudiente
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Acompañar moral y emocionalmente al aprendiz, atender las citaciones de bienestar o coordinación académica, autorizar oportunamente los permisos de salida y velar por el cumplimiento del kit de internado.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                  <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                    2. Compromiso del Aprendiz
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Aprovechar al máximo la oportunidad de formación gratuita, cuidar las 130 hectáreas, honrar la confianza de su familia, respetar a sus compañeros en dormitorios y comedores, y alcanzar la titulación de Tecnólogo.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                  <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1">
                    3. Compromiso del SENA Aguas Calientes
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Brindar formación tecnológica de la más alta calidad con instructores expertos, suministrar alimentación sana y dormitorios dignos, garantizar seguridad en el campus y acompañamiento psicosocial permanente.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Documento anexo en la formalización de matrícula en la Sede El Playón.
                </div>
                <button
                  onClick={onOpenInterestModal}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors"
                >
                  Consultar Fechas de Matrícula
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
