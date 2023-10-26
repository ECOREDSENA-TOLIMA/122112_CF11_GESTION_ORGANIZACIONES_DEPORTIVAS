export default {
  global: {
    componenteFormativo:
      'Mecanismos de seguimiento, control, evaluación y oportunidades de mejora de la gestión del talento humano',
    descripcionCurso:
      'En el presente componente se abordarán aspectos relevantes para el mecanismo de control, evaluación y mejora del proceso de gestión humana en organizaciones deportivas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación del proceso de gestión humana en una organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de tiempo y recursos del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Evaluación del cumplimiento de lo proyectado de acuerdo con el tiempo y recursos estimados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Autoevaluación: definición, importancia, aplicación al proceso de gestión humana',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Informe de la autoevaluación de la gestión de talento humano',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Plan de mejoramiento de acuerdo con el resultado de la autoevaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Evaluación del proceso de gestión humana en una organización',
      referencia:
        'Martínez, L. <em>Administración de recursos humanos ¿Cómo funciona?</em>. Gestiopolis.',
      tipo: 'Página web',
      link:
        'https://www.gestiopolis.com/administracion-de-recursos-humanos-como-funciona/',
    },
  ],
  glosario: [
    {
      termino: 'Eficacia',
      significado:
        'grado en el que se realizan las actividades planificadas y se alcanzan los resultados planificados.',
    },
    {
      termino: 'Efectividad',
      significado:
        'medida de impacto de la gestión, tanto en el logro de los resultados planificados como en el manejo de los recursos utilizados y disponibles.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'relación entre resultado alcanzado y los recursos empleados.',
    },
    {
      termino: 'Indicador',
      significado:
        'medida o expresión cuantitativa que permite evaluar el desempeño de una organización frente a sus políticas, objetivos y metas.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'actividad recurrente para aumentar la capacidad para cumplir los requisitos.',
    },
    {
      termino: 'Procesos de evaluación',
      significado:
        'aspectos necesarios para medir y recopilar datos destinados a realizar análisis del desempeño y la mejora de la eficacia y la eficiencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ander- Egg, E. (2000). <em>Metodología y práctica de la animación sociocultural</em>. Instituto de Ciencias Sociales Aplicadas.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2011). <em>Administración de recursos humanos. El capital humano de las organizaciones</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Colomer, M. (1979). Método de trabajo social. <em>Revista de Trabajo Social</em>, (75), p. 4-48.',
      link: '',
    },
    {
      referencia:
        'Díaz, E., & Rodríguez, V. (2002). <em>La Evaluación en Servicios Sociales</em>. Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'Project Management Institute [PMI]. (2008). <em>Organizational Project Management Maturity Model (OPM3): Knowledge Foundation</em>. Project Management Institute.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia, Centro de servicios de salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá, Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima – Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
