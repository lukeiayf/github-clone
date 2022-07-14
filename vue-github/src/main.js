import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'

// Recomendation of babeljs (https://babeljs.io/docs/en/babel-polyfill)
import 'core-js/stable'; // only stable feature also is possible with only `core-js`
import 'regenerator-runtime/runtime'; // To ensure that regeneratorRuntime is defined globally
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
