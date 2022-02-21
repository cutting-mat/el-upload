import Vue from 'vue'

// UI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import '@/core/element-theme/index.css';
Vue.use(ElementUI);

// 全局样式
import '@/test/assets/global.css';

import elUpload from "@/el-upload-plugin";
import uploadConfig from "@/upload.config"
Vue.use(elUpload, uploadConfig);

Vue.config.productionTip = false

import App from './test/Index.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
