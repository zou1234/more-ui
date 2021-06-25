<!--
    @Describe：主体内容
    @Author: zouwf
    @Date:  2021/1/11
-->
<template>
    <el-scrollbar>
        <div class="l-content">
            <router-view/>
        </div>
    </el-scrollbar>
</template>

<script>

    export default {
        name: "content",

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
    .l-content{
        display: inline-block;
        vertical-align: top;
        padding: 0 15% 0 20px;
        width: 100%;
        box-sizing: border-box;

    }

    .el-scrollbar{
        height: calc(100vh - 70px);
    }

</style>
