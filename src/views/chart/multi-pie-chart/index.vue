<!--
    @Describe：
    @Author: zouwf
    @Date:  2021/1/8
-->
<template>
    <div class="se-box">
        <es-modular title="常规类型" :background="'#344670'">
            <multi-pie-chart
                    :height="'280px'"
                    :data="pieData"
                    :radius="[0, '50%']"
                    legendBottom="0"
                    :isLegend="false"
            ></multi-pie-chart>
            <div slot="code">
                <es-code :code="code"></es-code>
            </div>
        </es-modular>

        <es-modular title="圆环珊瑚" :background="'#344670'">
            <multi-pie-chart
                    :height="'280px'"
                    :data="pieData"
                    :roseType="'radius'"
                    :radius="[40, '50%']"
                    :legend-type="'rect'"
            ></multi-pie-chart>
            <div slot="code">
                <es-code :code="code"></es-code>
            </div>
        </es-modular>

        <es-modular title="带边框类型" :background="'#344670'">
            <multi-pie-chart
                    :height="'280px'"
                    :data="pieData"
                    :radius="[50, '50%']"
                    :legend-type="'rect'"
                    :border-color="'#fff'"
            ></multi-pie-chart>

            <div slot="code">
                <es-code :code="code"></es-code>
            </div>
        </es-modular>

        <es-modular title="圆环配置，带标题" :background="'#344670'">
            <multi-pie-chart
                    :height="'280px'"
                    :data="pieData"
                    :radius="[50, '50%']"
                    :islabelLine="false"
                    :legend-type="'rect'"
                    :title-config="{show: true, text: '这是标题'}"
            ></multi-pie-chart>
            <div slot="code">
                <es-code :code="code"></es-code>
            </div>
        </es-modular>

        <es-modular title="左右布局" :background="'#344670'">
            <div style="width: 500px">
                <multi-pie-chart
                        :height="'280px'"
                        :data="pieData"
                        :radius="[50, '50%']"
                        :center="['30%', '35%']"
                        :islabelLine="false"
                        :legend-type="'rect'"
                        :layout="'about'"
                ></multi-pie-chart>
            </div>

            <div slot="code">
                <es-code :code="code"></es-code>
            </div>
        </es-modular>
    </div>
</template>

<script>
    import multiPieChart from "@/components/chart/multi-pie-chart"

    export default {
        name: "index",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {
            multiPieChart,
        },

        // 计算属性
        computed: {},

        // 数据
        data() {
            return {
                cmOption: {
                    dedentCode: '',
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: 'sublime',
                    mode: 'text/x-vue',
                    theme: 'base16-dark',
                    extraKeys: {
                        'F11' (cm) {
                            cm.setOption('fullScreen', !cm.getOption('fullScreen'))
                        },
                        'Esc' (cm) {
                            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false)
                        }
                    }
                },
                code: '<multi-pie-chart\n' +
                '                :data="pieData"\n' +
                '                :radius="[50, \'40%\']"\n' +
                '                :center="[\'30%\', \'35%\']"\n' +
                '                :islabelLine="false"\n' +
                '                :legend-type="\'rect\'"\n' +
                '                :layout="\'about\'"\n' +
                '        ></multi-pie-chart>',
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
    /deep/.el-button{
        width: 1100px;
    }

    .se-box{
        margin: 0 auto;

        .se-box{
            padding: 15px 0;
            text-align: center;
            cursor: pointer;
            color: #ccc;
            border-top: 1px solid #ccc;
        }

    }
</style>
