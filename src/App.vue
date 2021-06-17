<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
      footer
  BarraAvance

</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
}
</script>

<style lang="sass">
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
.banner-interno__titulo__icono i
  color: #12263f !important
.banner-principal__componente h1
  color: white !important
.banner-principal__descripcion p
  color: white !important
.banner-principal__img
  padding: 2rem 2rem 0 0 !important
.titulo-principal__numero span
  color: #31326F !important
.banner-interno__titulo__icono
  background-color: #fff !important
.banner-interno__titulo h1
  color: #ffffff !important
</style>
