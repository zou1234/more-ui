<!--
    @Describe：信息详情
    @Author: zouwf
    @Date:  2021/1/20
-->
<template>
    <el-row class="info-text">
        <!-- 每一项 -->
        <el-col class="info-text__item" v-for="(item, index) in data"
                :span="item.span || getElColSpan(item)"
                :key="index"
        >
            <!-- 左边 -->
            <div class="info-text--label" :style="getLabelStyle(item)"> {{item.label}}：</div>

            <!-- 右边 -->
            <div class="info-text--row">
                <div v-if="$scopedSlots.default && item.slot">
                    <slot :data="item"></slot>
                </div>

                <div v-else class="info-text--value" :style="{'color': item.color}">
                    <!-- icon -->
                    <i v-if="item.icon" :class="item.icon" :style="{'color': item.iconColor}"></i>
                    <span>{{ item.value || '-'}}</span>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>

    export default {
        name: "info-text",

        // 接收父组件传过来的属性
        props: {
            // 数据
            data: {
                type: Array,
                default: () => []
            },

            // label 宽
            labelWidth:{
                type: [String, Number]
            },

            // 显示多少列，注意只接收24的偶数否则无效
            column: {
                type: [Number, String]
            }
        },


        filters:{},

        // 组件注册
        components: {},

        // 计算属性
        computed: {
            /**
             * @description: 配置label属性值
             * @param: item -- 源对象数据
             *
             * */
            getLabelStyle(){
                const vm = this;
                return function (item) {
                    return {
                        "vertical-align": item.imgUrl ? 'top' : '',
                        "width": vm.labelWidth
                    }
                }
            },

            /**
             * @description: 计算显示多少列
             * @param: item -- 源对象数据
             *
             *
             * */
            getElColSpan(){
                const vm = this;

                return function (item) {
                    if(vm.column){
                        return 24 / vm.column
                    }else {
                        return item.span ? item.span : 12;
                    }
                }
            }
        },

        // 数据
        data() {
            // console.log('数据');
            return {};
        },

        // 方法
        methods: {
            returnBackFn() {

            }
        },

        // 创建
        created() {
            console.log('创建');
        },

        // 挂载
        mounted() {
        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .info-text{
        line-height: 14px;

        &__item{
            height: 40px;
            line-height: 40px;
        }

        &--row{
            display: inline-block;
            vertical-align: top;
            height: 100%;
        }

        &--label{
            display: inline-block;
            width: 100px;
            text-align: right;
            color: rgba(0,0,0,0.65);
        }

        &--value{
            color: rgba(0,0,0,0.85);

            &>i{
                margin-right: 3px;
            }
        }

        .info-text-img{
            width: 70px;
            height: 70px;
            margin-right: 10px;
        }
    }
</style>
