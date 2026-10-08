import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Diseño estructural',
    description:
      'Diseñamos estructuras seguras y eficientes adaptadas a cada proyecto.',
    iconSource: '/images/icons/services/design-structural.png',
    iconAlt: 'Escuadra de diseño estructural'
  },
  {
    id: 2,
    title: 'Análisis estructural',
    description:
      'Realizamos análisis estructurales avanzados para garantizar estabilidad y resistencia.',
    iconSource: '/images/icons/services/structural-analysis.png',
    iconAlt: 'Monitor con gráfica de análisis estructural'
  },
  {
    id: 3,
    title: 'Cálculo estructural',
    description:
      'Realizamos cálculos estructurales bajo normativas nacionales e internacionales.',
    iconSource: '/images/icons/services/structural-calculation.png',
    iconAlt: 'Calculadora de cálculo estructural'
  },
  {
    id: 4,
    title: 'Asesoría técnica',
    description:
      'Brindamos acompañamiento técnico en cada etapa del proyecto, optimizando recursos y tiempos.',
    iconSource: '/images/icons/services/technical-consulting.png',
    iconAlt: 'Casco de asesoría técnica'
  },
  {
    id: 5,
    title: 'Supervisión e interventoría',
    description:
      'Realizamos control técnico y administrativo para asegurar calidad y cumplimiento.',
    iconSource: '/images/icons/services/supervision.png',
    iconAlt: 'Lista de supervisión e interventoría'
  },
  {
    id: 6,
    title: 'Estudios y diseños de edificaciones',
    description:
      'Desarrollamos estudios y diseños completos para proyectos de edificación.',
    iconSource: '/images/icons/services/building-design.png',
    iconAlt: 'Edificios de estudios y diseños'
  }
];