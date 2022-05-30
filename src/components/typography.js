import Vue from 'vue'

const Header2 = Vue.component('Header2', {
  template: '<h2 class="py-3"><slot /></h2>'
})

const Header3 = Vue.component('Header3', {
  template: '<h3 class="py-2"><slot /></h3>'
})

const Link = Vue.component('Link', {
  props: ['href'],
  template: '<a class="text-blue-500" :href="href"><slot /></a>'
})

export {
  Header2,
  Header3,
  Link
}
