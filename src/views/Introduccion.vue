<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.text-center.mb-4(data-aos="zoom-in") Estimado aprendiz, a través del siguiente video podrá conocer los aspectos relevantes que tratará este componente:

    .col-xl-10.m-auto
      figure(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/H-GybkzEAOQ?si=J8eBVTOtsUjHFYeL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      p.mt-5(data-aos="fade-right") Para la elaboración de este componente, se abordaron varios autores conocidos en #[strong mecanismos de seguimiento, control, evaluación y oportunidades de mejora de la gestión del talento humano], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de #[strong gestión de organizaciones deportivas].
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
