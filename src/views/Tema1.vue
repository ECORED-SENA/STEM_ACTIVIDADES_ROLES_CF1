<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Algunas reflexiones: didáctica y STEM

    .cajon.color-acento-contenido.p-5(style="background-color:#EDFFF6")
      p Tradicionalmente, la enseñanza se basaba en una secuencia que se resume en #[strong “las 3P”: Presentación, Práctica y Prueba.] El instructor expone unos temas, los aprendices los comprenden, y luego se ponen a prueba mediante la repetición de los contenidos dados. Pero esta forma de enseñar, ¿cómo puede aspirar a contribuir seriamente al desarrollo de las competencias básicas de los futuros ciudadanos del siglo XXI? Es necesario reflexionar por unos momentos en esto. ¿Tiene alguna propuesta para hacer del proceso de enseñanza y aprendizaje algo diferente?

    .row.mt-5
      .col-md-6.mb-3
        p Con una enseñanza directa, los aprendices no tienen oportunidad de tomar decisiones de manera autónoma; tampoco pueden desarrollar argumentaciones críticas y creativas frente a lo que aprenden ni relacionarse de forma colaborativa con sus compañeros; o desarrollar sus competencias en matemáticas o ingeniería sin enfrentarse a problemas del mundo real.

        p.mt-3 Dentro de los ámbitos del aprendizaje activo, encontramos el aprendizaje basado en proyectos, aprendizaje basado en lecciones, aprendizaje basado en tareas, aprendizaje basado en problemas o retos, el aprendizaje por descubrimiento, el aprendizaje cooperativo, el aprendizaje por indagación y la enseñanza para la comprensión.

        p.mt-3 Todas las anteriores estrategias de enseñanza y aprendizaje establecen una diferencia respecto al proceso de enseñanza tradicional, porque el conocimiento no lo posee el instructor para ser transferido a los aprendices, se trata de un proceso entre ambos. Cuando surgen preguntas, se busca información que ayude a obtener claridad sobre el objeto de aprendizaje abordado. El papel del aprendiz es involucrarse activamente en su desarrollo cognitivo, en la solución de problemas, de proyectos, y en el trabajo colaborativo.

      .col-md-6.p-3
        figure.mt-5
          img(src="@/assets/curso/tema1/1.svg", alt="Avatar")

    .row.mt-5
      .col-md-6.mb-3.p-5
        figure.mt-5
          img(src="@/assets/curso/tema1/2.svg", alt="Avatar")
      .col-md-6
        p En este sentido, ¿cómo la educación STEM se relaciona con las estrategias mencionadas? Es necesario recordar que la educación STEM se presenta como una nueva alternativa para pensar la educación desde la Ciencia, la Tecnología, la Ingeniería y la Matemática, de manera integradora, sin dividir el conocimiento ni las habilidades o actitudes del instructor o el aprendiz, buscando que estos puedan aprender y utilizar Ciencia, Tecnología, Ingeniería o Matemática para la solución de los problemas que se les presentan en la sociedad y su contexto. Por consiguiente, traer estas dinámicas a los ambientes de aprendizaje es una oportunidad para que los instructores retomen estrategias tales como aprendizaje basado en proyectos, aprendizaje basado en lecciones, aprendizaje basado en problemas o retos, aprendizaje cooperativo y aprendizaje por indagación, para planear e implementar sus cursos.

        p.mt-3 Finalmente, es importante comprender que el papel del instructor o el directivo debe expandirse más allá de la exposición de contenidos. La función principal del instructor es crear la situación de aprendizaje que permita que los aprendices puedan desarrollar el aprendizaje; lo cual implica buscar materiales, localizar fuentes de información, gestionar el trabajo en grupos, valorar el desarrollo del proyecto, resolver dificultades, controlar el ritmo de trabajo, facilitar el éxito del proyecto y evaluar el resultado.

    .bloque-texto-a.mt-5(style="background-color: #9DDFD3;")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.p-5
            img.p-4(src="@/assets/curso/tema1/3.svg", alt="Avatar")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p Apreciado aprendiz, se ha seleccionado el texto digital “Educación STEM en y para el mundo digital. Cómo y por qué llevar las herramientas digitales a las aulas de ciencias, matemáticas y tecnologías” para que usted lo lea e identifique la historia y las características de la educación STEM en la actualidad. Se espera que disfrute y se apropie de información para desarrollar conocimiento. 

  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>
<style lang="sass">
.cajon:before
  background-color: #00C3BB
.tabs-a__tab:before
  background-color: #e8e8e8
.tabs-a__tab:hover,.tabs-a__tab:focus,.tabs-a__tab:hover:before,,.tabs-a__tab:focus:before
  background-color: #00C3BB
.tabs-a__tab
  background-color: #e8e8e8
.tabs-a__content-item.tabs-a__content-item--active
    background-color: rgba(124,197,255,.15)
.bloque-texto-a:before
  background-color: #EDFFF6 !important
</style>
