import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Compass, ArrowRight, RotateCcw } from 'lucide-react';
import { TabType } from '../types';

interface AdmissionQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const AdmissionQuizModal: React.FC<AdmissionQuizModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenInterestModal,
}) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      q: '1. ¿Cuál es tu situación académica actual?',
      options: [
        { text: 'Soy Bachiller graduado con pruebas Saber 11 / ICFES presentadas', score: 3 },
        { text: 'Estoy cursando grado 11 y me graduaré en las próximas semanas', score: 2 },
        { text: 'Aún no he culminado grado 11', score: 0 },
      ],
    },
    {
      q: '2. ¿Cómo te sientes respecto a vivir en un internado campestre (100% interno)?',
      options: [
        { text: '¡Me encanta! Me entusiasma convivir con compañeros, aprender disciplina y estar en la naturaleza', score: 3 },
        { text: 'Es un reto nuevo, pero estoy dispuesto a adaptarme con el apoyo de mi familia', score: 2 },
        { text: 'No me gusta estar lejos de casa ni seguir horarios estrictos', score: 0 },
      ],
    },
    {
      q: '3. ¿Qué área de formación técnica te apasiona más?',
      options: [
        { text: 'Ganadería bovina, ordeño, bienestar animal y nutrición pecuaria', prog: 'pecuaria', score: 3 },
        { text: 'Cultivos de cacao, cítricos, fertirriego y manejo agroecológico', prog: 'agricola', score: 3 },
        { text: 'Costos de fincas, agronegocios, comercialización y proyectos rurales', prog: 'agroempresarial', score: 3 },
      ],
    },
    {
      q: '4. ¿Estás dispuesto a cumplir el Reglamento del Aprendiz y el Manual de Convivencia?',
      options: [
        { text: 'Totalmente de acuerdo: orden en dormitorios, respeto y cero sustancias prohibidas', score: 3 },
        { text: 'Sí, entiendo que la sana convivencia es clave para el bienestar de todos', score: 3 },
        { text: 'Tengo reservas respecto a los horarios de silencio y permisos de salida', score: 1 },
      ],
    },
  ];

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setCompleted(true);
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const isHighFit = totalScore >= 9;

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 rounded-xl"
          aria-label="Cerrar test"
        >
          <X className="w-5 h-5" />
        </button>

        {!completed ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#39A900] uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              <span>Autodiagnóstico Vocacional</span>
              <span aria-hidden="true">·</span>
              <span>Pregunta {currentQ + 1} de {questions.length}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              {questions[currentQ].q}
            </h3>

            <div className="space-y-3">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 hover:bg-[#39A900]/10 hover:border-[#39A900] dark:hover:bg-[#39A900]/20 text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-medium transition-all flex items-center justify-between group"
                >
                  <span className="pr-3 leading-relaxed">{opt.text}</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#39A900] shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
              <span>Progreso: {Math.round(((currentQ) / questions.length) * 100)}%</span>
              <button
                onClick={handleReset}
                className="hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reiniciar
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-[#39A900] flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100">
              {isHighFit ? '¡Excelente perfil para Aguas Calientes!' : 'Perfil en desarrollo'}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed max-w-sm mx-auto">
              {isHighFit
                ? 'Cumples con los requisitos fundamentales de vocación agropecuaria, disposición para la vida en internado (100% residencial) y compromiso con la convivencia comunitaria.'
                : 'La vida en internado exige mucha disciplina comunitaria. Te invitamos a leer con tus padres el Manual de Convivencia y el Procedimiento de Ingreso antes de postularte.'}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenInterestModal();
                }}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors"
              >
                Registrar Interés para Convocatoria
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('ingreso');
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 transition-colors"
              >
                Ver Procedimiento de Ingreso Detallado
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
