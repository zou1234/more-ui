<!--
    @Describe：线柱状图混合
    @Author: zouwf
-->
<template>
    <div :style="{ width: width, height: height }"
         ref="containerEcharts"
         @mouseleave="handleMouseLeave"
         @mouseover="handleMouseover"

    ></div>
</template>

<script>
    import echarts from "echarts";
    import elementResizeDetectorMaker from "element-resize-detector";

    export default {
        name: "bar-line-chart",

        props: {
            // 宽
            width: {
                type: [Number, String],
                default: '500px',
            },

            //
            legendHeight: {
                type: Number,
                default: 40
            },

            // 高度
            height: {
                type: [Number, String],
                default: '300px',
            },

            // 折线颜色
            color: {
                type: [Array, Object],
                default() {
                    return ['#558ef6', '#66cdb8', '#7585a2']
                }
            },

            // X轴数据
            xData: {
                type: [Array, Object],
                default() {
                    return ["2011", "2012", "2013", "2014", "2015", "2016", "2017"]
                }
            },

            /**
             * @describe：Y轴数据（支持 Array 和 Object )
             * @param：name —— 名称
             * @param：type —— 类型 （默认"line"）
             * @param：data —— 数据
             * @param：color —— 折线颜色 （注意！这里配置的颜色权限高于color数组传入的颜色）
             * 其他属性支持series里面属性直接写入每一项会自动合并到series配置
             * */
            yData: {
                type: [Array, Object],
                default() {
                    return [
                        // {
                        //     type: 'bar',
                        //     name: '洪涝灾害',
                        //     data: [1138, 1180, 1217, 1478, 1944, 1096, 1352]
                        // },
                        // {
                        //     name: '地质灾害',
                        //     data: [1069, 1414, 1357, 1193, 1373, 1342, 1354],
                        // },
                        // {
                        //     name: '交通事故',
                        //     data: [959, 685, 867, 762, 876, 683, 843],
                        // }
                    ]
                }
            },

            // tooltip重置
            formatter: {
                type: Function
            },

            // 线上的点重置
            pointSize: {
                type: [Number, String],
                default: 1,
            },

            // y轴单位
            yUnit:{
                type: String,
                default: '',
            },
            // y轴单位颜色
            yUnitColor:{
                type: String,
                default: '#c8cdd7',
            },
            // 横轴名称字体大小
            xAxisFontSize:{
                type: Number,
                default: 14,
            },
            // 横轴名称字体是否加粗
            xAxisfontWeight:{
                type: Boolean,
                default: false,
            },
            // 字体颜色
            fontColor:{
                type: String,
                default: '#fff',
            },

            // lengend 类型
            legendType:{
                type: String,
                default: 'circle',
            },

            // 是否显示legend
            isLegend:{
                type: Boolean,
                default: true,
            },

            // 线上的点重置
            // top -- 在上面，
            // bottom -- 在下面
            legendPosition:{
                type: [Number, String],
                default: 'bottom',
            },

            // y轴网格线颜色
            yLineColor:{
                type: String,
                default: '#fff',
            },

            // y轴网格线类型
            yLineType:{
                type: String,
                default: 'dashed',
            },

            // 单位
            unit:{
                type: String,
                default: '起',
            },

            // 折线顶点是否圆滑
            smooth:{
                type: Boolean,
                default: false,
            },

            // 网格高度--默认自适应--auto
            gridHeight:{
                type:[Number,String],
                default:'auto'
            },
            // 图表距离顶部高度
            gridTop:{
                type:Number,
                default:50
            },

            // 横轴名称旋转角度--默认0为不旋转
            rotateNum:{
                type:Number,
                default:0
            },
            // 两个柱子之间的距离
            barGapNum:{
                type:String,
                default:'20%'
            },
            // 是否间隔名称
            interval: {
                type: Number,
                default: 0
            },

            // 柱子宽度
            barWidth: {
                type: [Number, String],
                default: ''
            },
            // 是否缩放
            isZoom: {
                type: Boolean,
                default: false
            },
            // 缩放范围
            zoomScope: {
                type: Array,
                default() {
                    return [0, 50]
                }
            },

            // Y轴是否可以为小数
            minInterval: {
                default: true
            }
        },

        //组件注册
        components: {},

        // 数据
        data() {
            return {
                // 判断是否全部为柱状图
                isAllBar: [],

                // echarts 容器
                echarts: null,

            };
        },

        //计算属性
        computed: {

        },

        //方法
        methods: {
            /**
             * @describe：鼠标离开图表区域
             * */
            handleMouseLeave(){
                this.$emit('mouseLeave');
            },

            /**
             * @describe：鼠标离开图表区域
             * */
            handleMouseover(){
                this.$emit('mouseover');
            },

            /**
             * @describe：初始化
             * */
            init() {
                const {yData, xData, color} = this;

                this.echarts = echarts.init(this.$refs["containerEcharts"]);

                this.echarts.setOption(this.getOption(yData, xData, color));
            },

            /**
             * @describe：颜色筛选
             * */
            getItemColor(data){

                let item = [];
                data.forEach((v)=>{
                    item.push({
                        offset: v.offset,
                        color: v.color
                    })
                });
                return item;

                return data.map((v)=>{
                    item.push({
                        offset: v.offset,
                        color: v.color
                    })
                });

            },

            /**
             * @describe：获得series配置项
             * @param：data.color 数组，对象两种情况
             * @param：color 数组情况
             * */
            getSeries(data) {
                let itemStyleColor;
                const that = this;

                // 判断柱状图是否需要渐变!!!
                if(data.hasOwnProperty('color')){

                    if(data.color instanceof Array){
                        if(data.color.length > 1){
                            itemStyleColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, that.getItemColor(data.color))
                        }else {
                            itemStyleColor = data.color ? data.color : null
                        }
                    }else {
                        itemStyleColor = data.color ? data.color : null
                    }

                }else {
                    const isArray = that.color.every((v) => v instanceof Object);

                    if(isArray){
                        itemStyleColor = new echarts.graphic.LinearGradient(0, 1, 0, 0, this.getItemColor(that.color))

                    }else {
                        itemStyleColor = data.color ? data.color : null
                    }
                }

                return Object.assign(data, {
                    name: data.name,
                    type: data.type ? data.type : 'line',
                    smooth: this.smooth,
                    symbolSize: this.pointSize,
                    barWidth: this.barWidth ? this.barWidth : 20,
                    barGap:this.barGapNum,
                    data: data.data,
                    lineStyle: {
                        color: data.color ? data.color : null,
                    },

                    // itemStyle: {
                    //     normal: {
                    //         color: data.color ? data.color : null,
                    //     },
                    //     emphasis: {
                    //         // color: '#fff',
                    //         borderWidth: 3,
                    //         shadowColor: 'rgba(255, 255, 255)',
                    //         shadowBlur: 0
                    //     }
                    // },

                    itemStyle: {
                        normal: {
                            color: itemStyleColor
                        }
                    },

                });
            },

            /**
             * @describe：判断多线和单线情况
             * @param：{data} Array 或者Object 两种情况
             * */
            seriesData(data) {
                if (Array.isArray(data)) {
                    return data.map((v) => {
                        return this.getSeries(v)
                    });
                } else {
                    this.getSeries(data)
                }
            },

            /**
             * @describe：配置option 项
             * */
            getOption(yData, xData, color) {
                const seriesData = this.seriesData(yData);

                return {
                    color: color ? color : '',
                    dataZoom:this.isZoom==false? [] :[
                        {
                            type: "inside",
                            filterMode: "none",
                            zoomLock: true,
                            start: this.zoomScope[0],
                            end: this.zoomScope[1]
                        }
                    ],
                    tooltip: {
                        trigger: 'axis',
                        backgroundColor: "#fff",
                        extraCssText: "box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);",
                        shadowColor: '#1eb597',
                        axisPointer: {
                            lineStyle: {
                                color: '#d0d7dd'
                            }
                        },
                        formatter: this.formatter ? this.formatter : (data) => {
                            //重写弹窗
                            let html = ``;
                            data.forEach((v) => {
                                html += `<div class="formatter-item">${v.marker}${v.seriesName}：${v.value + this.unit}</div>`
                            });

                            return `<div class="formatter"><div class="formatter-year">${data[0].axisValue}</div>${html}</div>`
                        }
                    },

                    legend: {
                        show: this.isLegend,
                        textStyle: {
                            color: this.fontColor,
                            fontFamily: "微软雅黑",
                            fontSize: 14,
                            padding: [1, 0, 0, 0]
                        },
                        top: this.legendPosition === 'top' ? 10 : null,
                        bottom: 20,
                        itemGap: 10,
                        left: "center",
                        itemWidth: this.legendType === 'rect' ? 8 : 14,
                        itemHeight: 6,
                        icon: this.legendType
                    },

                    grid: {
                        // x: 40,
                        // y: 20,
                        // x2: 0,
                        // y2: 45,
                        left: 0,
                        right: 20,
                        top: this.gridTop,
                        borderWidth: 0,
                        height:this.gridHeight,
                        containLabel: true,
                        bottom: this.isLegend ? this.legendHeight: 20
                    },
                    calculable: true,
                    title: [
                        {
                            show: this.yUnit,
                            text: this.yUnit,
                            padding: [10, 0],
                            textStyle: {
                                color: "#ccc",
                                fontSize: 14,
                                fontWeight: "normal"
                            }
                        }
                    ],
                    xAxis: [{
                        type: 'category',
                        boundaryGap: this.isAllBar.length > 0,
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            interval: this.interval,
                            rotate:this.rotateNum,
                            textStyle: {
                                color: this.fontColor,
                                fontFamily: "微软雅黑",
                                fontSize: this.xAxisFontSize,
                                fontWeight:this.xAxisfontWeight == true ? 600 : 400
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                        },
                        data: xData
                    }],

                    yAxis: [{
                        type: 'value',
                        minInterval: !this.minInterval ? 1 : null,
                        axisLabel: {
                            margin: 15,
                            textStyle: {
                                color: this.fontColor,
                                fontFamily: "微软雅黑",
                                fontSize: 16
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: this.yLineColor,
                                type: this.yLineType
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: this.yLineColor,
                                type: 'dashed'
                            }
                        }
                    }],

                    series: seriesData
                }
            },

        },

        // 创建
        created() {
            this.$nextTick(() => {
                this.init();
            });
        },

        //  挂载
        mounted() {

            // 判断是否全部为bar类型
            this.isAllBar = this.yData.filter((v) =>{
                if(v.hasOwnProperty('type')){
                    return v.type === 'bar'
                }
            });


            //监听窗口变化,重置图表
            elementResizeDetectorMaker().listenTo(this.$refs["containerEcharts"], _=> {
                this.$nextTick(function () {
                    this.echarts.resize();
                })
            })

        },


        // 监听
        watch: {
            yData(val){
                this.init()
            },
            xData(val){
                this.init()
            }
        }
    };
</script>

<!--<style lang="scss" scoped>-->
    <!--/deep/ .formatter {-->
        <!--padding: 10px 5px;-->
    <!--}-->

    <!--/deep/ .formatter-year {-->
        <!--color: rgba(0, 0, 0, .65);-->
        <!--font-size: 14px;-->
        <!--text-align: left;-->
    <!--}-->

    <!--/deep/ .formatter-item {-->
        <!--color: rgba(0, 0, 0, .85);-->
        <!--font-size: 16px;-->
        <!--padding: 2px 0;-->
        <!--text-align: left;-->
    <!--}-->
<!--</style>-->
