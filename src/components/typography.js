import Vue from 'vue'

const H2 = Vue.component('H2', {
  template: '<h2 class="py-3"><slot /></h2>'
})

const H3 = Vue.component('H3', {
  template: '<h3 class="py-2"><slot /></h3>'
})

const A = Vue.component('A', {
  props: ['href'],
  template: '<a class="text-blue-500" :href="href"><slot /></a>'
})

export {
  H2,
  H3,
  A
}
