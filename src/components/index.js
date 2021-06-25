// 本框架业务组件
import esModular from './common/es-modular'
import esCode from './common/es-code'

// 基本组件
import multiPieChart from './chart/multi-pie-chart'
import moduleWrap from './base/module-wrap'
import infoText from './base/info-text'
import cardShell from './base/card-shell'
import infoScreen from './base/info-screen'
import pageNav from './base/page-nav'

const components={
    install:function(Vue){
        // 本框架业务组件
        Vue.component('es-modular', esModular);
        Vue.component('es-code', esCode);

        // 基础组件
        Vue.component('multi-pie-chart', multiPieChart);
        Vue.component('module-wrap', moduleWrap);
        Vue.component('info-text', infoText);
        Vue.component('card-shell', cardShell);
        Vue.component('info-screen', infoScreen);
        Vue.component('page-nav', pageNav);
    }
};

export default components