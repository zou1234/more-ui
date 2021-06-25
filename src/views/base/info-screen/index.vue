<!--
    @Describe：模块组件
    @Author: zouwf
    @name:  2021/3/4
-->
<template>
    <div>
        <h1 class="l-title-intro">info-screen 信息筛选</h1>

        <es-modular
                title="基础用法"
                :code="require('./1.htm').default"
                :text="'whole属性用于配置全部'"
        >
            <info-screen :whole="'全部'" :data="nameList"></info-screen>
        </es-modular>

        <es-modular
                title="带红点标记"
                :code="require('./1.htm').default"
                :text="''"
        >
            <info-screen :whole="'全部'" :data="nameList2"></info-screen>
        </es-modular>
    </div>
</template>

<script>
    export default {
        name: "info-screen-demo",

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
                nameList: [
                    {
                        name: '01/01',
                        checked: false
                    },
                    {
                        name: '01/02',
                        checked: true
                    },
                    {
                        name: '01/03',
                        checked: true
                    },
                    {
                        name: '01/04',
                        checked: false
                    },
                    {
                        name: '01/05',
                        checked: true
                    },
                    {
                        name: '01/06',
                        checked: false
                    },
                    {
                        name: '01/07',
                        checked: true
                    },
                    {
                        name: '01/08',
                        checked: true
                    },
                    {
                        name: '01/09',
                        checked: true
                    }
                ],

                nameList2: [
                    {
                        name: '01/01',
                        checked: false
                    },
                    {
                        name: '01/02',
                        num: 0,
                        checked: true
                    },
                    {
                        name: '01/03',
                        num: 99,
                        checked: true
                    },
                    {
                        name: '01/04',
                        checked: false
                    },
                    {
                        name: '01/05',
                        num: 99,
                        checked: true
                    },
                    {
                        name: '01/06',
                        checked: false
                    },
                    {
                        name: '01/07',
                        num: 99,
                        checked: true
                    },
                    {
                        name: '01/08',
                        checked: true
                    },
                    {
                        name: '01/09',
                        num: 99,
                        checked: true
                    }
                ],
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

<style lang="scss" scoped></style>
