import Vue from 'vue'

Vue.component(
  'hello-world',
  require('./components/hello-world.vue').default
);

new Vue({
  el: '#app',
});