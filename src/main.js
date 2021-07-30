import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/main.scss";
import 'github-markdown-css'

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror);

// 全局引入 element-ui 组件
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from "element-ui";

// 全局业务组件
import mainComponent from "@/components/index";
Vue.use(mainComponent);

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),

}).$mount('#app');


// 创建构造器
var Profile = Vue.extend({
    template: '<p style="background: red" v-if="shows">{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function () {
        return {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg',
            shows: false
        }
    },
    methods:{
        show:function () {
            this.shows = true;
        }
    }
})
// 创建 Profile 实例，并挂载到一个元素上。
const instance = new Profile()
instance.$mount('#mount-point')
document.body.appendChild(instance.$el)