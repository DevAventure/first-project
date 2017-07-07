import Vue from 'vue'
import Vuefire from 'vuefire'
import router from './router'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import firebase from './services/firebase'
import App from './App'
Vue.config.productionTip = false

Vue.use(Vuefire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  firebase: {
    database: firebase.database.ref('user')
  },
  render: h => h(App)
})
