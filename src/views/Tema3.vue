<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Aprendizaje basado en proyectos (ABP)

    p El aprendizaje basado en proyectos es una metodología que permite a los aprendices adquirir los conocimientos y competencias clave en el siglo XXI, mediante la elaboración de proyectos y de manera integrada, dando respuesta a problemas de la vida real. Esta metodología forma parte del “aprendizaje activo”. De acuerdo con Martín y Santaolalla (2020), el desarrollo de actividades escolares de forma integrada, desde las diferentes áreas del currículo, permite establecer conexiones entre los contenidos para que el aprendizaje sea más significativo. Por eso es importante no crear compartimentos o segmentar las áreas, desde el enfoque STEM. Es preciso buscar encuentros y puntos comunes entre ciencia-tecnología-ingeniería-matemática, para que cada una de las materias aporte su valor al resto. Aunque debemos tener en cuenta que cada una de ellas posee objetivos últimos diferenciales y formas propias de hacer y pensar.


    .row.mt-5
      .col-md-6.mb-3
        p El aprendizaje basado en proyectos (ABP) es una metodología de enseñanza propuesta inicialmente por Kilpatrick, en 1918, y tiene como aspecto fundamental la necesidad de un propósito compartido con el aprendiz para que se produzca un aprendizaje. Kilpatrick (1918) propone cuatro tipos fundamentales de ABP, según el propósito que los anima:

        .cajon.color-acento-contenido.p-4.mt-4(style="background-color:#EDFFF6")
          ol.lista-ol
            li.mb-0
              span.text-bold 1. 
              | Elaborar un producto.
            li.mb-0
              span.text-bold 2. 
              | Resolver un problema.
            li.mb-0
              span.text-bold 3. 
              | Disfrutar de una experiencia estética.
            li.mb-0
              span.text-bold 4. 
              | Obtener un conocimiento.

        p.mt-4 Aunque las formulaciones actuales suelen centrarse en los tres primeros (Sanmartí i Puig y Márquez, 2017; Larmer et al., 2015). El ABP se fundamenta pedagógicamente en la idea constructivista según la cual los aprendizajes son más profundos y transferibles cuando se realizan de manera instrumental en su transferencia a la resolución de un conflicto contextualizado (Domènech-Casal, 2019).

      .col-md-6
        figure
            img(src="@/assets/curso/tema3/1.svg", alt="Avatar")

    .cajon.color-acento-contenido.p-5.pb-3.pt-4.mt-5(style="background-color:#EDFFF6")
      p El ABP es considerada la herramienta pedagógica más poderosa actualmente para desarrollar una enseñanza interdisciplinaria, ya que brinda excelentes resultados. Para la educación STEM, se convierte en una herramienta fundamental. A continuación, se presentan las ventajas de esta herramienta:

    SlyderB.mt-5(:datos="datosSlyder")

    p.mt-5 A continuación, se presenta, como plantilla para desarrollar el ABP, la metodología CANVAS, que fue diseñada por Osterwalder para la administración de negocios y adaptada por la empresa Conecta13, una empresa basada en el conocimiento que nace como spin-off de la Universidad de Granada, en España:

    .row.mt-5
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Competencia clave
              p ¿Qué competencias clave son desarrolladas con sus aprendices?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Producto final
              p ¿Qué se quiere conseguir? #[br] ¿Qué reto se quiere resolver? #[br] ¿A qué problema se quiere dar solución?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Recursos
              p ¿Qué personas deben implicarse:  instructores, padres de familia, otros agentes educativos? #[br] ¿Qué otros materiales son necesarios? #[br] ¿Es necesario algún tipo de instalación especial?

    .row.mt-5
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Estándares de aprendizaje
              p ¿Con qué estándares de aprendizaje evaluables del currículo oficial se pueden relacionar los aprendizajes adquiridos?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Tareas
              p ¿Qué se debe hacer para alcanzar el producto final?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Herramientas TIC
              p ¿Qué apps y herramientas TIC se necesitan? #[br] ¿Qué servicios web se van a usar? #[br] ¿Es posible vincularlos con las tareas?

    .row.mt-5
      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Métodos de evaluación
              p ¿Qué herramientas y estrategias innovadoras de evaluación se van a aplicar?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Difusión
              p ¿Cómo se va a difundir el  proyecto?

      .col-md-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#F3F9FF")
            .text-center.p-4.pt-0
              .h4.text-center Agrupamientos/Organización
              p ¿Cómo se van a agrupar los aprendices? #[br] ¿Cómo se va a organizar el aula?

    p.mt-5 El CANVAS está organizado en tres columnas. En el centro, se define la base del proyecto: el producto final, las tareas que permiten llegar a ese producto y cómo se realizará la difusión de este. A partir de aquí, en la columna izquierda, se recoge la relación entre el proyecto de aprendizaje y el currículo, a través de las competencias clave y los estándares de aprendizaje, además de definir uno de los pilares fundamentales de un buen proyecto, la evaluación, entendida siempre como un proceso constante de toma de datos para poder regular el aprendizaje. Finalmente, en la columna de la derecha, se define con precisión la estructura del proyecto, a través de los recursos necesarios, el uso de las TIC y los agrupamientos, y la gestión del ambiente contemplado en el diseño del proyecto de aprendizaje.

    .col-md-9.mt-5
      .cajon.color-acento-contenido.p-5.mt-4(style="background-color:#EDFFF6")
        p La herramienta #[strong CANVAS] permite que los participantes se acerquen a una sesión donde todos aportan desde sus ideas. El resultado de esto es un prototipo de proyecto de aula.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Fuentes de conocimiento',
        texto:
          'En este aspecto, el instructor debe reconocer que los aprendices y otros agentes que inciden en el proceso de enseñanza y aprendizaje son portadores de información. El instructor es una guía de aprendizaje, es parte de su nuevo rol, por lo tanto, la clase no está centrada en él, sino en el aprendiz y otros agentes.',
        imagen: require('@/assets/curso/tema3/2.svg'),
      },
      {
        titulo: 'Autogestión y autodesarrollo',
        texto:
          'Otra ventaja es que el ABP brinda la posibilidad al aprendiz  de escoger los temas de profundización que sean importantes para él y tendrá la posibilidad de tomar decisiones para el desarrollo de la actividad.',
        imagen: require('@/assets/curso/tema3/3.svg'),
      },
      {
        titulo: 'Motivación',
        texto:
          'Durante la experiencia de aprendizaje, el aprendiz  se interesa más y despierta su curiosidad por ahondar en la investigación y el aprendizaje de nuevos conceptos, lo que le brinda autonomía, pensamiento crítico y solución de problemas entre pares.',
        imagen: require('@/assets/curso/tema3/4.svg'),
      },
      {
        titulo: 'Aprendizaje continuo',
        texto:
          'Uno de los aspectos más importante de implementar ABP, es que los aprendices e instructores descubren que hay conocimientos  previos y otros por construir, y en este reconocimiento ambos toman una actitud activa en el proceso de aprendizaje continuo.',
        imagen: require('@/assets/curso/tema3/5.svg'),
      },
    ],
  }),
}
</script>
<style lang="sass">
.tarjeta-avatar .tarjeta
  width:100% !important
.tarjeta-avatar img
  width: 93px !important
  margin-top: 19px !important
</style>
