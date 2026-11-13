import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  Bed, 
  Utensils, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal, 
  ExternalLink, 
  Sparkles, 
  LandPlot, 
  Info,
  ChevronRight,
  X
} from 'lucide-react';
import { TabType, SenaCenterInfo } from '../types';

// Authentic images: Aguas Calientes from uploaded user photo; others from high-fidelity generated documentary captures
const senaGranjaEspinal = '/src/assets/images/sena_granja_espinal_1794489591011.jpg';
const senaGairaCampus = '/src/assets/images/sena_gaira_campus_1794489609621.jpg';
const senaCbcCesar = '/src/assets/images/sena_cbc_cesar_1794489626477.jpg';
const senaAngosturaHuila = '/src/assets/images/sena_angostura_huila_1794489641816.jpg';
const senaSaladaAntioquia = '/src/assets/images/sena_salada_antioquia_1794489669471.jpg';
const senaCbaMosquera = '/src/assets/images/sena_cba_mosquera_1794489686301.jpg';
const senaBugaCampus = '/src/assets/images/sena_buga_campus_1794491963684.jpg';
const senaPorvenirCordoba = '/src/assets/images/sena_porvenir_cordoba_1794489728757.jpg';
const senaLopeNarino = '/src/assets/images/sena_lope_narino_1794491697006.jpg';
const senaHachonMeta = '/src/assets/images/sena_hachon_meta_1794492476078.jpg';
const senaMineroBoyaca = '/src/assets/images/sena_minero_boyaca_1794499454045.jpg';
const senaCaenaGuainia = '/src/assets/images/sena_caena_guainia_1794499470042.jpg';
const senaAguasCalientesEntrance = '/assets/aistudio/aguas_calientes_1_eb15b122.jpeg';

export const NATIONAL_COEXISTENCE_CENTERS: SenaCenterInfo[] = [
  {
    id: 'aguas-calientes',
    name: 'Sede Aguas Calientes · Centro de Atención al Sector Agropecuario (CASA)',
    regional: 'Regional Santander',
    municipality: 'El Playón',
    department: 'Santander',
    locationDetails: 'Km 48 de la Vía al Mar desde Bucaramanga · Km 4 adelante del casco urbano de El Playón',
    administrativeNote: 'Sede Administrativa Principal: CASA Piedecuesta (Santander), Vereda Guatiguara',
    regime: '100% Internado Obligatorio',
    boardingCapacity: '130 aprendices internos (100% de la matrícula total)',
    totalLandArea: '130 Hectáreas productivas',
    zone: 'Oriente',
    isAguasCalientes: true,
    description: 'La Sede Aguas Calientes posee una distinción única en toda Colombia: es el único centro de formación del SENA donde el 100% de los aprendices son internos residenciales, y el único internado del SENA en todo el oriente del país. En sus 130 hectáreas los aprendices viven, estudian y producen simultáneamente bajo el Manual de Convivencia y el Reglamento del Aprendiz.',
    photoUrl: senaAguasCalientesEntrance,
    programs: [
      'Tecnólogo en Gestión de la Producción Pecuaria',
      'Tecnólogo en Gestión de la Producción Agrícola',
      'Tecnólogo en Gestión Agroempresarial'
    ],
    services: [
      'Alojamiento integral dividido estrictamente por pabellón femenino y masculino',
      'Minuta nutricional balanceada (Desayuno, Almuerzo, Cena)',
      'Lavandería comunitaria y dotación de cama/casillero personal',
      'Atención médica básica, primeros auxilios y psicología de Bienestar',
      'Polideportivo, gimnasio, quiosco comunal e internet institucional',
      'Monitoreo permanente 24/7 y circuito de seguridad'
    ],
    facilities: [
      'Hato ganadero bovino doble propósito con ordeño mecánico matutino (4:00 AM)',
      'Establo porcícola y galpón avícola de postura y engorde',
      'Estanques de acuicultura y piscicultura continental',
      'Plantación de Cacao bajo sombra y cítricos (sectores La Loma y Camellones)',
      'Aulas bioclimáticas teóricas, biblioteca técnica y sala de sistemas'
    ]
  },
  {
    id: 'la-granja-espinal',
    name: 'Centro Agropecuario "La Granja"',
    regional: 'Regional Tolima',
    municipality: 'El Espinal',
    department: 'Tolima',
    locationDetails: 'Km 5 Vía Espinal - Ibagué',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '200 cupos de internado para aprendices rurales',
    totalLandArea: '138 Hectáreas',
    zone: 'Andina',
    description: 'Emblemático centro agropecuario del Tolima grande. Ofrece internado y casino a aprendices procedentes de zonas rurales apartadas del Tolima, Huila y Cundinamarca, combinando vida residencial con producción agropecuaria tecnificada.',
    photoUrl: senaGranjaEspinal,
    programs: [
      'Tecnólogo en Producción Agrícola',
      'Tecnólogo en Producción Pecuaria',
      'Tecnólogo en Mecanización Agrícola',
      'Tecnólogo en Procesamiento de Alimentos'
    ],
    services: [
      'Bloques de dormitorios masculinos y femeninos con vigilancia',
      'Comedor universitario con tres comidas diarias durante periodos académicos',
      'Acompañamiento por profesionales de Bienestar al Aprendiz',
      'Campos de fútbol, voleibol y áreas de recreación'
    ],
    facilities: [
      'Planta didáctica agroindustrial de lácteos y cárnicos',
      'Unidades de porcicultura, apicultura y avicultura',
      'Parcelas tecnificadas de arroz y frutales tropicales',
      'Laboratorios de biotecnología vegetal y entomología'
    ]
  },
  {
    id: 'gaira-magdalena',
    name: 'Centro Acuícola y Agroindustrial de Gaira',
    regional: 'Regional Magdalena',
    municipality: 'Santa Marta',
    department: 'Magdalena',
    locationDetails: 'Sector Gaira, Carretera Troncal del Caribe hacia El Rodadero',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '120 cupos de internado',
    totalLandArea: '35 Hectáreas marino-costeras',
    zone: 'Caribe',
    description: 'Centro insignia del Caribe colombiano especializado en piscicultura, maricultura y agroindustria costera. Su internado acoge a aprendices de zonas pesqueras vulnerables del Magdalena, La Guajira y Sucre.',
    photoUrl: senaGairaCampus,
    programs: [
      'Tecnólogo en Acuicultura',
      'Tecnólogo en Procesamiento de Pescados y Mariscos',
      'Tecnólogo en Gestión Ambiental Costera',
      'Tecnólogo en Producción Agropecuaria Ecológica'
    ],
    services: [
      'Habitaciones compartidas climatizadas con aire acondicionado',
      'Alimentación nutricional completa (desayuno, almuerzo, cena)',
      'Salas de lectura, biblioteca marina e internet institucional',
      'Kits de descanso y zonas de aseo personal'
    ],
    facilities: [
      'Batería de piscinas y estanques de acuicultura de tilapia y camarón',
      'Sistemas de aireación y bombeo de agua marina y dulce',
      'Talleres náuticos y laboratorios de patología de organismos acuáticos',
      'Unidad de transformación y fileteado con cadena de frío'
    ]
  },
  {
    id: 'cbc-valledupar',
    name: 'Centro Biotecnológico del Caribe (CBC)',
    regional: 'Regional Cesar',
    municipality: 'Valledupar',
    department: 'Cesar',
    locationDetails: 'Km 7 Vía Valledupar - La Paz',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '150 cupos residenciales de internado',
    totalLandArea: '110 Hectáreas',
    zone: 'Caribe',
    description: 'Pionero en biotecnología aplicada a la ganadería de trópico bajo y cultivos perennes. Su Centro de Convivencia beneficia a jóvenes de veredas lejanas de la Serranía del Perijá y estribaciones de la Sierra Nevada de Santa Marta.',
    photoUrl: senaCbcCesar,
    programs: [
      'Tecnólogo en Biotecnología Vegetal',
      'Tecnólogo en Producción Ganadera Sostenible',
      'Tecnólogo en Riego, Drenaje y Manejo de Suelos',
      'Tecnólogo en Agroindustria de la Leche'
    ],
    services: [
      'Dormitorios acondicionados con camas, lockers y áreas de estudio',
      'Servicio de alimentación en restaurante institucional',
      'Talleres de liderazgo, deporte y desarrollo humano',
      'Acceso a canchas polideportivas y zonas verdes de esparcimiento'
    ],
    facilities: [
      'Laboratorio de transferencia de embriones y reproducción bovina',
      'Hato lechero en pastoreo rotacional intensivo con silvopastoreo',
      'Viveros de propagación de clones maderables y forrajeros',
      'Planta piloto de quesería y derivados lácteos del Cesar'
    ]
  },
  {
    id: 'angostura-huila',
    name: 'Centro de Formación Agroindustrial La Angostura',
    regional: 'Regional Huila',
    municipality: 'Campoalegre',
    department: 'Huila',
    locationDetails: 'Km 3 Vía Campoalegre - Hobo, Valle del Río Magdalena',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '110 cupos en internado',
    totalLandArea: '85 Hectáreas',
    zone: 'Andina',
    description: 'Ubicado en la capital arrocera del Huila. Su internado brinda alojamiento y alimentación a jóvenes de comunidades campesinas del centro y sur del Huila, formándolos en agroindustria de cereales y piscicultura intensiva.',
    photoUrl: senaAngosturaHuila,
    programs: [
      'Tecnólogo en Agroindustria Arrocera y Granos',
      'Tecnólogo en Producción Acuícola Continental',
      'Tecnólogo en Mecanización y Riego Agrícola',
      'Tecnólogo en Gestión de Empresas Agropecuarias'
    ],
    services: [
      'Pabellones de descanso organizados por género',
      'Comedor comunitario con menú balanceado certificado',
      'Asistencia médica primaria y actividades deportivas nocturnas',
      'Salas de informática con acceso libre a plataformas educativas'
    ],
    facilities: [
      'Complejo de estanques para cultivo de mojarra roja y cachama',
      'Molino didáctico y laboratorio de calidad de granos de arroz',
      'Parque de maquinaria agrícola y tractores de instrucción',
      'Establo de porcicultura y lombricultura'
    ]
  },
  {
    id: 'la-salada-antioquia',
    name: 'Centro de los Recursos Naturales Renovables La Salada',
    regional: 'Regional Antioquia',
    municipality: 'Caldas',
    department: 'Antioquia',
    locationDetails: 'Vereda La Salada, Caldas (Sur del Valle de Aburrá)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '140 cupos de internado',
    totalLandArea: '92 Hectáreas de ladera andina',
    zone: 'Andina',
    description: 'Enclavado en las montañas cafeteras antioqueñas, este centro cuenta con internado para aprendices de las nueve subregiones de Antioquia. Es referente nacional en gestión ambiental, agroecología y caficultura de alta precisión.',
    photoUrl: senaSaladaAntioquia,
    programs: [
      'Tecnólogo en Gestión de Recursos Naturales',
      'Tecnólogo en Producción Agroecológica',
      'Tecnólogo en Silvicultura y Aprovechamiento Forestal',
      'Tecnólogo en Caficultura Sostenible y Barismo'
    ],
    services: [
      'Módulos residenciales campestres con dormitorios equipados',
      'Casino estudiantil con tres ingestas diarias supervisadas',
      'Senderos ecológicos, zonas de calistenia y microfútbol',
      'Apoyo psicosocial continuo y monitores de convivencia'
    ],
    facilities: [
      'Beneficiadero ecológico de café con tratamiento de aguas mieles',
      'Vivero forestal de especies nativas andinas',
      'Módulos de apicultura y polinización controlada',
      'Aulas abiertas ambientales y laboratorios de aguas'
    ]
  },
  {
    id: 'cba-mosquera',
    name: 'Centro de Biotecnología Agropecuaria (CBA)',
    regional: 'Regional Cundinamarca',
    municipality: 'Mosquera',
    department: 'Cundinamarca',
    locationDetails: 'Km 7 Vía Panamericana Bogotá - Mosquera',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '160 cupos de internado',
    totalLandArea: '70 Hectáreas en la Sabana',
    zone: 'Andina',
    description: 'Centro de alta tecnología para la sabana de Bogotá y el altiplano cundiboyacense. Su internado aloja aprendices de municipios distantes que se especializan en floricultura de exportación, hortalizas y biotecnología alimentaria.',
    photoUrl: senaCbaMosquera,
    programs: [
      'Tecnólogo en Producción de Flores y Follajes de Exportación',
      'Tecnólogo en Horticultura Protegida Bajo Invernadero',
      'Tecnólogo en Biotecnología Agropecuaria',
      'Tecnólogo en Procesamiento de Alimentos'
    ],
    services: [
      'Bloques residenciales independientes dotados con casilleros',
      'Casino escolar con minutas nutricionales completas',
      'Conexión Wi-Fi formativa en dormitorios y áreas comunales',
      'Atención médica, brigadas de salud y fomento cultural'
    ],
    facilities: [
      'Batería de invernaderos inteligentes con fertirriego automatizado',
      'Laboratorio de cultivo de tejidos vegetales in vitro',
      'Planta piloto de lácteos y cárnicos de la Sabana',
      'Hato bovino lechero Holstein de alta producción'
    ]
  },
  {
    id: 'buga-valle',
    name: 'Centro Agropecuario de Buga (CAB)',
    regional: 'Regional Valle',
    municipality: 'Guadalajara de Buga',
    department: 'Valle del Cauca',
    locationDetails: 'Km 1 Carretera a La Habana / Vereda Quebradaseca (Guadalajara de Buga, Valle)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '80 cupos de internado residencial en pabellones',
    totalLandArea: '42 Hectáreas de campos agrícolas y pecuarios',
    zone: 'Pacífica',
    description: 'Histórico centro de formación agropecuaria del Valle del Cauca con tradición de internado y Centro de Convivencia para aprendices rurales procedentes de municipios de cordillera, valles interandinos y zonas dispersas del departamento, formándolos en agroindustria de la caña, frutales, ganadería y producción sostenible.',
    photoUrl: senaBugaCampus,
    programs: [
      'Tecnólogo en Gestión de Empresas Agropecuarias',
      'Tecnólogo en Producción Agrícola Tecnificada',
      'Tecnólogo en Producción Pecuaria y Ganadería Sostenible',
      'Tecnólogo en Procesamiento de Alimentos Agroindustriales'
    ],
    services: [
      'Pabellones de dormitorios para hombres y mujeres con custodia y vigilancia 24 horas',
      'Restaurante y casino con 3 raciones alimenticias completas para aprendices internos',
      'Atención de Bienestar al Aprendiz, primeros auxilios y orientación psicosocial',
      'Canchas de fútbol, polideportivo cubierto, biblioteca agropecuaria y salas TIC'
    ],
    facilities: [
      'Unidad didáctica de ganadería lechera y doble propósito con ordeño mecánico',
      'Cultivos demostrativos de cítricos, plátano, caña de azúcar y hortalizas',
      'Módulos de porcicultura tecnificada y lombricompostaje',
      'Planta agroindustrial didáctica de lácteos y talleres de mecanización agrícola'
    ]
  },
  {
    id: 'porvenir-cordoba',
    name: 'Centro Agropecuario y de Biotecnología El Porvenir',
    regional: 'Regional Córdoba',
    municipality: 'Montería',
    department: 'Córdoba',
    locationDetails: 'Km 42 Vía Montería - Tierralta, Valle del Sinú',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '130 cupos de internado',
    totalLandArea: '160 Hectáreas',
    zone: 'Caribe',
    description: 'Estratégicamente ubicado en la rica llanura del Sinú. Su internado brinda refugio formativo a jóvenes campesinos de Córdoba, Sucre y Bajo Cauca, fomentando la reconversión ganadera sostenible y la piscicultura continental.',
    photoUrl: senaPorvenirCordoba,
    programs: [
      'Tecnólogo en Producción Ganadera Tropical Sostenible',
      'Tecnólogo en Producción y Calidad de Pastos y Forrajes',
      'Tecnólogo en Acuicultura de Aguas Cálidas',
      'Tecnólogo en Gestión de la Producción Agrícola'
    ],
    services: [
      'Dormitorios residenciales con lockers individuales y ventilación cruzada',
      'Servicio de restaurante con tres raciones diarias completas',
      'Bienestar al Aprendiz con brigadas de salud oral y psicológica',
      'Espacios deportivos y sala de computo con conexión satelital'
    ],
    facilities: [
      'Hato de ganado Brahman blanco y rojo con registro genético',
      'Estación piscícola con estanques de bocachico, cachama y tilapia',
      'Silos y henificadoras para conservación de pasturas en época seca',
      'Campos de experimentación en cultivos de maíz y yuca industrial'
    ]
  },
  {
    id: 'lope-narino',
    name: 'Centro Internacional de Producción Limpia - LOPE',
    regional: 'Regional Nariño',
    municipality: 'San Juan de Pasto',
    department: 'Nariño',
    locationDetails: 'Sector Granja Lope, Vereda Jongovito (Sur de Pasto, Nariño)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '65 cupos de internado residencial (bloques modernizados con Findeter)',
    totalLandArea: '45 Hectáreas (Granja Experimental Lope a 2.500 msnm)',
    zone: 'Pacífica',
    description: 'Sede emblemática del suroccidente colombiano ubicada en las faldas del volcán Galeras. El Centro LOPE cuenta con servicio de internado y Centro de Convivencia para aprendices procedentes de zonas rurales apartadas, resguardos indígenas y municipios de la cordillera, costa pacífica y altiplano nariñense, formándolos en producción limpia, energías renovables y agroindustria andina.',
    photoUrl: senaLopeNarino,
    programs: [
      'Tecnólogo en Producción Limpia y Agroecología',
      'Tecnólogo en Gestión de Recursos Naturales',
      'Tecnólogo en Producción Ganadera de Trópico Alto y Especies Menores (Cuyes)',
      'Tecnólogo en Instalación de Sistemas de Energía Solar Fotovoltaica'
    ],
    services: [
      'Bloques residenciales de internado masculino y femenino reforzados estructuralmente',
      'Restaurante y casino institucional con minuta nutricional completa (3 comidas diarias)',
      'Acompañamiento integral de Bienestar al Aprendiz y enfermería',
      'Gimnasio dotado, biblioteca técnica, canchas deportivas y salas de cómputo'
    ],
    facilities: [
      'Granja experimental Lope con cultivos de papa, quinua, hortalizas y frutales andinos',
      'Módulos tecnificados de crianza de cuyes (Cavia porcellus) y cunicultura',
      'Parque demostrativo y laboratorios de energías renovables (solar fotovoltaica y biomasa)',
      'Hato lechero de trópico alto con ordeño mecánico y pasturas de clima frío'
    ]
  },
  {
    id: 'hachon-meta',
    name: 'Centro Agroindustrial del Meta · Sede El Hachón',
    regional: 'Regional Meta',
    municipality: 'Villavicencio',
    department: 'Meta',
    locationDetails: 'Km 12 Vía Villavicencio - Puerto López (Llanos Orientales)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '90 cupos de internado residencial en pabellones',
    totalLandArea: '150 Hectáreas de campus agropecuario y agroindustrial',
    zone: 'Orinoquía',
    description: 'Complejo insignia de formación agropecuaria del Meta y la Orinoquía colombiana. Cuenta con servicio de internado y Centro de Convivencia con habitaciones dotadas de camarotes para aprendices que por distancias geográficas y escasos recursos residen en la sede, formándose en ganadería de sabana, mecanización agrícola, piscicultura de especies nativas y agroindustria llanera.',
    photoUrl: senaHachonMeta,
    programs: [
      'Tecnólogo en Producción Ganadera Tropical de la Orinoquía',
      'Tecnólogo en Mecanización Agrícola y Maquinaria Pesada',
      'Tecnólogo en Acuicultura y Piscicultura Continental (Cachama/Yamú)',
      'Tecnólogo en Procesamiento de Alimentos Agropecuarios',
      'Tecnólogo en Gestión de Empresas Agropecuarias Llaneras'
    ],
    services: [
      'Habitaciones equipadas con camarotes, casilleros y baños independientes por género',
      'Casino y restaurante escolar con tres raciones alimenticias diarias balanceadas',
      'Acompañamiento del área de Bienestar al Aprendiz, primeros auxilios y enfermería',
      'Áreas de lavandería comunitaria, polideportivo cubierto y conectividad a internet'
    ],
    facilities: [
      'Hato ganadero bovino de carne y doble propósito adaptado a la altillanura',
      'Estación piscícola con lagunas de reproducción de cachama blanca, yamú y bagre',
      'Parque de maquinaria agrícola con tractores de instrucción y equipos de labranza',
      'Plantaciones de palma de aceite, pastos tecnificados y cultivos de maíz y soya',
      'Planta didáctica de transformación de lácteos y cárnicos llaneros'
    ]
  },
  {
    id: 'minero-boyaca',
    name: 'Centro Minero del SENA · Sede Morcá',
    regional: 'Regional Boyacá',
    municipality: 'Sogamoso',
    department: 'Boyacá',
    locationDetails: 'Km 7 Sector Batá, Vereda Morcá (Sogamoso, Boyacá a 2.600 msnm)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '100 cupos de internado en campamento minero',
    totalLandArea: '55 Hectáreas de complejo minero y alta montaña',
    zone: 'Andina',
    description: 'Centro insignia y referente nacional en formación minera, seguridad subterránea y salvamento de minas. Ubicado en la cordillera oriental en la vereda Morcá, cuenta con internado residencial (campamento minero) que acoge a aprendices de municipios carboníferos apartados de Boyacá, Cundinamarca y Santander bajo un riguroso Pacto de Convivencia Minero.',
    photoUrl: senaMineroBoyaca,
    programs: [
      'Tecnólogo en Supervisión de Labores Mineras Subterráneas',
      'Tecnólogo en Mantenimiento Electromecánico de Minas',
      'Tecnólogo en Topografía y Geología Minera',
      'Técnico en Seguridad y Salvamento Minero',
      'Técnico en Operación de Maquinaria Pesada para Minería'
    ],
    services: [
      'Bloques de dormitorios acondicionados con camarotes, casilleros y calefacción pasiva',
      'Restaurante y casino con 3 comidas calientes completas adaptadas al clima frío',
      'Estación de primeros auxilios y brigada médica de salvamento minero',
      'Pacto de Convivencia Minero con turnos de disciplina, aseo y formación en liderazgo'
    ],
    facilities: [
      'Mina subterránea didáctica a escala real con túneles, galerías y frentes de explotación',
      'Pista de entrenamiento de brigadistas en rescate y salvamento minero',
      'Simuladores de maquinaria pesada, perforadoras y ventilación de túneles',
      'Laboratorios de geomecánica, análisis de carbones y polvorín didáctico'
    ]
  },
  {
    id: 'caena-guainia',
    name: 'Centro Ambiental y Ecoturístico del Nororiente Amazónico (CAENA) · Casa SENA',
    regional: 'Regional Guainía',
    municipality: 'Inírida',
    department: 'Guainía',
    locationDetails: 'Transversal 6ª No. 29A-55, Vía al Coco (Inírida, Guainía - Cuenca Amazónica)',
    regime: 'Internado Mixto (Cupos Focalizados)',
    boardingCapacity: '45 cupos de internado en la Casa SENA',
    totalLandArea: '30 Hectáreas de bosque húmedo tropical y rivera amazónica',
    zone: 'Amazonía',
    description: 'Estratégico centro de formación de la selva y cuenca amazónica colombiana. Opera la estrategia de internado "Casa SENA / Centro de Convivencia" para garantizar hospedaje y alimentación a aprendices de resguardos indígenas y comunidades ribereñas de los ríos Inírida, Guaviare y Atabapo que deben viajar días en lancha y no pueden retornar a diario a sus hogares.',
    photoUrl: senaCaenaGuainia,
    programs: [
      'Tecnólogo en Guianza y Ecoturismo de Selva',
      'Tecnólogo en Gestión de Recursos Naturales de la Amazonía',
      'Tecnólogo en Acuicultura y Especies Ícticas Nativas',
      'Técnico en Manejo de Productos Forestales No Maderables y Artesanías Indígenas'
    ],
    services: [
      'Alojamiento en la Casa SENA con camas, casilleros y ventilación bioclimática',
      'Alimentación integral de tres comidas diarias balanceadas',
      'Acompañamiento diferencial con enfoque étnico e intercultural por Bienestar al Aprendiz',
      'Muelle y transporte fluvial institucional para prácticas formativas'
    ],
    facilities: [
      'Pabellones bioclimáticos en madera y techos verdes adaptados a la selva tropical',
      'Estación de acuicultura de peces amazónicos (Pirarucú, Arawana y peces ornamentales)',
      'Senderos de interpretación ambiental hacia los Cerros de Mavecure y Río Inírida',
      'Vivero de flora nativa y plantas medicinales ancestrales de la Amazonía'
    ]
  }
];

interface SenaCoexistenceCentersProps {
  onNavigate: (tab: TabType) => void;
  onOpenInterestModal: () => void;
}

export const SenaCoexistenceCenters: React.FC<SenaCoexistenceCentersProps> = ({
  onNavigate,
  onOpenInterestModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('todas');
  const [selectedRegime, setSelectedRegime] = useState<string>('todos');
  const [activeModalCenter, setActiveModalCenter] = useState<SenaCenterInfo | null>(null);

  const filteredCenters = useMemo(() => {
    return NATIONAL_COEXISTENCE_CENTERS.filter((center) => {
      const matchesSearch = 
        center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.regional.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        center.programs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesZone = 
        selectedZone === 'todas' || 
        center.zone === selectedZone || 
        (selectedZone === 'Boyacá/Morcá' && center.id === 'minero-boyaca');
      
      const matchesRegime = 
        selectedRegime === 'todos' || 
        (selectedRegime === '100' && center.isAguasCalientes) ||
        (selectedRegime === 'mixto' && !center.isAguasCalientes);

      return matchesSearch && matchesZone && matchesRegime;
    });
  }, [searchQuery, selectedZone, selectedRegime]);

  const aguasCalientesCenter = NATIONAL_COEXISTENCE_CENTERS.find(c => c.isAguasCalientes)!;

  return (
    <section id="centros-convivencia-sena" className="py-16 sm:py-24 bg-stone-100/70 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with clear institutional context */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39A900]/10 dark:bg-[#39A900]/20 text-[#2c8400] dark:text-[#4cd906] text-xs font-bold uppercase tracking-wider mb-4 border border-[#39A900]/25">
            <Building2 className="w-4 h-4" />
            <span>Red Nacional de Internados SENA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Centros de Convivencia SENA en Colombia
          </h2>

          <p className="mt-4 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Conoce los centros de formación profesional del SENA que cuentan con servicio de internado (alojamiento y alimentación integral) a lo largo del territorio nacional, con especial énfasis en las características únicas de la <strong className="text-stone-900 dark:text-white">Sede Aguas Calientes (Regional Santander)</strong>.
          </p>
        </div>

        {/* PROMINENT COMPARISON BANNER: Aguas Calientes Singularity */}
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white p-6 sm:p-10 shadow-xl border border-emerald-700/50 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#39A900]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Distinción Única a Nivel Nacional</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Sede Aguas Calientes: El Único Internado del SENA con el 100% de Aprendices Internos
              </h3>

              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                A diferencia de los demás centros de convivencia del país que operan bajo un régimen mixto (donde solo un porcentaje de la matrícula recibe internado), <strong>Aguas Calientes es el único centro del SENA en Colombia donde el 100% de los 130 aprendices son internos</strong>, y es el <strong>único internado del SENA en todo el oriente del país</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <div className="text-2xl font-black text-amber-300">100%</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Aprendices Internos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <div className="text-2xl font-black text-white">130</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Cupos de Residencia</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <div className="text-2xl font-black text-white">130 Has</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Finca Productiva</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15">
                  <div className="text-2xl font-black text-amber-300">Km 48</div>
                  <div className="text-[11px] text-emerald-100 font-medium">Vía al Mar · El Playón</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('convivencia')}
                  className="px-4 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Ver Manual de Convivencia Aguas Calientes</span>
                </button>
                <button
                  onClick={() => setActiveModalCenter(aguasCalientesCenter)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-bold transition-all border border-emerald-500/40 flex items-center gap-1.5"
                >
                  <span>Ver Ficha Técnica Completa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Preview of Aguas Calientes Entrance */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl group cursor-pointer" onClick={() => setActiveModalCenter(aguasCalientesCenter)}>
                <img 
                  src={senaAguasCalientesEntrance} 
                  alt="Entrada oficial SENA Sede Aguas Calientes El Playón Santander" 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-300">Fotografía Real · Portería Principal</span>
                  <h4 className="text-sm font-bold text-white">Sede Aguas Calientes · Regional Santander</h4>
                  <p className="text-[11px] text-stone-300">Subsede CASA (Piedecuesta - Guatiguara) · Km 48 Vía al Mar</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white dark:bg-stone-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-stone-200 dark:border-stone-700 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar por centro, regional, municipio o tecnología..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#39A900]/40 focus:border-[#39A900]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Region / Zone Selectors (single line buttons) */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 mr-1 shrink-0 hidden sm:inline">
                Región:
              </span>
              {[
                { id: 'todas', label: 'Todas las Regiones' },
                { id: 'Oriente', label: 'Oriente (Aguas Calientes)' },
                { id: 'Andina', label: 'Andina' },
                { id: 'Boyacá/Morcá', label: 'Boyacá (Centro Minero)' },
                { id: 'Caribe', label: 'Caribe' },
                { id: 'Pacífica', label: 'Pacífica' },
                { id: 'Orinoquía', label: 'Orinoquía (El Hachón)' },
                { id: 'Amazonía', label: 'Amazonía (Guainía)' },
              ].map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedZone === zone.id
                      ? 'bg-[#39A900] text-white font-bold shadow-sm'
                      : 'bg-stone-100 dark:bg-stone-700/60 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>

            {/* Regime toggle */}
            <div className="flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={selectedRegime}
                onChange={(e) => setSelectedRegime(e.target.value)}
                className="text-xs py-2 px-3 rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-[#39A900]/40"
              >
                <option value="todos">Todos los regímenes</option>
                <option value="100">Solo 100% Internado (Aguas Calientes)</option>
                <option value="mixto">Internados Mixtos (Cupos focalizados)</option>
              </select>
            </div>

          </div>

          {/* Search Result Count */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-700/50">
            <span>Mostrando {filteredCenters.length} de {NATIONAL_COEXISTENCE_CENTERS.length} centros de formación con servicio de internado investigados</span>
            {selectedZone !== 'todas' && (
              <span className="font-semibold text-[#39A900]">Filtro: {selectedZone}</span>
            )}
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCenters.map((center) => {
            const isTargetAguasCalientes = center.isAguasCalientes;

            return (
              <article 
                key={center.id}
                className={`flex flex-col rounded-3xl bg-white dark:bg-stone-800 border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group ${
                  isTargetAguasCalientes
                    ? 'border-[#39A900] ring-2 ring-[#39A900]/30 dark:border-[#39A900]/80'
                    : 'border-stone-200 dark:border-stone-700'
                }`}
              >
                {/* Photo with Overlay Badge */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-200 dark:bg-stone-900">
                  <img
                    src={center.photoUrl}
                    alt={`Campus del ${center.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-stone-900/80 text-white backdrop-blur-sm border border-white/20">
                      {center.regional}
                    </span>

                    {isTargetAguasCalientes ? (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-[#39A900] text-white shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        100% Internos
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-900/90 text-emerald-200 backdrop-blur-sm border border-emerald-400/30">
                        Internado Mixto
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-stone-200 font-medium">
                      <MapPin className="w-3 h-3 text-[#4cd906] shrink-0" />
                      <span>{center.municipality}, {center.department}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#39A900] transition-colors leading-snug">
                      {center.name}
                    </h3>

                    {center.administrativeNote && (
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/50 p-2 rounded-lg border border-amber-200/50 dark:border-amber-800/50">
                        {center.administrativeNote}
                      </p>
                    )}

                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                      {center.description}
                    </p>

                    {/* Key Technical Data Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 dark:border-stone-700/60 text-xs">
                      <div className="flex items-start gap-1.5 text-stone-600 dark:text-stone-400">
                        <Bed className="w-3.5 h-3.5 text-[#39A900] shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] text-stone-400 uppercase font-semibold">Alojamiento</span>
                          <span className="font-semibold text-stone-800 dark:text-stone-200">{center.boardingCapacity}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5 text-stone-600 dark:text-stone-400">
                        <LandPlot className="w-3.5 h-3.5 text-[#39A900] shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-[10px] text-stone-400 uppercase font-semibold">Extensión</span>
                          <span className="font-semibold text-stone-800 dark:text-stone-200">{center.totalLandArea}</span>
                        </div>
                      </div>
                    </div>

                    {/* Program Badges (clean unboxed text or minimal tags) */}
                    <div className="pt-2">
                      <span className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-1.5">
                        Programas Destacados:
                      </span>
                      <ul className="space-y-1 text-xs text-stone-700 dark:text-stone-300 font-medium">
                        {center.programs.slice(0, 2).map((prog, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#39A900] shrink-0" />
                            <span className="truncate">{prog}</span>
                          </li>
                        ))}
                        {center.programs.length > 2 && (
                          <li className="text-[11px] text-[#39A900] font-semibold pl-3">
                            + {center.programs.length - 2} programas adicionales
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-stone-100 dark:border-stone-700 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalCenter(center)}
                      className="text-xs font-bold text-[#39A900] dark:text-[#4cd906] hover:underline flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Ver Ficha Técnica</span>
                    </button>

                    {isTargetAguasCalientes ? (
                      <button
                        onClick={() => onNavigate('ingreso')}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white shadow-sm transition-transform active:scale-95"
                      >
                        Postularme Aquí
                      </button>
                    ) : (
                      <button
                        onClick={onOpenInterestModal}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300"
                      >
                        Consultar Cupo
                      </button>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Informative Guidance Note for Applicants & Parents */}
        <div className="mt-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-6 sm:p-8 flex flex-col md:flex-row items-start gap-4">
          <Info className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
          <div className="space-y-2 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <h4 className="font-bold text-sm sm:text-base text-amber-950 dark:text-amber-100">
              ¿Cómo funciona el servicio de internado en los Centros de Convivencia del SENA?
            </h4>
            <p className="leading-relaxed">
              Los Centros de Convivencia del SENA son apoyos socioeconómicos en especie gestionados por el área de <strong>Bienestar al Aprendiz</strong> para garantizar que los jóvenes que viven en zonas rurales o municipios distantes puedan acceder a la educación superior pública y gratuita sin incurrir en gastos de hospedaje y alimentación.
            </p>
            <p className="leading-relaxed">
              En casi todo el país, los cupos son asignados semestralmente a través de convocatorias basadas en vulnerabilidad socioeconómica. En contraste, en la <strong className="underline">Sede Aguas Calientes (El Playón, Santander)</strong> el modelo es <strong>100% internado residencial</strong>: todos los aprendices admitidos en sus programas de tecnólogo ingresan directamente como internos con residencia y alimentación total garantizada durante su etapa lectiva.
            </p>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL FOR A SELECTED CENTER */}
      {activeModalCenter && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="center-modal-title"
        >
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 dark:border-stone-700 relative">
            
            {/* Modal Photo Header */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
              <img
                src={activeModalCenter.photoUrl}
                alt={activeModalCenter.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <button
                onClick={() => setActiveModalCenter(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors border border-white/20"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#39A900] text-white">
                    {activeModalCenter.regional}
                  </span>
                  <span className="text-xs text-stone-300">
                    Región {activeModalCenter.zone}
                  </span>
                </div>
                <h3 id="center-modal-title" className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {activeModalCenter.name}
                </h3>
                <p className="text-xs text-stone-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4cd906]" />
                  <span>{activeModalCenter.locationDetails} ({activeModalCenter.municipality}, {activeModalCenter.department})</span>
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-stone-800 dark:text-stone-200">
              
              {activeModalCenter.administrativeNote && (
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200 font-medium">
                  <strong>Estructura Institucional:</strong> {activeModalCenter.administrativeNote}
                </div>
              )}

              {/* Distinción Aguas Calientes si aplica */}
              {activeModalCenter.isAguasCalientes && (
                <div className="p-4 rounded-2xl bg-[#39A900]/10 dark:bg-[#39A900]/20 border border-[#39A900]/30 text-xs sm:text-sm text-stone-800 dark:text-stone-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2c8400] dark:text-[#4cd906]">
                    <Sparkles className="w-4 h-4" />
                    <span>Único Internado del SENA en el Oriente y Único con 100% Aprendices Internos</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    A diferencia de otros centros con cupos de internado mixtos o limitados, en Aguas Calientes la totalidad de la comunidad estudiantil (130 aprendices) reside en la finca durante toda la etapa lectiva, cumpliendo rigurosamente el Manual de Convivencia y el Reglamento del Aprendiz SENA.
                  </p>
                </div>
              )}

              {/* Key Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Régimen</span>
                  <span className="text-xs sm:text-sm font-bold text-[#39A900]">{activeModalCenter.regime}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Capacidad Internado</span>
                  <span className="text-xs sm:text-sm font-bold">{activeModalCenter.boardingCapacity}</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 col-span-2 sm:col-span-1">
                  <span className="block text-[10px] uppercase font-bold text-stone-500">Área de Terreno</span>
                  <span className="text-xs sm:text-sm font-bold">{activeModalCenter.totalLandArea}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Descripción General</h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {activeModalCenter.description}
                </p>
              </div>

              {/* Programas */}
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Programas de Formación Ofertados</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalCenter.programs.map((prog, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs font-semibold">
                      <GraduationCap className="w-4 h-4 text-[#39A900] shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Servicios y Bienestar */}
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Servicios del Centro de Convivencia</h4>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                  {activeModalCenter.services.map((srv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#39A900] shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instalaciones Productivas */}
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-stone-500 mb-2">Unidades Productivas e Infraestructura</h4>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                  {activeModalCenter.facilities.map((fac, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalCenter(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors"
                >
                  Cerrar
                </button>

                {activeModalCenter.isAguasCalientes ? (
                  <button
                    onClick={() => {
                      setActiveModalCenter(null);
                      onNavigate('ingreso');
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Ver Procedimiento de Ingreso</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setActiveModalCenter(null);
                      onOpenInterestModal();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-[#39A900] hover:bg-[#2e8800] text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Consultar Información con Asesor</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
