/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UniqueInternshipNotice } from './components/UniqueInternshipNotice';
import { AdmissionProcedure } from './components/AdmissionProcedure';
import { CoexistenceRules } from './components/CoexistenceRules';
import { SenaCoexistenceCenters } from './components/SenaCoexistenceCenters';
import { ProgramsSection } from './components/ProgramsSection';
import { FarmAndCropsGallery } from './components/FarmAndCropsGallery';
import { ChocolateSchool } from './components/ChocolateSchool';
import { GeographicLocation } from './components/GeographicLocation';
import { ParentFamilyFAQ } from './components/ParentFamilyFAQ';
import { ManualInstructions } from './components/ManualInstructions';
import { Footer } from './components/Footer';
import { AdmissionQuizModal } from './components/AdmissionQuizModal';
import { ContactModal } from './components/ContactModal';
import { HelpCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sena_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [interestModalOpen, setInterestModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('sena_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('sena_theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigate = (tab: TabType) => {
    setActiveTab(tab);
    
    // Smooth scroll to target section if on page
    setTimeout(() => {
      let targetId = '';
      if (tab === 'ingreso') targetId = 'procedimiento-ingreso';
      else if (tab === 'convivencia') targetId = 'manual-convivencia-reglamento';
      else if (tab === 'centros') targetId = 'centros-convivencia-sena';
      else if (tab === 'programas') targetId = 'programas-tecnologos';
      else if (tab === 'finca') targetId = 'finca-cultivos';
      else if (tab === 'chocolateria') targetId = 'escuela-chocolateria';
      else if (tab === 'ubicacion') targetId = 'ubicacion-geografica';
      else if (tab === 'padres') targetId = 'faq-padres-aprendices';
      else if (tab === 'manual') targetId = 'manual-instrucciones-aguas-calientes';

      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200 overflow-x-hidden">
      
      {/* Top Banner Notice: 100% Internado Highlight */}
      <aside aria-label="Aviso institucional" className="bg-[#2c8400] text-white py-2 px-4 text-xs font-semibold text-center border-b border-emerald-700/50 flex items-center justify-center gap-2">
        <span className="font-bold">SENA Santander · Sede Aguas Calientes:</span>
        <span className="hidden sm:inline">Único internado del SENA en el oriente del país · 100% de los aprendices son internos (130 cupos).</span>
        <button
          onClick={() => handleNavigate('convivencia')}
          className="underline hover:text-emerald-100 ml-1 text-[11px]"
        >
          Conocer Manual de Convivencia
        </button>
      </aside>

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        isDark={isDark}
        toggleDark={toggleDark}
        onOpenInterestModal={() => setInterestModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onOpenQuiz={() => setQuizModalOpen(true)}
        />

        {/* Unique Internship Core Proposition */}
        <UniqueInternshipNotice
          onNavigate={handleNavigate}
        />

        {/* Procedimiento de Ingreso (Explicitly requested in navigation) */}
        <AdmissionProcedure
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* Cumplimiento de Manual de Convivencia y Reglamento (Explicitly requested in navigation) */}
        <CoexistenceRules
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* Centros de Convivencia SENA (Red Nacional de Centros con Internado) */}
        <SenaCoexistenceCenters
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* 3 Programas de Tecnólogo (Pecuaria, Agrícola, Agroempresarial - 130 Cupos) */}
        <ProgramsSection
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* La Finca Aguas Calientes (130 Has) y Fotos de Cultivos Productivos */}
        <FarmAndCropsGallery
          onNavigate={handleNavigate}
        />

        {/* Escuela Latinoamericana de Chocolatería (Guatiguara - Piedecuesta) */}
        <ChocolateSchool
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* Ubicación Geográfica: Km 4 adelante de El Playón, Santander */}
        <GeographicLocation
          onNavigate={handleNavigate}
        />

        {/* Preguntas Frecuentes para Padres de Familia y Aspirantes */}
        <ParentFamilyFAQ
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

        {/* Manual de Instrucciones Aguas Calientes */}
        <ManualInstructions
          onNavigate={handleNavigate}
          onOpenInterestModal={() => setInterestModalOpen(true)}
        />

      </main>

      {/* Quiet Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInterestModal={() => setInterestModalOpen(true)}
      />

      {/* Floating Action Button for Parents and Aspirants */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setQuizModalOpen(true)}
          className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl text-xs font-bold flex items-center gap-2 hover:border-[#39A900] transition-all"
          title="Autodiagnóstico: ¿Tengo el perfil para el internado?"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#39A900]" />
          <span className="hidden sm:inline">Test de Vocación</span>
        </button>

        <button
          onClick={() => setInterestModalOpen(true)}
          className="bg-[#39A900] hover:bg-[#2e8800] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl text-xs font-bold flex items-center gap-2 transition-all active:scale-95"
          title="Resolver dudas o registrar interés"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Atención al Aspirante</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <AdmissionQuizModal
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
        onNavigate={handleNavigate}
        onOpenInterestModal={() => {
          setQuizModalOpen(false);
          setInterestModalOpen(true);
        }}
      />

      <ContactModal
        isOpen={interestModalOpen}
        onClose={() => setInterestModalOpen(false)}
      />

    </div>
  );
}
