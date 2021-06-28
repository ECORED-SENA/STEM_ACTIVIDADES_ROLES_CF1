<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Aprendizaje basado en problemas (ABP)

    .tarjeta.text-white.p-5.mt-4(style="background: linear-gradient(rgb(157 223 211), rgb(49 50 111));")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Aprendizaje basado en problemas (ABP)
              p El aprendizaje basado en problemas es un enfoque que arranca con la presentación de un problema para el que los aprendices deben encontrar una respuesta.
            .col-sm-auto
              a.boton.boton--b.color-acento-secundario(:href="obtenerLink('downloads/Infografia CF1 pag 3 2. aprendizaje basado en problemas-1.pdf')" target="_blank")
                span Ver infografía
                i.fas.fa-file-download

    p.mt-5 A continuación, se ha diseñado un recurso de aprendizaje con el paso a paso del proceso de aprendizaje ABP. #[br] ¿Cuáles son los pasos que se deben realizar? Adelante con la exploración.

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Paso 1. Se presenta el problema." :icono="require('@/assets/curso/tema2/3.svg')")
        .row
          .col-md-7.mb-4.mb-md-0.p-5.pt-3
            .h4 Paso 1. Se presenta el problema.
            p.mt-3 Una vez identificado el propósito y resultados de aprendizaje, el instructor debe diseñar o seleccionar un problema que sea cercano a la realidad de los aprendices. 

            p.mt-3 Luego, el instructor presenta a los aprendices el problema inicial sobre el cual se realizará el análisis y la resolución del problema. También el instructor presenta el banco de problemas relacionado con el área a desarrollar, para que los aprendices escojan.
        
          .col-md-5
            figure.p-3
              img(src='@/assets/curso/tema2/2.svg', alt='Avatar')

      .py-4.py-md-5(titulo="Paso 2. Identificación de las necesidades." :icono="require('@/assets/curso/tema2/4.svg')")
        .row
          .col-md-7.mb-4.mb-md-0.p-5
            .h4 Paso 2. Identificación de las necesidades.
            p.mt-3 Los aprendices plantean las necesidades de aprendizaje que tienen para resolver el problema; el instructor tiene el rol de mediador para buscar los mejores medios para atender esas necesidades.

          .col-md-5
            figure.p-3
              img(src='@/assets/curso/tema2/7.svg', alt='Avatar')

      .py-4.py-md-5(titulo="Paso 3. Desarrollo del aprendizaje." :icono="require('@/assets/curso/tema2/5.svg')")
        .row
          .col-md-7.mb-4.mb-md-0.p-5.pt-3
            .h4 Paso 3. Desarrollo del aprendizaje.
            p.mt-3 Luego de la indagación de los esquemas previos de los aprendices y la orientación del instructor, el siguiente paso es encontrar información  y organizarla con la intención que ayude a la comprensión del problema. 

            p.mt-3 Los aprendices buscan la información de manera autónoma y la comparten de manera colaborativa, despejando dudas en conjunto con sus pares y el instructor como mediador del nuevo conocimiento adquirido.

          .col-md-5
            figure.p-3
              img(src='@/assets/curso/tema2/8.svg', alt='Avatar')

      .py-4.py-md-5(titulo="Paso 4. Solución del problema." :icono="require('@/assets/curso/tema2/6.svg')")
        .row
          .col-md-7.mb-4.mb-md-0.p-5.pt-3
            .h4 Paso 4. Solución del problema.
            p.mt-3 Cuando se presenta el problema, el instructor comienza a indagar ideas y  caminos que trazan los aprendices para la solución del problema. Es importante fomentar el trabajo colaborativo.  

            p.mt-3 Con los nuevos conocimientos se resuelve el problema. En este ejercicio pueden surgir nuevas preguntas problema, que podrán ser desarrolladas en otras actividades de clase.

          .col-md-5
            figure.p-3
              img(src='@/assets/curso/tema2/9.svg', alt='Avatar')

    p.mt-5 Del anterior recurso de aprendizaje, se puede afirmar que el objetivo final no es la resolución del problema. El problema se utiliza como sustento de la identificación de los temas de aprendizaje para los que los aprendices tienen que encontrar respuesta.

    p.mt-3 Como se puede observar, el movimiento educativo #[strong STEM] pretende aumentar perfiles científico-tecnológicos, y en el escenario de la educación recurre a metodologías didácticas activas, entre ellas el aprendizaje basado en problemas (ABP), como una opción privilegiada para la concreción de los objetivos de la educación #[strong STEM].


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.tabs-b__tab
  background-color: #EDFFF6
  border-right: 2px solid #9DDFD3
  border-bottom: 2px solid #9DDFD3
.tabs-b__tab--active
  background-color: #fff
  border-right: 2px solid #9DDFD3
  border-bottom: 2px solid #fff
</style>
