<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Aprendizaje basado en lecciones (ABL)

    p De acuerdo con Norman y Schmidt (1992), la metodología aprendizaje basado en lecciones es un proceso de construcción colectiva, entre grupos de colegas docentes, que plantea de manera colaborativa problemas escritos en lenguaje cotidiano que narran hechos o fenómenos observables a simple vista, brindando a los aprendices la oportunidad de gestionar nuevo conocimiento a partir del planteamiento de una pregunta que requiere una explicación. La tarea del grupo de aprendices es discutir estos problemas y producir explicaciones tentativas para los fenómenos, describiéndolos en términos fundados de procesos, principios o mecanismos relevantes, estudiados previamente en el ambiente de manera conceptual. La duración de esta actividad no supera las cuatro horas.

    p.mt-3 #[strong Para desarrollar una actividad del tipo ABL, se tienen en consideración las siguientes recomendaciones:]

    SlyderB.mt-5(:datos="datosSlyder")


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Exponga claramente los alcances de la lección',
        texto:
          'Los aprendices se sentirán más animados si se les explica la forma en que se va a evaluar la actividad y lo que se espera de ellos; de esta manera, tendrán mayor sentido los pasos de la actividad y se sentirán identificados con ella. <br><br> Hay que recordar siempre la razón de la pregunta esencial y los objetivos de aprendizaje STEM que se quiere alcanzar.',
        imagen: require('@/assets/curso/tema4/1.svg'),
      },
      {
        titulo: 'La colaboración es definida en el trabajo en equipo',
        texto:
          'Distribuya de la mejor manera posible a los aprendices, según sus criterios. Es importante formar equipos con aprendices de diferentes actitudes. Sin embargo, no es forzoso mantener los mismos grupos todo el tiempo, es posible hacer cambios, pero con el criterio de mantener habilidades diferentes en cada grupo.<br><br> Los aprendices deben aprender a trabajar en equipo y saber explotar los beneficios de la colaboración.',
        imagen: require('@/assets/curso/tema4/2.svg'),
      },
      {
        titulo: 'Mantenga el control del flujo de trabajo de los aprendices',
        texto:
          'Todo el tiempo será necesario controlar diversos puntos de la actividad. Los aprendices deben saber que se tienen que esforzar para cumplir las metas en unos tiempos específicos; de esta forma, se logrará hacer más eficiente la actividad.',
        imagen: require('@/assets/curso/tema4/3.svg'),
      },
      {
        titulo: 'Divida los aprendices por roles durante la actividad',
        texto:
          'Esto los mantendrá siempre con una responsabilidad específica y no tendremos aprendices aislados como los que no hacen parte del proceso. Es necesario recordar que la educación es incluyente y que la actitud del aprendiz siempre debe ser activa y participativa.',
        imagen: require('@/assets/curso/tema4/4.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
