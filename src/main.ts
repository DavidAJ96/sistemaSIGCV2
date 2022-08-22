import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import $ from 'jquery';
// Importaciones del framework
import 'materialize-css/dist/css/materialize.css';
import 'material-icons/iconfont/material-icons.css';
import '@/assets/css/style.css';
window.M = require('materialize-css/dist/js/materialize.min.js');
window.$ = window.JQuery = $;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any; 
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
