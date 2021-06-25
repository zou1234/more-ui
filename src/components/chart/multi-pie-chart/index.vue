<!--
    @Describe：多功能饼图
    @Author: zouwf
    @Date:  2020/11/17
-->
<template>
    <div :style="{ width: width, height: height }" ref="containerEcharts"></div>
</template>

<script>
    import echarts from "echarts";

    export default {
        name: "single-line-chart",
        props: {
            // 数据
            data: {
                type: [Array, Object],
                default() {
                    return [
                        // {'name': '危房', 'value': 53},
                        // {'name': '乱堆乱放', 'value': 94},
                        // {'name': '家庭暴力', 'value': 84},
                        // {'name': '自然灾害', 'value': 112},
                        // {'name': '医患纠纷', 'value': 132},
                    ]
                }
            },

            // 宽
            width: {
                type: [Number, String],
                default: '100%',
            },

            // 高度
            height: {
                type: [Number, String],
                default: '100%',
            },

            // 字体颜色
            fontColor:{
                type: String,
                default: '#fff',
            },

            // 控制饼图各项描述线显示
            islabelLine:{
                type: Boolean,
                default: true
            },

            // legend 距离底部的距离
            legendBottom: {
                type: [Number, String],
                default: 40,
            },

            // lengend 类型
            legendType:{
                type: String,
                default: 'circle',
            },

            // 单位
            unit:{
                type: String,
                default: '起',
            },

            // 重置饼图每一项描述
            lineFormatter: {
                type: Function
            },

            // 颜色
            color:{
                type: Array,
                default(){
                    return [
                        '#558ef6',
                        '#66cdb8',
                        '#7585a2',
                        '#f7c739',
                        '#ff6a4d',
                        '#83d0ef',
                        '#f5ac3c',
                        '#a285d2',
                        '#46a9a8'
                    ]
                }
            },

            // 饼图类型--可变成环型 ['50', '40%']
            radius:{
                type: [Array, Object],
                default(){
                    return ['0', '40%']
                }
            },
            //rich 样式
            rich:{
                type: [ Object],
                default(){
                    return {
                        white: {
                            color: '#F4B853',
                            align: 'center',
                            fontSize: 14,
                            height: 20,
                            lineHeight: 10,
                            fontFamily: "ft-stxihei"
                        },
                        blue: {
                            color: '#fff',
                            fontSize: 12,
                            height: 20,
                            lineHeight: 20,
                            fontFamily: "ft-stxihei"
                        }
                    }
                }
            },

            // 扇区圆心角展现
            // 1、'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小，
            // 2、'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            roseType:{
                default: false
            },

            // 控制 legend 是否显示
            isLegend:{
                type: Boolean,
                default: true
            },

            // 控制指示先长度
            labelLineLength:{
                type: [Number, String],
                default: 5
            },

            // 饼图带边框
            borderColor:{
                type: String,
                default: null,
            },

            // 中间标题配置
            titleConfig:{
                type: [Array, Object],
                default(){
                    return{
                        show: false,
                        text: '标题',
                        textFontSize: 14,
                        textColors: 'red',
                        subtext: 11,
                        subtextFontSize: 12,
                        subtextColor: 'yellow',
                    }
                }
            },

            center:{
                type: [Array, Object],
                default(){
                    return ['50%', '45%']
                }
            },

            // 布局类型 about -- 左右, updown -- 上下
            layout: {
                type: String,
                default: 'updown',
            },

            // 自定义legend
            legendFomatter:{
                type: Function,
            }

        },

        mixins: [],

        //组件注册
        components: {},

        // 数据
        data() {
            return {};
        },

        //计算属性
        computed: {

        },

        //方法
        methods: {
            init() {
                let {
                    islabelLine,
                    data,
                    legendBottom,
                    unit,
                    lineFormatter,
                    color,
                    radius,
                    roseType,
                    isLegend,
                    titleConfig,
                    center
                } = this;

                let ecPie = echarts.init(this.$refs["containerEcharts"]),

                    option = {
                        color: color,
                        legend: this.getLegend(),
                        title: {
                            show: titleConfig.show,
                            text:`{title|${titleConfig.text}}`,
                            left: "center",
                            top: 170,
                            subtext: '{data|12}',
                            textStyle: {
                                rich: {
                                    title: {
                                        // color: titleConfig.textColor,
                                        color: 'yellow',
                                        align: 'center',
                                        fontSize: 16,
                                        padding: [0, 5, -18, 8],
                                        lineHeight: 18
                                    }
                                }
                            },
                            subtextStyle: { //此处为普通写法，如果内容更为复杂，可以用rich
                                rich: {
                                    data: {
                                        color: '#ffcf0b',
                                        fontSize: 18,
                                        padding: [0, 0, -15, 0],
                                        align: 'center'
                                    }
                                }
                            }
                        },

                        tooltip: {
                            trigger: 'item',
                            backgroundColor: "#fff",
                            borderColor: "#fff",
                            formatter: this.formatter ? this.formatter : (data)=>{
                                // console.log(data);
                                //重写弹窗
                                let html = `<div class="formatter-item">${data.marker}${data.name}：${data.value + this.unit}</div>`

                                return html
                            }
                        },
                        grid: {
                            borderWidth: 0,
                            x: '20%',
                            y: '0%',
                            x2: '2%',
                            y2: '20%'
                        },

                        series: [{
                            type: 'pie',
                            radius: radius,
                            center: center,
                            selectedMode: false,
                            startAngle: '-35',
                            selectedOffset: 3,
                            roseType: roseType,
                            itemStyle: {
                                normal: {
                                    borderWidth: 0, //环形图边框
                                    borderColor: this.borderColor, //要与实际背景相融合
                                    shadowBlur: 30,
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    labelLine: {
                                        length: 10,
                                        length2: 20,
                                        normal: {
                                            lineStyle: {
                                                width: 1,
                                            }
                                        }
                                    }
                                }
                            },
                            labelLine:{
                                // normal:{
                                //     length: this.labelLineLength
                                // },
                                show: true,
                                length: 5,
                                length2: 5,
                                lineStyle: {
                                    color:"#fff",
                                    opacity: 0.15,
                                    shadowColor: "rgba(0, 0, 0, 0.15)"
                                }
                            },
                            data: data,
                            label: {
                                normal: {
                                    show: islabelLine,
                                    textStyle: {
                                        color: '#cacdd2',
                                        fontFamily: "ft-stxihei",
                                        fontSize: 16
                                    },
                                    formatter: lineFormatter ? lineFormatter : (params) =>{
                                        // console.log(params);
                                        // return '{white|' + params.name + '}{blue| '+ params.value + '\n' + '('+ params.percent + '%)' + '}';
                                        return '{white|' + params.name + '}{blue| \n' + '('+ params.percent + '%)' + '}';
                                    },
                                    rich: this.rich

                                }
                            },
                        }]
                    };

                ecPie.setOption(option);

                // window.onresize = function () {
                //     console.log("我执行了")
                //     ecPie.resize();
                // }
            },

            getLegend(){
                if (this.layout === 'about'){
                    return {
                        show: this.isLegend,
                        icon: this.legendType,
                        top: "22%",
                        right: '15%',
                        itemWidth: this.legendType === 'rect' ? 6 : 14,
                        itemHeight: 6,
                        width:28,
                        height:20,
                        padding: [0, 5],
                        itemGap: 10,
                        formatter: this.legendFomatter ? this.legendFomatter : function(name, data) {
                            return "{title|" + name + "}"
                        },
                        textStyle: {
                            rich: {
                                title: {
                                    fontSize: 14,
                                    lineHeight: 15,
                                    color: "#b4bec8"
                                },
                                num: {
                                    color: "#ffd04b"
                                },
                                percent: {
                                    color: "#b4bec8"
                                },
                            }
                        },
                    }
                }else {
                    return {
                        show: this.isLegend,
                        textStyle: {
                            color: this.fontColor,
                            fontSize: 14,
                            fontFamily: "微软雅黑",
                            padding: [1, 0, 0, 0]
                        },
                        left: "center",
                        bottom: this.legendBottom,
                        itemWidth: this.legendType === 'rect' ? 6 : 14,
                        itemHeight: 6,
                        icon: this.legendType,
                        formatter: function(data) {
                            return data
                        },
                    }
                }
            }
        },

        // 创建
        created() {
            this.$nextTick(() => {
                this.init();
            });
        },


        //  挂载
        mounted() {
        },

        // 监听
        watch: {
            data(val){
                this.init()
            }
        }
    };
</script>

<style lang="scss" scoped>
    /*/deep/ .formatter {
        padding: 10px 5px;
    }

    /deep/ .formatter-year {
        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        text-align: left;
    }

    /deep/ .formatter-item {
        color: rgba(0, 0, 0, .85);
        font-size: 16px;
        padding: 2px 0;
        text-align: left;
    }*/
</style>
