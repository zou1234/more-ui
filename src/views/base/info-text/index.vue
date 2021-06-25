<!--
    @Describe：模块组件
    @Author: zouwf
    @Date:  2021/3/4
-->
<template>
    <div>
        <h1 class="l-title-intro">info-text文本列表</h1>

        <es-modular
                title="基础用法"
                :code="require('./1.htm').default"
                :text="'label-width设置属性宽, data对象里label value 字段分别定义属性和属性名称，column属性定义列数'"
        >
            <info-text :data="baseInfo" label-width="150px" :column="2"></info-text>
        </es-modular>

        <es-modular
                title="带图标类型"
                :code="require('./2.htm').default"
        >
            <info-text :data="iconInfo" label-width="150px" :column="3"></info-text>
        </es-modular>

        <es-modular
                title="自定义某一项"
                :code="require('./3.htm').default"
        >
            <info-text :data="infoText">
                <template slot-scope="scope">
                    <div v-if="scope.data.label === '人员类别'">
                        <el-button type="primary" size="mini">{{scope.data.text}}</el-button>
                    </div>
                </template>
            </info-text>
        </es-modular>
    </div>
</template>

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
                // 人员基本标签
                baseInfo:[
                    {
                        label: '曾用名',
                        value: '张三',
                    },
                    {
                        label: '户籍地派出所',
                        value: '后溪派出所',
                    },
                    {
                        label: '现住地派出所',
                        value: '集美派出所',
                    },
                    {
                        label: '联系电话',
                        value: '189875487547',
                    },
                    {
                        label: '宗教信仰',
                        value: '无'
                    },
                    {
                        label: '出生日期',
                        value: '1999-12-11'
                    },
                    {
                        label: '政治面貌',
                        value: '团员'
                    },
                    {
                        label: '自有车辆',
                        value: '闽D12343'
                    },
                    {
                        label: '婚姻状况',
                        value: '已婚'
                    },
                    {
                        label: '学历',
                        value: '大专',
                    },
                    {
                        label: '国籍',
                        value: '中国'
                    },
                    {
                        label: '工作所处',
                        value: '集美'
                    },
                    {
                        label: '兵役状况',
                        value: '未服役'
                    },
                    {
                        label: '性格特征',
                        value: '孤僻'
                    }
                ],

                // 图标类型
                iconInfo:[
                    {
                        label: '曾用名',
                        value: '张三',
                        icon: 'el-icon-success',
                        iconColor: "#6ac353"
                    },
                    {
                        label: '户籍地派出所',
                        value: '后溪派出所',
                        icon: 'el-icon-info',
                        iconColor: "red"
                    },
                    {
                        label: '现住地派出所',
                        value: '集美派出所',
                        icon: 'el-icon-success',
                        iconColor: "#6ac353"
                    },
                    {
                        label: '联系电话',
                        value: '189875487547',
                    },
                    {
                        label: '宗教信仰',
                        value: '无',
                    },
                    {
                        label: '出生日期',
                        value: '1999-12-11'
                    },
                    {
                        label: '政治面貌',
                        value: '团员'
                    },
                    {
                        label: '自有车辆',
                        value: '闽D12343'
                    },
                    {
                        label: '婚姻状况',
                        value: '已婚'
                    },
                    {
                        label: '国籍',
                        value: '中国'
                    },
                    {
                        label: '工作所处',
                        value: '集美'
                    },
                    {
                        label: '兵役状况',
                        value: '未服役'
                    },
                    {
                        label: '性格特征',
                        value: '孤僻'
                    },
                    {
                        label: '生物特征',
                        value: '鼻头有痔'
                    },
                    {
                        label: '学历',
                        value: '大专',
                    },
                    {
                        label: '是否有固定场所',
                        value: '是'
                    },
                    {
                        label: '虚拟身份',
                        value: '教师'
                    },
                    {
                        label: '体制内',
                        value: '是'
                    },
                    {
                        label: '是否独居',
                        value: '是'
                    },
                    {
                        label: '户籍地区划',
                        value: '厦门'
                    },
                    {
                        label: '户籍地祥址',
                        value: '厦门后溪'
                    },
                    {
                        label: '现住地祥址',
                        value: '后溪某某村某某镇'
                    }
                ],

                // 图标类型
                infoText: [
                    {
                        label: "姓名",
                        value: "张三"
                    },
                    {
                        label: "身份证号",
                        value: "350600199009090000"
                    },
                    {
                        label: "列管原因",
                        value: "人员有发生个人极端嫌疑，需要列管"
                    },
                    {
                        label: "申请人",
                        value: "某警官",
                    },
                    {
                        label: "申请单位",
                        value: "万兴路派出所",
                    },
                    {
                        label: "申请时间",
                        value: "2021-04-12",
                    },
                    {
                        label: "人员类别",
                        value: "人员有发生个人极端嫌疑，需要列管",
                        text: '自定义按钮',
                        slot: true
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
