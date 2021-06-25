// 组件代码demo框全局声明
// @Author: tangyx
// @Date: 2019-08-27

import DemoBlock from './demo-block.vue'

const Demo = {
    install: function (Vue) {
        Vue.component('DemoBlock', DemoBlock)
    }
}

export default Demo;