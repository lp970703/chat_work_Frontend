import Vue from 'vue'
import App from './App.vue'
import router from "./router"

import store from "./store"

import antDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(antDesign);

// import SuperFlow from 'vue-super-flow'
// import 'vue-super-flow/lib/index.css'
// Vue.use(SuperFlow)

// import hljs from "highlight.js"
// import 'highlight.js/styles/atom-one-dark.css'

// Vue.directive('highlight',function(el){
//   let blocks=el.querySelectorAll('pre code')
//   blocks.forEach((block)=>{
//     hljs.highlightBlock(block)
//   })
// })

import zh from './components/language/zh'
import en from './components/language/en'

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import VueClipBoard from 'vue-clipboard2'

Vue.use(VueClipBoard)

const i18n = new VueI18n({
  locale: localStorage.getItem('AIlang') || 'CN',
  messages: {
    'CN': zh,
    'EN': en
  }
});

import API from "./components/commonjs/api"
Vue.prototype.$API=API

import request from "./components/commonjs/http"
Vue.prototype.$request = request

import check from "./components/commonjs/check"
Vue.prototype.$check = check;

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
