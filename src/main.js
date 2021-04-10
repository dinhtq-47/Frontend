import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import 'bootstrap'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { store } from './store'
import AOS from 'aos' 
import 'aos/dist/aos.css'
import './font/icon.js'
import './ui/element.js'
import './ui/at.js'

Vue.use(VueAxios,axios)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
    mode: 'history',
    routes
});


  new Vue({
  store,
  router,
  created() {
    AOS.init();
  },
  components: {
    
  },
  render: h => h(App),
}).$mount('#app')