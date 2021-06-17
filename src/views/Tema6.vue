<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Aprendizaje basado en la indagación (ABI)

    .row
      .col-md-7.mb-3
        p Esta metodología puede tener gran impacto en el aprendizaje de los aprendices, independientemente de su nivel educativo. Correctamente mediada, el ABI permite desarrollar variadas habilidades, como son la formulación de preguntas e hipótesis, planificación y conducción de experimentos, recolección y análisis de datos, presentación de resultados, y llegar a conclusiones a partir de la información obtenida (Pedaste et al., 2015).

        p.mt-3 #[strong Algunos estudios muestran que el ABI genera altos niveles de motivación en los aprendices y genera actitudes positivas hacia el aprendizaje de las ciencias] (Bayram et al., 2013), pues entrega mayor autonomía al aprendiz a la hora de conducir su propio proceso de adquisición del conocimiento (Harlen, 2013). Al mismo tiempo, los aprendizajes obtenidos a partir de esta metodología son significativos, ya que emergen desde preguntas reales, y las respuestas a las que se llega son construidas por el trabajo de los aprendices.

      .col-md-5
        figure
          img(src="@/assets/curso/tema6/1.svg", alt="Avatar")

    .row.mt-4
      .col-md-4.mb-3
        figure
          img(src="@/assets/curso/tema6/2.svg", alt="Avatar")

      .col-md-8
        p Para que las potencialidades de esta metodología emerjan, es imprescindible que el instructor medie el proceso de manera eficaz. Es decir, el instructor debe guiar cada fase del ciclo estructurando las tareas implicadas, debe promover la comunicación efectiva entre los aprendices y fomentar la reflexión sobre las actividades realizadas. #[strong Es importante verificar que las preguntas planteadas sean de calidad y que las hipótesis sean plausibles de confirmar o rechazar luego de la investigación]. En fin, dado que es un proceso complejo y que no brota naturalmente de los aprendices, el rol del instructor es acompañar cada paso, estimulando la emergencia de buenas preguntas o señalando las debilidades en la planificación de la investigación, entre otras cuestiones, para asegurar que el proyecto llegue a puerto (Harlen, 2013). Un andamiaje adecuado permitirá una comprensión más profunda de los contenidos tratados.

    .col-md-9
      .cajon.color-acento-contenido.p-5(style="background-color:#EDFFF6")
        p Una de las definiciones más referenciadas es la aportada por el National Research Council (2000, como se citó en Romero et al., 2016) a raíz de la publicación de los estándares para la enseñanza de las ciencias en los Estados Unidos. Se definió la indagación como:

    .bloque-texto-a.mt-5(style="background-color: #9DDFD3;")
      .row.m-0.align-items-center.justify-content-between.p-5
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/3.svg", alt="Avatar")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p Una actividad polifacética que incluye la observación, la formulación de preguntas, la búsqueda de información en libros y otras fuentes para conocer lo que ya se sabe sobre un tema, el diseño y planificación de investigaciones, la revisión de ideas atendiendo a la evidencia experimental disponible, el manejo de herramientas asociadas a la adquisición, análisis e interpretación de datos, la formulación de respuestas, explicaciones y predicciones y la comunicación de resultados. La indagación requiere la identificación de asunciones, la aplicación del pensamiento lógico y crítico y la consideración de explicaciones alternativas (p. 298).

    p.mt-5 #[strong Los procesos de aprendizaje basado en la indagación en el aula pueden ser de tres tipos:]

    .col-md-8.mt-5(style="margin:0 auto")
      figure
        img(src="@/assets/curso/tema6/4.svg", alt="Avatar")

    .col-md-10.mt-5(style="margin:0 auto")
      .tarjeta.color-primario.p-4
        .row.justify-content-around.align-items-center
          .col-4.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema6/5.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h3.mb-1 Video: Aprendizaje por indagación
                p A continuación, se sugiere observar la siguiente experiencia de aprendizaje por indagación, donde el acto de enseñar y aprender transcurre desde las preguntas, la vida cotidiana y el aprendizaje colaborativo. Adelante.  
              .col-sm-auto
                a.boton.color-btn-fondo.texto-blanco(href="https://www.youtube.com/watch?v=pN3YelHcl28&ab_channel=EscueladelMaestro" target="_blank")
                  span Ver video
                  i.fas.fa-file-download

    p.mt-5 El aprendizaje basado en la indagación abierta se organiza en torno a un ciclo con cinco fases principales (Pedaste et al., 2015; Harlen, 2013).

    .col-md-9.mt-5(style="margin:0 auto")
      .row
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema6/6.svg', alt='Avatar')

            .h3.text-center Fase 1.#[br] Orientación
            p.text-small En esta primera fase nace la curiosidad respecto del tema a investigar, que es seleccionado por el instructor o los aprendices. Se identifican las variables involucradas y se define el problema a investigar.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema6/7.svg', alt='Avatar')

            .h3.text-center Fase 2.#[br] Conceptualización
            p.text-small Se definen las preguntas de investigación y las hipótesis a probar.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema6/8.svg', alt='Avatar')

            .h3.text-center Fase 3.#[br] Investigación
            p.text-small En esta fase se planea y se ejecuta el proceso de recolección y análisis de datos para dar solución a las preguntas planteadas.

    .col-md-9.mt-5(style="margin:0 auto")
      .row
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema6/9.svg', alt='Avatar')

            .h3.text-center Fase 4.#[br] Conclusiones
            p.text-small En esta fase se extraen conclusiones a partir de la información obtenida y se comparan los resultados del análisis con la hipótesis planteada en un inicio.

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/tema6/10.svg', alt='Avatar')

            .h3.text-center Fase 5.#[br] Discusión
            p.text-small Se presentan los resultados del proceso y estos se comunican a otros. También se reflexiona sobre las etapas del ciclo, lo que puede llevar a la creación de nuevas preguntas de investigación.

    p.mt-5 Se da por finalizado este recorrido de aprendizaje enfocado en la fundamentación de algunas estrategias de aprendizaje que contribuyen a implementar la educación STEM en el aula. El reto de aquí en adelante es llevarlas al contexto particular y adaptarlas a los intereses de los aprendices ¿Qué tiene pensado hacer? Adelante con la experimentación.
        

</template>

<script>
export default {
  name: 'Tema6',
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
.tarjeta--boton
  background-color: #9DDFD3
  height: 100%;
.tarjeta--boton.color-secundario:active, .tarjeta--boton.color-secundario:focus, .tarjeta--boton.color-secundario:hover
  background-color: #FFC93C
</style>
