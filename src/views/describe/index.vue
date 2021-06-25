<!--
    @Describe：
    @Author: zouwf
    @Date:  2021/1/8
-->
<template>
    <div class="simple-echarts">
        <multi-pie-chart
                :data="pieData"
                :radius="[50, '40%']"
                :center="['30%', '35%']"
                :islabelLine="false"
                :legend-type="'rect'"
                :layout="'about'"
        ></multi-pie-chart>
    </div>
</template>

<script>
    import multiPieChart from "@/components/multi-pie-chart"
    export default {
        name: "index",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {
            multiPieChart
        },

        // 计算属性
        computed: {},

        // 数据
        data() {
            return {
                pieData:[
                    {'name': '危房多一个字', 'value': 53},
                    {'name': '乱堆乱放多一个字', 'value': 94},
                    {'name': '家庭暴力多一个字', 'value': 84},
                    {'name': '自然灾害多一个字', 'value': 112},
                    {'name': '医患纠纷多一个字', 'value': 132},
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

<style lang="scss" scoped>
    .simple-echarts{
        width: 1200px;
        background: #0b253e;
        margin: 50px auto;
        text-align: center;
    }
</style>
