<!--
    @Describe：头部
    @Author: zouwf
    @Date:  2021/1/8
-->
<template>
    <div class="l-header">
        <div class="l-header__content">
            <h2>这里缺个名字</h2>
        </div>
    </div>
</template>

<script>

    export default {
        name: "header",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {},

        // 计算属性
        computed: {},

        // 数据
        data() {
            return {};
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

<style lang="scss" scoped>
    .l-header{
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
        height: 65px;
        background: #001938;

        .l-header__content{}

        h2{
            display: inline-block;
            margin-top: 14px;
            margin-left: 11%;
            color: #fff;
            /*border: 1px solid red;*/
        }
    }
</style>
