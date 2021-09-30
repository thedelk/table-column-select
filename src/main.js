import Vue from 'vue'
import app from './app.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  render: h => h(app)
}).$mount('#app')
