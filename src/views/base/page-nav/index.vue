<!--
    @Describe：模块组件
    @Author: zouwf
    @Date:  2021/3/4
-->
<template>
    <div>
        <h1 class="l-title-intro">page-nav 锚点导航</h1>

        <es-modular
                title="使用案例"
                :code="require('./1.htm').default"
                :text="'height设置滚动条高度, data对象里name和页面dom的id对应上即可，scrollName定义滚动条父极dom的id默认是body'"
        >
            <div class="demo">
                <div class="demo-module" id="haha">
                    <div id="test1" class="demo-module__item">标题1</div>
                    <div id="test2" class="demo-module__item">标题2</div>
                    <div id="test3" class="demo-module__item">标题3</div>
                </div>
                <page-nav class="demo-module__nav"
                          :data="pageNav"
                          :height="'200px'"
                          :scroll-name="'haha'"
                ></page-nav>
            </div>
        </es-modular>
    </div>
</template>

<style lang="scss" scoped>
    .demo{
        position: relative;
    }

    .demo-module{
        height: 600px;
        width: 90%;
        overflow-y: scroll;
    }

    .demo-module__item{
        height: 800px;
        margin-bottom: 20px;
        background: rgba(89, 89, 89, .8);
        color: #fff;
        font-size: 20px;
    }

    .demo-module__nav{
        position: absolute;
        right: 0;
        top: 0
    }
</style>

<script>
    export default {
        name: "module-wrap2",

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
                pageNav:[
                    {
                        label: '标题1',
                        name: 'test1',
                    },
                    {
                        label: '标题2',
                        name: 'test2',
                    },
                    {
                        label: '标题3',
                        name: 'test3',
                    },
                ]
            };
        },

        // 方法
        methods: {},

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
