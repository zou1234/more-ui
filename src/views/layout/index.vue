<!--
    @Describe：整体布局
    @Author: zouwf
    @Date:  2021/1/11
-->
<template>
    <div class="l-layout">
        <es-header></es-header>

        <el-row class="l-layout__pop">
            <el-col :span="4">
                <es-menu></es-menu>
            </el-col>

            <el-col :span="20">
                <es-content class="l-layout__content"></es-content>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import esHeader from '@/views/layout/header'
    import esMenu from '@/views/layout/menu'
    import esContent from '@/views/layout/content'

    export default {
        name: "index",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {
            esHeader,
            esMenu,
            esContent
        },

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
    .l-layout{

        .l-layout__pop{
            width: 100%;
            box-sizing: border-box;
            padding-left: 10%;
        }

        .l-layout__content{}
    }
</style>
