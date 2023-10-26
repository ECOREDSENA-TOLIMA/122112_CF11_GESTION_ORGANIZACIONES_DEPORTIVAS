<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") En resumen, se identificaron diversas oportunidades de mejora como resultado del proceso de evaluación. Sin embargo, se consideró esencial la selección de aquellas que aportaron un mayor valor en consonancia con los objetivos estratégicos de la organización. Una vez identificadas las áreas de mejora, se procedió a analizar las causas subyacentes a cada una de ellas. Es importante destacar que cada oportunidad de mejora estuvo asociada a múltiples causas que requirieron intervención a través de un plan estructurado. A continuación, se presenta un mapa conceptual que resume la información de este proceso.

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
