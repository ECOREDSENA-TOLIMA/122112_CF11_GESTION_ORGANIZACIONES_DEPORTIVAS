<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Concepto y características del evento
    
    .cont_1_1.pt-4.pt-lg-0
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p La gestión humana, así como el resto de los procesos que integran las organizaciones, debe ser evaluada con el fin de medir su desempeño frente a los objetivos planteados. La eficacia y eficiencia de este proceso juega un papel fundamental e incide directamente sobre el desempeño global de la organización. De antemano, es preciso tener claro el concepto de evaluación, gestión humana, sus componentes y cómo evaluar dicho proceso, pues, en todo proyecto, luego de pasar las fases de diagnóstico, planeación, ejecución y control, se procede a determinar, mediante la evaluación, qué tan exitoso o no fue el proyecto. 
          .mt-5.pb-lg-4
            p.fw-bold En este sentido, la evaluación brinda respuestas a las siguientes preguntas:
            ol.lista-ol.mt-3.ps-4.mb-0
              li.d-flex
                span.text-bold(style="color:#FE502D;") 1. 
                | ¿Se cumplieron los objetivos planteados en la fase de planeación?
              li.d-flex
                span.text-bold(style="color:#FE502D;") 2. 
                | ¿Se alcanzaron las metas propuestas?
              li.d-flex
                span.text-bold(style="color:#FE502D;") 3. 
                | ¿Se ejecutó conforme al tiempo y recursos planteados?
              li.d-flex
                span.text-bold(style="color:#FE502D;") 4. 
                | ¿Se desarrolló la totalidad de actividades programadas?
              li.d-flex.mb-0
                span.text-bold(style="color:#FE502D;") 5. 
                | ¿Las diferentes partes interesadas (especialmente los clientes – usuarios) quedaron satisfechas con el resultado del proyecto?
        .col-lg-5(data-aos="fade-left" style="place-self:end;")
          figure.m-auto.col-6.col-lg-12.col-md-6
            img(src="@/assets/curso/tema1/1.png")
    .cont_1_2.pt-5
      p(data-aos="fade-right") Por lo tanto, la evaluación deberá articular toda la información veraz y oportuna del proyecto, con el fin de brindar un veredicto sobre su resultado. El concepto de evaluación, según el diccionario de la Real Academia Española, refiere a señalar el valor a algo, además, que comprende los siguientes elementos: 
      .col-xl-8.mt-4.m-auto.col-lg-10
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema1/3.svg")
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/4.png")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        p Ander-Egg (2000), establece que la evaluación es una forma de investigación social aplicada, sistemática, planificada y dirigida; encaminada a identificar, obtener y proporcionar, de manera válida y fiable, datos e información suficiente y relevante en que apoyar un juicio acerca del mérito y el valor de los diferentes componentes de un programa (tanto en la fase de diagnóstico, programación o ejecución), o de un conjunto de actividades específicas que se realizan, han realizado o realizarán, con el propósito de producir efectos y resultados concretos; comprobando la extensión y el grado en que dichos logros se han dado, de forma tal que sirva de base o guía para una toma de decisiones racional e inteligente entre cursos de acción, o para solucionar problemas y promover el conocimiento y la comprensión de los factores asociados al éxito o al fracaso de sus resultados.
    
    p.mt-5(data-aos="fade-right") Colomer (1979) define la evaluación como: un proceso crítico referido a acciones pasadas, con la finalidad de constatar, en términos de aprobación o desaprobación, los progresos alcanzados en el plan propuesto y hacer, en consecuencia, las modificaciones necesarias de las actividades futuras.
    p(data-aos="fade-left") Cohen y Franco (1988) lo definen en idéntico sentido: Evaluar es fijar el valor de una cosa, para hacerlo se requiere efectuar un procedimiento mediante el cual se compara aquello a evaluar respecto de un criterio o patrón determinado.

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p.fw-bold En sí, un proceso de evaluación posibilita conocer las características de las personas y desde allí poder:
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/5.png")


      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  bottom: 1px
  height: 60%
  background-color: #FFCA00
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-position: center
</style>
