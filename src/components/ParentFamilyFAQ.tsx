import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  Utensils, 
  PhoneCall,
  Clock
} from 'lucide-react';
import { TabType } from '../types';

interface ParentFamilyFAQProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const ParentFamilyFAQ: React.FC<ParentFamilyFAQProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Tiene algún costo el internado, la alimentación o la formación en Aguas Calientes?',
      a: 'Absolutamente NINGUNO. El SENA es una entidad pública del Estado colombiano. La matrícula, los dormitorios, el servicio de lavandería de dotación, y la alimentación completa (desayuno, almuerzo, cena y refrigerios diarios) son 100% gratuitos para todos los 130 aprendices seleccionados.',
      category: 'Costos y Gratuidad',
    },
    {
      q: '¿Cómo garantizan la seguridad y el cuidado de los aprendices en los dormitorios?',
      a: 'La sede cuenta con vigilancia privada profesional las 24 horas del día en accesos y linderos. Los pabellones residenciales están estrictamente separados por género (femenino y masculino), con supervisores de internado y el equipo de Bienestar al Aprendiz. Existe toque de queda nocturno y apagado de luces a las 10:00 p.m.',
      category: 'Seguridad y Bienestar',
    },
    {
      q: '¿Los aprendices pueden comunicarse con sus familias y recibir visitas?',
      a: 'Sí. Todas las noches entre las 7:00 p.m. y las 9:30 p.m. los aprendices tienen tiempo libre para comunicarse con sus familias por teléfono celular o conexión Wi-Fi de la sede. Además, se programan jornadas mensuales de integración familiar donde los padres pueden visitar la finca y almorzar con sus hijos.',
      category: 'Familia y Comunicación',
    },
    {
      q: '¿Pueden salir de la sede los fines de semana?',
      a: 'Sí. Aunque la formación es en régimen 100% interno, los fines de semana que no correspondan a turnos de guardia pecuaria o riego, los aprendices pueden viajar a sus hogares siempre y cuando cuenten con la autorización escrita y firmada de sus padres o acudientes registrados en la matrícula.',
      category: 'Permisos y Salidas',
    },
    {
      q: '¿Qué ocurre en caso de una urgencia médica o enfermedad?',
      a: 'La Sede Aguas Calientes dispone de enfermería para atención primaria de primeros auxilios y convenios de atención con el Hospital de El Playón (a tan solo 4 km) y centros de tercer nivel en Bucaramanga. Todos los aprendices cuentan con cobertura de seguro estudiantil y afiliación a su EPS o Sisbén.',
      category: 'Salud y Primeros Auxilios',
    },
    {
      q: '¿Qué título obtienen y qué oportunidades tienen al graduarse?',
      a: 'Obtienen el título oficial de Tecnólogo del SENA. Gracias a la rigurosa experiencia práctica en las 130 hectáreas de la finca, los egresados tienen altísima empleabilidad en empresas agrícolas, ganaderas, gremios como Fedecacao y Fedegán, o pueden postularse al Fondo Emprender para recibir capital semilla de su propio agronegocio.',
      category: 'Futuro Laboral',
    },
  ];

  return (
    <section id="faq-padres-aprendices" className="py-16 sm:py-24 bg-stone-100/60 dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Tranquilidad y Confianza Familiar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight text-balance">
            Preguntas Frecuentes para Padres de Familia y Aspirantes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Resolvemos las inquietudes más comunes sobre la vida residencial, la convivencia, la alimentación y la seguridad en el internado SENA Aguas Calientes.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-[#39A900] bg-[#39A900]/10 px-2 py-1 rounded-md shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#39A900]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-stone-100 dark:border-stone-800/80 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed pl-9">
                      {faq.a}
                    </p>
                    <div className="mt-3 pl-9">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded-md">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Contact Box for Parents */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#39A900]/10 text-[#39A900] flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Línea de Atención a Padres de Familia
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Comunícate con el equipo de Bienestar al Aprendiz de la Sede Aguas Calientes (Santander).
              </p>
            </div>
          </div>

          <button
            onClick={onOpenInterestModal}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#39A900] text-white hover:bg-[#2e8800] transition-colors whitespace-nowrap shrink-0"
          >
            Contactar al Centro
          </button>
        </div>

      </div>
    </section>
  );
};
