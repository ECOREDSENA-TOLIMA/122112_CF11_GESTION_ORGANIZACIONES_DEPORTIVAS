<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Plan de mejoramiento conforme al resultado de la autoevaluación 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Luego del proceso de evaluación, se identifican el nivel de cumplimiento de los objetivos y las metas preestablecidas. Asimismo, se identifican aspectos susceptibles de mejora, tanto desde aspectos individuales, colectivos, de proceso u área, como generales, en materia organizacional. El proceso de gestión humana, luego de identificar estas oportunidades de mejora de cada uno de sus procesos, así como las de evaluación de desempeño del trabajador, establece un plan enfocado a contrarrestar dichas falencias y mejorar los procesos. 
    
    h4.mt-5(data-aos="fade-right") #[i.fas.fa-angle-right(style="color:#FF6B00;")] Plan de mejora: definición, tipos y metodología
    p.mt-4(data-aos="fade-left") El plan de mejora es un proceso que se utiliza para alcanzar la calidad total y mejora de las organizaciones de manera progresiva, para así obtener resultados eficientes y eficaces. El punto clave del plan de mejora es conseguir una relación entre los procesos y el personal, generando una sinergia que contribuya al progreso constante. Existen diferentes tipos de plan de mejoramiento, a continuación, se describen los más conocidos:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-6.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/2.png")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          div.text-small(numero="1" titulo="Método Kaizen") 
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Según sus siglas, se refiere a “cambio a mejor”. 
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Se elabora un plan donde se incluye a todos los trabajadores de la organización. 
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Se crean y evalúan grupos de trabajo.
          div.text-small(numero="2" titulo="Método Lean Manufacturing") 
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Cualquier proceso que no genere valor para el cliente es un desperdicio y debe ser eliminado. 
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Lograr que el trabajo se realice lo más rápido posible manteniendo la calidad. 
          div.text-small(numero="3" titulo="Método PDCA") 
            ul.lista-ul.mb-0
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Planear, hacer, chequear, actuar.
              li.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                | Ciclo clásico enfocado a la mejora continua. 
    
    p.mt-5.fw-bold.text-center(data-aos="fade-right") La metodología para aplicar el plan de mejora es la siguiente:

    .row.mt-5
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #FFCA00 solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#FFCA00;top:-25px;position:absolute;") 1
          p.mb-0.text-center.mt-3 Identificar las necesidades de mejora.
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #FE502D solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#FE502D;top:-25px;position:absolute;") 2
          p.mb-0.text-center.mt-3 Diagnosticar las causas del problema.
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #2D54FE solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold.text-white(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#2D54FE;top:-25px;position:absolute;") 3
          p.mb-0.text-center.mt-3 Definir objetivos.
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #FFCA00 solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#FFCA00;top:-25px;position:absolute;") 4
          p.mb-0.text-center.mt-3 Seleccionar las acciones de mejora.
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #FE502D solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#FE502D;top:-25px;position:absolute;") 5
          p.mb-0.text-center.mt-3 Establecer un plan de acción. 
      .col-lg.col-md-6.mb-5.mb-lg-0(data-aos="zoom-in")
        .h-100.bg-white.p-4(style="border:3px #2D54FE solid;border-radius:20px;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .m-auto.text-center.d-flex.justify-content-center
            .text-center.fw-bold.text-white(style="border-radius:100%;padding:.7rem 1.2rem;background-color:#2D54FE;top:-25px;position:absolute;") 6
          p.mb-0.text-center.mt-3 Controlar el desarrollo del plan.
    
    br
    h4.mt-lg-5(data-aos="fade-right") #[i.fas.fa-angle-right(style="color:#FF6B00;")] Plan de mejora basado en autoevaluación

    .row.mt-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p El enfoque se dirige hacia la construcción de un plan de mejora para el proceso de gestión de recursos humanos. El primer paso implica la identificación de las necesidades de mejora. A continuación, se enumeran las necesidades más frecuentes en este proceso:
        ol.lista-ol--cuadro.lista-ol--separador.mt-4
          li.d-flex 
            .lista-ol--cuadro__vineta(style="background-color:#FE502D;")
              span 1
            div #[strong Capacitación:] escasa cobertura, falta de interés por parte de los trabajadores, metodologías de capacitación poco efectivas, temas poco coherentes con las necesidades del cargo, etc.
          li.d-flex 
            .lista-ol--cuadro__vineta(style="background-color:#FE502D;")
              span 2
            div #[strong Incentivos:] escasos programas de incentivos, reconocimientos, recompensas.
          li.d-flex 
            .lista-ol--cuadro__vineta(style="background-color:#FE502D;")
              span 3
            div #[strong Selección y reclutamiento:] procesos de selección inadecuados, metodologías ineficaces y criterios de selección inapropiados.
          li.d-flex 
            .lista-ol--cuadro__vineta(style="background-color:#FE502D;")
              span 4
            div #[strong Perfil de cargo:] falta de programas para definir perfiles de cargo y descripciones inadecuadas de las responsabilidades laborales.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/3.png")


    


</template>

<script>
export default {
  name: 'Tema2',
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
<style lang="sass">
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 1px #AFAFAF
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #FFFAE5
.linea-tiempo-d.color-acento-contenido .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #FFFAE5 !important
  color: #12263F
</style>
