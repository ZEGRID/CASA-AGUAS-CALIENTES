import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck, UserCheck, Building2, BookOpen, Sparkles } from 'lucide-react';
import { SenaLogo } from './SenaLogo';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isDark: boolean;
  toggleDark: () => void;
  onOpenInterestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  toggleDark,
  onOpenInterestModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon?: React.ReactNode }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'ingreso', label: 'Procedimiento de Ingreso' },
    { id: 'convivencia', label: 'Manual de Convivencia y Reglamento' },
    { id: 'centros', label: 'Centros de Convivencia SENA' },
    { id: 'programas', label: 'Programas Tecnológicos' },
    { id: 'finca', label: 'La Finca y Cultivos' },
    { id: 'ubicacion', label: 'Ubicación Geográfica' },
    { id: 'chocolateria', label: 'Escuela Latinoamericana de Chocolatería' },
    { id: 'manual', label: 'Manual de Instrucciones Aguas Calientes' },
  ];

  const handleTabClick = (id: TabType) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4">
          
          {/* Zone 1: Brand Title with 50% larger official SENA logo */}
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center gap-3.5 text-left focus:outline-none group shrink-0"
            aria-label="Ir a inicio SENA Aguas Calientes"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#39A900]/10 dark:bg-[#39A900]/20 flex items-center justify-center border border-[#39A900]/25 transition-transform group-hover:scale-105 shadow-sm p-1">
              <SenaLogo variant="symbol" size="sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-[#39A900] transition-colors whitespace-nowrap">
                SENA Aguas Calientes
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium whitespace-nowrap hidden sm:inline">
                Subsede CASA (Piedecuesta - Guatiguara) · Km 48 Vía al Mar
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean text hover states) */}
          <nav className="hidden 2xl:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const isHighlight = item.id === 'ingreso' || item.id === 'convivencia';

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all text-xs font-semibold whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#39A900]/10 text-[#2c8400] dark:bg-[#39A900]/20 dark:text-[#4cd906] font-bold'
                      : isHighlight
                      ? 'text-stone-700 dark:text-stone-300 hover:text-[#39A900] dark:hover:text-[#4cd906] hover:bg-stone-100 dark:hover:bg-stone-800'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/70 dark:hover:bg-stone-800/70'
                  }`}
                >
                  {item.id === 'convivencia' && <ShieldCheck className="w-3.5 h-3.5 text-[#39A900]" />}
                  {item.id === 'ingreso' && <UserCheck className="w-3.5 h-3.5 text-[#39A900]" />}
                  {item.id === 'centros' && <Building2 className="w-3.5 h-3.5 text-[#39A900]" />}
                  {item.id === 'chocolateria' && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                  {item.id === 'manual' && <BookOpen className="w-3.5 h-3.5 text-[#39A900]" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Símbolo oficial del SENA en la parte superior derecha + Cambio claro a oscuro + Acción */}
          <div className="flex items-center gap-3 shrink-0">
            {/* SENA Official Symbol Emblem (increased in size by 50% as requested) */}
            <div 
              className="flex items-center gap-3 pl-2.5 pr-4 py-2 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 shadow-sm"
              title="Símbolo Oficial del SENA Colombia"
            >
              <SenaLogo variant="symbol" size="sm" />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black uppercase tracking-wider text-[#39A900] dark:text-[#4cd906]">
                  SENA
                </span>
                <span className="text-[10px] text-stone-500 font-medium">Oficial</span>
              </div>
            </div>

            {/* Dark / Light Mode Toggle Button (as explicitly requested) */}
            <button
              onClick={toggleDark}
              type="button"
              className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#39A900] dark:hover:text-[#4cd906] hover:border-[#39A900]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#39A900]/30"
              title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-stone-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenInterestModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Postularme / Dudas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#39A900]/15 text-[#2c8400] dark:text-[#4cd906] font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.id === 'convivencia' && <ShieldCheck className="w-4 h-4 text-[#39A900]" />}
                  {item.id === 'ingreso' && <UserCheck className="w-4 h-4 text-[#39A900]" />}
                  {item.id === 'centros' && <Building2 className="w-4 h-4 text-[#39A900]" />}
                  {item.id === 'chocolateria' && <Sparkles className="w-4 h-4 text-amber-500" />}
                  {item.id === 'manual' && <BookOpen className="w-4 h-4 text-[#39A900]" />}
                  <span>{item.label}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#39A900]" />}
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterestModal();
              }}
              className="w-full py-3 text-center text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] rounded-xl flex items-center justify-center gap-2"
            >
              <span>Postularme / Solicitar Información</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
