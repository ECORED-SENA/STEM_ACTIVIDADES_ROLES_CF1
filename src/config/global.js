export default {
  global: {
    componenteFormativo:
      'Metodologías activas para la enseñanza de la educación STEM',
    descripcionCurso:
      'Durante este componente de formación se hará un acercamiento a las metodologías que contribuyen a implementar la educación STEM en los ambientes de aprendizaje, siendo la integración de las áreas un principio fundamental para el proceso de enseñanza y aprendizaje. Se espera que este enfoque permita al sistema educativo en Colombia ser una oportunidad para conectar la escuela con el mundo de la vida.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-play-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Algunas reflexiones: didáctica y STEM',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aprendizaje basado en problemas (ABP)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aprendizaje basado en proyectos (ABP)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Aprendizaje basado en lecciones (ABL)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aprendizaje cooperativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Grupos de aprendizaje cooperativo formal',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Grupos de aprendizaje cooperativo informal',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Grupos de base cooperativos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Aprendizaje por indagación (ABI)',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bayram, Z., Özyalçın, Ö., Erdem, E., Dinçol, S. y Şen, Ş. (2013, 10 diciembre). Effect of Inquiry based Learning Method on Students’ Motivation. Procedia-Social and Behavioral Sciences, 10.',
      link: 'https://doi.org/10.1016/j.sbspro.2013.12.112',
    },
    {
      referencia:
        'Botero, J. (2018). Educación STEM: Introducción a una nueva forma de enseñar y aprender. Agencia ISBN Cámara del Libro.',
      link: '',
    },
    {
      referencia:
        'Domènech-Casal, J. (2019). Risk Zone, una actividad de estudio de caso y controversia socio-científica para la enseñanza de los riesgos geológicos. Revista Eureka sobre Enseñanza y Divulgación de las Ciencias, 16(3).',
      link: 'https://revistas.uca.es/index.php/eureka/article/view/4892/5542',
    },
    {
      referencia:
        'EscueladelMaestro. (2012, 29 noviembre). Aprendizaje por indagación a través de Discovery Box [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=pN3YelHcl28&feature=youtu.be',
    },
    {
      referencia:
        'Fernández, J. y García, I. (2012). Aprendizaje Basado en Problemas (ABP): una experiencia con alumnos de la asignatura «Educación y Diversidad». Depósito de Investigación Universidad de Sevilla.',
      link: 'https://idus.us.es/handle/11441/24744',
    },
    {
      referencia:
        'Harlen, W. (2013). Assessment & Inquiry-Based Science Education: Issues in Policy and Practice. Global Network of Science Academies (IAP) Science Education Programme (SEP).',
      link:
        'https://www.interacademies.org/publication/assessment-inquiry-based-science-education-issues-policy-and-practice',
    },
    {
      referencia:
        'Johnson, D., Johnson, R. y Holubec, E. (1999). El aprendizaje cooperativo en el aula. Paidós SAICF.',
      link:
        'https://www.ucm.es/data/cont/docs/1626-2019-03-15-JOHNSON%20El%20aprendizaje%20cooperativo%20en%20el%20aula.pdf',
    },
    {
      referencia:
        'Kilpatrick, W. (1918). El método del proyecto. Registro universitario de maestros, 19(4), p. 319-335.',
      link: '',
    },
    {
      referencia:
        'Larmer, J., Mergendoller, J. y Boss, S. (2015). Setting the Standard for Project-Based Learning. ASCD.',
      link: '',
    },
    {
      referencia:
        'López, V.; Couso, D y Simarro, C. (2020). Educación STEM en y para el mundo digital. El papel de las herramientas digitales en el desempeño de prácticas científicas, ingenieriles y matemáticas. Revista educación a Distancia, 20(62).',
      link: 'http://dx.doi.org/10.6018/red.410011',
    },
    {
      referencia:
        'Martín, O. y Santaolalla, E. (2020). Educación STEM. Padres y Maestros. Journal of Parents and Teachers, (381), p. 41-46.',
      link: 'https://doi.org/10.14422/pym.i381.y2020.006',
    },
    {
      referencia:
        'Norman, G. y Schmidt, H. (1992). The psychological basis of problem-based learning: a review of the evidence. Academic medicine : journal of the Association of American Medical Colleges, 67(9), p. 557–565.',
      link: 'https://doi.org/10.1097/00001888-199209000-00002',
    },
    {
      referencia:
        'Pedaste, M., Mäeots, M., Siiman, LA., De Jong, T., Van Riesen, SA., Kamp, ET. y Tsourlidaki, E. (2015). Fases, del aprendizaje basado en la indagación: definiciones y ciclo de indagación. Revisión de la investigación educativa, 14, p. 47-61.',
      link: '',
    },
    {
      referencia:
        'Pelejero, M. (2018). Educación STEAM, ABP y aprendizaje cooperativo en Tecnología en 2° ESO. [Tesis de máster, Universidad Internacional de La Rioja, Valencia] Repositorio de la UNIR.',
      link: 'https://reunir.unir.net/handle/123456789/6838',
    },
    {
      referencia:
        'Romero, M., Aguirre, D., Quesada, A., Abril, A. y García, F. (2016). ¿Lana o metal? Una propuesta de aprendizaje por indagación para el estudio de las propiedades térmicas de materiales comunes. Revista Electrónica de Enseñanza de las Ciencias, 15(2).',
      link: 'http://reec.uvigo.es/volumenes/volumen15/REEC_15_2_7_ex1017.pdf',
    },
    {
      referencia:
        'Sanmartí i Puig, N. y Márquez, C. (2017). Aprendizaje de las ciencias basado en proyectos: del contexto a la acción. Ápice: revista de educación científica, 1(1), p. 3-16.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6081150',
    },
    {
      referencia:
        'Trujillo, F. (2015). Aprendizaje basado en proyectos. Infantil, Primaria y Secundaria. Ministerio de Educación y Formación Profesional.',
      link:
        'https://sede.educacion.gob.es/publiventa/PdfServlet?pdf=VP17667.pdf&area=E',
    },
  ],
  glosario: [
    {
      termino: 'ABP',
      significado: 'Aprendizaje basado en problemas / proyectos.',
    },
    {
      termino: 'ABL',
      significado: 'Aprendizaje basado en lecciones.',
    },
    {
      termino: 'ABC',
      significado: 'Aprendizaje basado en la cooperación.',
    },
    {
      termino: 'ABI',
      significado: 'Aprendizaje basado en la indagación.',
    },
  ],
  complementario: [
    {
      texto: 'Algunas reflexiones: didáctica y STEM',
      tipo: 'Paper digital',
      link: 'https://reunir.unir.net/handle/123456789/6838',
    },
    {
      texto: 'Algunas reflexiones: didáctica y STEM',
      tipo: 'Artículo',
      link: 'http://dx.doi.org/10.6018/red.410011',
    },
    {
      texto: 'Aprendizaje basado en proyectos (ABP)',
      tipo: 'Libro digital',
      link:
        'https://sede.educacion.gob.es/publiventa/PdfServlet?pdf=VP17667.pdf&area=E',
    },
    {
      texto: 'Aprendizaje basado en proyectos (ABP)',
      tipo: 'Página web',
      link: 'https://conecta13.com/canvas/',
    },
  ],
}
