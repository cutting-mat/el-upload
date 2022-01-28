import Vue from 'vue'
import App from './App.vue'

// UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import '@/core/element-theme/index.css';
Vue.use(ElementUI);

import elUpload from "@/index";
import uploadConfig from "@/upload.config"
Vue.use(elUpload, uploadConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
