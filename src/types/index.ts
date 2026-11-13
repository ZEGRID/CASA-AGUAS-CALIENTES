export type TabType = 
  | 'inicio' 
  | 'ingreso' 
  | 'convivencia' 
  | 'centros'
  | 'programas' 
  | 'finca' 
  | 'ubicacion' 
  | 'padres'
  | 'manual'
  | 'chocolateria';

export interface SenaCenterInfo {
  id: string;
  name: string;
  regional: string;
  municipality: string;
  department: string;
  locationDetails: string;
  regime: '100% Internado Obligatorio' | 'Internado Mixto (Cupos Focalizados)';
  boardingCapacity: string;
  totalLandArea: string;
  programs: string[];
  services: string[];
  facilities: string[];
  description: string;
  photoUrl: string;
  isAguasCalientes?: boolean;
  zone: 'Oriente' | 'Andina' | 'Caribe' | 'Pacífica' | 'Orinoquía' | 'Amazonía';
  administrativeNote?: string;
}

export interface ProgramInfo {
  id: string;
  name: string;
  title: string;
  duration: string;
  type: string;
  snies?: string;
  summary: string;
  competencies: string[];
  occupations: string[];
  fieldUnits: string[];
}

export interface ProductiveUnit {
  id: string;
  name: string;
  category: 'agricola' | 'pecuaria' | 'infraestructura' | 'ambiental';
  area: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface RuleCategory {
  id: string;
  title: string;
  source: 'Reglamento del Aprendiz (Acuerdo 007)' | 'Manual de Convivencia Internado';
  color: string;
  summary: string;
  rules: {
    title: string;
    description: string;
    importance: 'Fundamental' | 'Obligatorio' | 'Preventivo';
  }[];
}
