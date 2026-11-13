import React, { useState } from 'react';
import { 
  Beef, 
  Sprout, 
  TrendingUp, 
  Clock, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  X,
  FileText,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { ProgramInfo, TabType } from '../types';

interface ProgramsSectionProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramInfo | null>(null);

  const programs: ProgramInfo[] = [
    {
      id: 'pecuaria',
      name: 'Gestión de la Producción Pecuaria',
      title: 'Tecnólogo en Gestión de la Producción Pecuaria',
      duration: '27 Meses (Lectiva Interno + Productiva)',
      type: 'Tecnólogo Presencial · 100% Internado',
      snies: 'Registro Calificado SENA Regional Santander',
      summary: 'Formación especializada en la administración técnica, reproductiva, sanitaria y nutricional de sistemas de producción animal sostenible: bovinos carne y leche, porcicultura, avicultura y pastos tecnificados.',
      competencies: [
        'Manejar la producción de la especie pecuaria según criterios técnicos y bienestar animal',
        'Administrar planes de sanidad preventiva, bioseguridad y vacunación de hatos',
        'Formular y suministrar raciones alimenticias y forrajes de alto valor nutritivo',
        'Coordinar procesos de mejoramiento genético, inseminación artificial y reproducción animal',
        'Gestionar registros zootécnicos y costeo de unidades pecuarias productivas',
      ],
      occupations: [
        'Administrador de empresas ganaderas y hatos lecheros',
        'Coordinador de granjas avícolas y porcícolas tecnificadas',
        'Asistente técnico pecuario en gremios como Fedegán y cooperativas',
        'Supervisor de producción en plantas de beneficio y lácteos',
        'Emprendedor rural de su propia unidad pecuaria',
      ],
      fieldUnits: [
        'Módulo de Ganadería Bovina Doble Propósito (Brangus, Cebú y Girolando)',
        'Potreros de Pastoreo Rotacional Voisin con cercas vivas',
        'Establo de Ordeño con Buenas Prácticas Ganaderas (BPG)',
        'Granja Porcícola con sistema de manejo ambiental de porquinaza',
        'Galpones de Avicultura de Postura y Pollo de Engorde',
      ],
    },
    {
      id: 'agricola',
      name: 'Gestión de la Producción Agrícola',
      title: 'Tecnólogo en Gestión de la Producción Agrícola',
      duration: '27 Meses (Lectiva Interno + Productiva)',
      type: 'Tecnólogo Presencial · 100% Internado',
      snies: 'Registro Calificado SENA Regional Santander',
      summary: 'Lidera la siembra, nutrición, fertirriego, control agroecológico de plagas y cosecha de cultivos comerciales estratégicos como cacao clonal, cítricos, plátano, caña y hortalizas bajo normatividad de Buenas Prácticas Agrícolas (BPA).',
      competencies: [
        'Establecer y manejar cultivos agrícolas perennes y transitorios bajo BPA',
        'Operar y supervisar sistemas de fertirriego tecnificado y drenaje en campo',
        'Implementar planes de Manejo Integrado de Plagas y Enfermedades (MIPE)',
        'Ejecutar labores de cosecha, fermentación de cacao y poscosecha de calidad exportación',
        'Manejar suelos agrícolas mediante enmiendas orgánicas y bioinsumos',
      ],
      occupations: [
        'Administrador de fincas y plantaciones cacaoteras o citrícolas',
        'Técnico extensionista agrícola para federaciones (Fedecacao, Asohofrucol)',
        'Supervisor de campo en agroempresas de frutas y hortalizas',
        'Auditor interno en certificación de Buenas Prácticas Agrícolas (BPA)',
        'Gestor de biofábricas de fertilizantes y viveros certificados',
      ],
      fieldUnits: [
        'Plantación de Cacao Clonal (CCN-51, Fedecacao) en sistema agroforestal',
        'Huerto de Cítricos (Naranja Valencia, Limón Tahití, Mandarina)',
        'Sistema de Riego por Goteo y Microaspersión automatizado',
        'Beneficiadero y Marquesina Solar de Secado de Cacao',
        'Vivero de Propagación de Especies Frutales y Forestales Nativas',
      ],
    },
    {
      id: 'agroempresarial',
      name: 'Gestión Agroempresarial',
      title: 'Tecnólogo en Gestión Agroempresarial',
      duration: '27 Meses (Lectiva Interno + Productiva)',
      type: 'Tecnólogo Presencial · 100% Internado',
      snies: 'Registro Calificado SENA Regional Santander',
      summary: 'Convierte el campo en un negocio rentable y sostenible. Aprende a estructurar planes de agronegocios, calcular costos de producción, gestionar cadenas de valor, marketing agrícola y acceder a fuentes de financiación como el Fondo Emprender.',
      competencies: [
        'Formular y evaluar proyectos productivos agropecuarios con viabilidad financiera',
        'Determinar costos de producción y rentabilidad de cosechas y ciclos pecuarios',
        'Diseñar estrategias de comercialización directa y agregación de valor (transformación)',
        'Administrar el talento humano rural, la logística de insumos y el inventario de campo',
        'Gestionar la documentación para convocatorias de capital semilla (Fondo Emprender)',
      ],
      occupations: [
        'Gerente o administrador de agroempresas y asociaciones campesinas',
        'Coordinador de compras y logística en empresas agroindustriales',
        'Formulador de proyectos agropecuarios para fondos públicos y privados',
        'Asesor comercial de insumos y maquinaria agropecuaria',
        'Empresario creador de su propia microempresa rural financiada por el SENA',
      ],
      fieldUnits: [
        'Centro de Gestión Agroempresarial y Sala de Cómputo de la Sede',
        'Unidad de Costeo de las 130 Hectáreas de la Finca Aguas Calientes',
        'Punto de Transformación y Valor Agregado Agroindustrial',
        'Banco de Proyectos Productivos de los Aprendices Internos',
      ],
    },
  ];

  return (
    <section id="programas-tecnologos" className="py-16 sm:py-24 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Oferta Académica Oficial</span>
            <span aria-hidden="true">·</span>
            <span>130 Cupos Residenciales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Tres Tecnólogos para liderar el agro colombiano
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Formación tecnológica de nivel superior con titulación oficial del SENA, 100% gratuita, con prácticas reales todos los días en las 130 hectáreas de la Finca Aguas Calientes.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const isPecuaria = prog.id === 'pecuaria';
            const isAgricola = prog.id === 'agricola';
            const Icon = isPecuaria ? Beef : isAgricola ? Sprout : TrendingUp;

            return (
              <div
                key={prog.id}
                className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#39A900]/50 transition-all hover:shadow-lg group"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#39A900]/10 dark:bg-[#39A900]/20 text-[#39A900] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-800 px-2.5 py-1 rounded-md border border-stone-200 dark:border-stone-700">
                      Nivel Tecnólogo
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#39A900] transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-3 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 dark:text-stone-300">
                      <Clock className="w-3.5 h-3.5 text-[#39A900]" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>100% Internado (Alimentación + Hospedaje)</span>
                    </div>
                  </div>

                  {/* Highlights sample */}
                  <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                      Competencias clave:
                    </span>
                    <ul className="space-y-1.5">
                      {prog.competencies.slice(0, 3).map((comp, cIdx) => (
                        <li key={cIdx} className="text-xs text-stone-600 dark:text-stone-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39A900] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-[#39A900] hover:text-white dark:hover:bg-[#39A900] dark:hover:text-white border border-stone-200 dark:border-stone-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Ver Malla y Salidas Laborales</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Capacity Proof Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#39A900]/10 dark:bg-[#39A900]/15 border border-[#39A900]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d8700] dark:text-[#4cd906]">
              Capacidad Total Instalada
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
              130 Cupos de Aprendices Internos
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
              Distribuidos equitativamente entre los tres tecnólogos. Al egresar, los aprendices cuentan con homologación para ingeniería agronómica, zootecnia o administración de empresas con universidades en convenio.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('ingreso')}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white shadow-sm transition-colors"
            >
              Cómo Inscribirme
            </button>
          </div>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 dark:border-stone-800 p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-xs font-bold text-[#39A900] uppercase tracking-wider">
                  Detalles del Programa Tecnológico
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
                  {selectedProgram.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Descripción General
                </h4>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedProgram.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Unidades Productivas de Práctica en la Finca (130 Has):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.fieldUnits.map((unit, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800/60 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39A900] mt-1.5 shrink-0" />
                      <span>{unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Competencias a Desarrollar:
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.competencies.map((comp, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Perfil y Salidas Laborales:
                </h4>
                <ul className="space-y-1.5">
                  {selectedProgram.occupations.map((occ, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 flex items-start gap-2">
                      <span className="text-[#39A900] font-bold">✓</span>
                      <span>{occ}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onNavigate('ingreso');
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] rounded-xl"
              >
                Ver Proceso de Postulación
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
