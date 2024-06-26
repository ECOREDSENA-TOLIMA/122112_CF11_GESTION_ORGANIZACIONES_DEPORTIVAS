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
        download: 'downloads/122112_CF11_DU.pdf',
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
        'Cano Ramírez, A. (2000). Elementos para una definición de evaluación. En Ander-Egg, E. (2000). Página 2. Coloner, A. (1979). Página 5. Cohen, J., & Franco, R. (1988). Página 6. Recuperado de',
      link:
        'https://www2.ulpgc.es/hege/almacen/download/38/38196/tema_5_elementos_para_una_definicion_de_evaluacion.pdf',
    },
    {
      referencia:
        'Colomer, M. (1979). Método de trabajo social. Revista de Trabajo Social, (75), p. 4-48',
    },
    {
      referencia:
        'Saldarriaga Ríos, J. G. (2008). Gestión Humana: Tendencias y Perspectivas. En García, J. A., & Casanueva, C. (Eds.). Recuperado de',
      link:
        'https://www.icesi.edu.co/revistas/index.php/estudios_gerenciales/article/view/262/260',
    },
    {
      referencia:
        'Chiavenato, I. (2011). Administración de recursos humanos. El capital humano de las organizaciones. McGraw-Hill.',
    },
    {
      referencia:
        'Cuesta Santos, A. (2018). Manual para la evaluación del desempeño laboral. Recuperado de',
      link:
        'https://editorialmacro.com/wp-content/uploads/2021/02/9786123045531.pdf',
    },
    {
      referencia:
        'Lodezma Tamayo Caballero, R. (2011). La autoevaluación, la coevaluación y la evaluación compartida en la evaluación de la integralidad en educandos del preuniversitario cubano. En Porrás, J. (Ed.). Recuperado de',
      link: 'https://www.eumed.net/rev/ced/28/rltc.htm ',
    },
    {
      referencia:
        'Díaz, E., & Rodríguez, V. (2002). La Evaluación en Servicios Sociales. Alianza Editorial.',
    },
    {
      referencia:
        'Project Management Institute [PMI]. (2008). Organizational Project Management Maturity Model (OPM3): Knowledge Foundation. Project Management Institute.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia, Centro de servicios de salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital, Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de Estilo',
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
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
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
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
