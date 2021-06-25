<!--
    @Describe：模块组件
    @Author: zouwf
    @Date:  2021/3/4
-->
<template>
    <div>
        <h1 class="l-title-intro">module-wrap 模块外壳</h1>
        <es-modular title="默认"
                    :code="require('./1.htm').default"
                    :text="'啥也不配置就是啥也没有，只有一个背景色默认是#fff！！！'"
        >
            <module-wrap>
                <div style="height: 200px"></div>
            </module-wrap>
        </es-modular>

        <es-modular title="普通标题"
                    :code="require('./2.htm').default"
        >
            <module-wrap title="这是一个测试标题">
                <div style="height: 200px"></div>
            </module-wrap>
        </es-modular>

        <es-modular title="标题右侧自定义"
                    :code="require('./3.htm').default"
        >
            <module-wrap title="这是一个测试标题">
                <div slot="title-right">
                    <el-button type="primary" size="mini">右侧自定义按钮</el-button>
                </div>
                <div style="height: 200px"></div>
            </module-wrap>
        </es-modular>

        <es-modular title="标题切换类型"
                    :code="require('./4.htm').default"
        >
            <module-wrap
                    class="approval-page"
                    :defaultTabActive="'first'"
                    :tabData="tabData"
                    @handleClickTab="handleClickTab"
            >
                <div style="height: 200px"></div>
            </module-wrap>
        </es-modular>

        <es-modular title="自定义头部"
                    :code="require('./5.htm').default"
        >
            <module-wrap>
                <div slot="header" style="padding: 20px; border-bottom: 1px solid #ccc">
                    自定义头部
                </div>
                <div style="height: 200px"></div>
            </module-wrap>
        </es-modular>

    </div>
</template>

<script>

    export default {
        name: "index",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {},

        // 计算属性
        computed: {},

        // 过滤
        filters: {},

        // 数据
        data() {
            return {
                tabData: [
                    {
                        label: '北京市 (128)',
                        name: 'first'

                    },{
                        label: '上海市 (123)',
                        name: 'second'

                    },{
                        label: '厦门市',
                        name: 'three'
                }],
            };
        },

        // 方法
        methods: {
            handleClickTab(active){

            }
        },

        // 创建
        created() {
        },

        // 挂载
        mounted() {
        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .module-wrap{
        background: rgba(204, 204, 204, .2);
    }
</style>
