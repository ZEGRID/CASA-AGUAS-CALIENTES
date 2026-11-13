import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, User, Mail, MapPin, BookOpen, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'aspirante' as 'aspirante' | 'padre',
    phone: '',
    email: '',
    city: '',
    program: 'pecuaria',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Por favor diligencia nombre, celular y correo electrónico.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setErrorMsg('');
    const randomTicket = 'SENA-AC-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      role: 'aspirante',
      phone: '',
      email: '',
      city: '',
      program: 'pecuaria',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 rounded-xl"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-6">
              <span className="text-xs font-bold text-[#39A900] uppercase tracking-wider">
                Orientación y Registro de Interés
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-1">
                Postúlate a la Sede Aguas Calientes
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Para futuros aprendices y padres de familia. Recibe orientación sobre la próxima convocatoria del internado en El Playón, Santander.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Role Selector: Aspirante vs Padre */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                  ¿Quién realiza la solicitud?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'aspirante' })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      formData.role === 'aspirante'
                        ? 'bg-[#39A900] text-white border-[#39A900]'
                        : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    Soy Aspirante / Estudiante
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, role: 'padre' })}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                      formData.role === 'padre'
                        ? 'bg-[#39A900] text-white border-[#39A900]'
                        : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    Soy Padre / Madre / Acudiente
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza Suárez"
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
                  />
                </div>
              </div>

              {/* Phone & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 312 456 7890"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@ejemplo.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
                    />
                  </div>
                </div>
              </div>

              {/* Municipality / Origin */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Municipio de Residencia
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ej. El Playón, Bucaramanga, San Alberto, Rionegro..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
                  />
                </div>
              </div>

              {/* Program Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Programa Tecnológico de Interés (130 cupos en internado)
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40 appearance-none"
                  >
                    <option value="pecuaria">Tecnólogo en Gestión de la Producción Pecuaria</option>
                    <option value="agricola">Tecnólogo en Gestión de la Producción Agrícola</option>
                    <option value="agroempresarial">Tecnólogo en Gestión Agroempresarial</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-stone-700 dark:text-stone-300 mb-1">
                  Pregunta o Inquietud sobre el Internado (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí si tienes dudas sobre fechas, dormitorios, visitas o requisitos..."
                  className="w-full p-2.5 text-xs rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar Solicitud de Información</span>
              </button>

              <p className="text-[10px] text-stone-500 text-center">
                El SENA garantiza el tratamiento confidencial de tus datos personales conforme a la Ley 1581 de 2012.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-[#39A900] flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono font-bold text-[#39A900] bg-[#39A900]/10 px-3 py-1 rounded-full">
              Radicado No: {ticketNumber}
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 mt-3">
              ¡Solicitud Registrada con Éxito!
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed max-w-sm mx-auto">
              Gracias, <strong>{formData.name}</strong>. Hemos registrado tu interés para la Sede Aguas Calientes (El Playón, Santander). Nuestro equipo de Bienestar al Aprendiz e Ingreso te enviará por WhatsApp y correo las alertas del calendario oficial de inscripción en Sofia Plus.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-left text-xs text-stone-600 dark:text-stone-300 space-y-1">
              <div><strong>Rol:</strong> {formData.role === 'aspirante' ? 'Aspirante' : 'Padre / Acudiente'}</div>
              <div><strong>Contacto:</strong> {formData.phone} · {formData.email}</div>
              <div><strong>Programa:</strong> {formData.program === 'pecuaria' ? 'Producción Pecuaria' : formData.program === 'agricola' ? 'Producción Agrícola' : 'Gestión Agroempresarial'}</div>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 rounded-xl text-xs font-bold text-white bg-[#39A900] hover:bg-[#2e8800] transition-colors"
            >
              Finalizar y Volver al Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
