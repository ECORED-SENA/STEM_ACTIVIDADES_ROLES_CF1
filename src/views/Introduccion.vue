<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Apreciado aprendiz, bienvenido a este momento de aprendizaje que surge ante la necesidad del reconocimiento de los fundamentos de algunas metodologías que contribuyen a implementar la educación STEM que se presenta como la forma de educar de manera integradora, sin parcelar el conocimiento, buscando que los aprendices puedan aprender y utilizar la ciencia y la ingeniería para la solución de los problemas que se les presentan en la sociedad (Botero, 2018).

    p.mt-3 Por lo anterior, le sugerimos revisar el siguiente recurso educativo para que usted identifique la ruta de aprendizaje que se propone, con la intención de que analice técnicas didácticas activas acordes con la enseñanza en el modelo STEM. ¿Qué espera para identificar algunas de las metodologías didácticas activas más comunes utilizadas por los instructores en los ambientes de aprendizaje? Adelante con esta experiencia. 
    
    figure.mb-5.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lFga44ZGHVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5 Ahora que usted reconoció el contexto inicial de la experiencia de aprendizaje lo invitamos a continuar con su formación a partir de la siguiente situación.

    p.mt-3 La ciencia, la tecnología, la ingeniería y las matemáticas son cada vez más un discurso común en los contextos sociales y educativos de nuestro país. Ellas vienen demostrando ser un aspecto para considerar en los currículos de las instituciones educativas, sin embargo, estas están inmersas en contextos dinámicos y bajo condiciones sociales, tecnológicas, políticas y ambientales muy diferentes. Entonces, ¿cómo se debe promover el cambio del currículo para implementar una educación STEM? ¿Cómo dinamizar las situaciones de aprendizaje desde metodologías que ayuden a desarrollar el enfoque STEM?

    .col-md-9.mt-5
      .cajon.color-acento-contenido.p-5(style="background-color:#EDFFF6")
        p #[strong Pensar en la anterior situación de la presente formación ayudará a ir encontrando elementos para resolver esta situación. Adelante con su aprendizaje.]

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
