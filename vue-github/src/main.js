import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

// Recomendation of babeljs (https://babeljs.io/docs/en/babel-polyfill)
import 'core-js/stable'; // only stable feature also is possible with only `core-js`
import 'regenerator-runtime/runtime'; // To ensure that regeneratorRuntime is defined globally

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
