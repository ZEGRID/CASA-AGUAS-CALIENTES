import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';
import { SenaLogo } from './SenaLogo';
import { TabType } from '../types';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInterestModal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Institutional Brand Lockup */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <SenaLogo variant="symbol" size="md" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">SENA Aguas Calientes</span>
                <span className="text-xs text-stone-400">Regional Santander</span>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              Único internado del SENA en el oriente del país y único con 100% de aprendices internos. 130 hectáreas dedicadas a la formación agropecuaria integral.
            </p>

            <div className="pt-2 text-xs text-stone-500">
              Servicio Nacional de Aprendizaje SENA · República de Colombia
            </div>
          </div>

          {/* Col 2: Accesos Directos Requeridos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegación Institucional
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#4cd906] transition-colors"
                >
                  Inicio y Conoce la Sede
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ingreso')}
                  className="hover:text-[#4cd906] transition-colors font-semibold text-emerald-400"
                >
                  Procedimiento de Ingreso (Paso a Paso)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('convivencia')}
                  className="hover:text-[#4cd906] transition-colors font-semibold text-emerald-400"
                >
                  Manual de Convivencia y Reglamento
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('centros')}
                  className="hover:text-[#4cd906] transition-colors font-semibold text-emerald-300"
                >
                  Centros de Convivencia SENA (Red Nacional)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('chocolateria')}
                  className="hover:text-[#4cd906] transition-colors font-semibold text-amber-400"
                >
                  Escuela Latinoamericana de Chocolatería
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('manual')}
                  className="hover:text-[#4cd906] transition-colors font-semibold text-amber-300"
                >
                  Manual de Instrucciones Aguas Calientes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programas')}
                  className="hover:text-[#4cd906] transition-colors"
                >
                  Programas de Tecnólogo (130 Cupos)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('finca')}
                  className="hover:text-[#4cd906] transition-colors"
                >
                  La Finca y Cultivos Productivos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ubicacion')}
                  className="hover:text-[#4cd906] transition-colors"
                >
                  Ubicación Geográfica (Km 4 El Playón)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programas Tecnológicos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Programas Tecnológicos
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• Tecnólogo en Gestión de la Producción Pecuaria</li>
              <li>• Tecnólogo en Gestión de la Producción Agrícola</li>
              <li>• Tecnólogo en Gestión Agroempresarial</li>
              <li className="pt-2 text-stone-500 text-[11px]">
                Régimen: 100% Presencial Interno
              </li>
              <li className="text-stone-500 text-[11px]">
                Costo: Gratuito / Público
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto y Ubicación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sede Aguas Calientes y CASA
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                <span>
                  <strong>Subsede Aguas Calientes:</strong> Km 48 de la Vía al Mar desde Bucaramanga (Km 4 adelante de El Playón, Santander).
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sede Administrativa CASA:</strong> Piedecuesta (Santander), Vereda Guatiguara.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#39A900] shrink-0" />
                <span>Centro de Convivencia e Internado Agropecuario</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenInterestModal}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white text-center transition-colors"
                >
                  Solicitar Información / Dudas
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} SENA Regional Santander · Sede Aguas Calientes. Prototipo informativo para la comunidad general.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Acuerdo 007 de 2012</span>
            <span aria-hidden="true">·</span>
            <span>Manual de Convivencia Internado</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
