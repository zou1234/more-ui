<!--
    @Describe：模块组件
    @Author: zouwf
    @Date:  2021/3/1
-->
<template>
    <div class="component-card" :style="{width: width, height: height }">
        <div class="component-card__subject">
            <!-- 标题 -->
            <div class="component-card__title">{{title}}</div>
            <div class="component-card__text">{{text}}</div>


        </div>

        <div class="component-card--box" :style="{ background: background}">
            <!-- 效果 -->
            <div class="component-card__effect">
                <slot></slot>
            </div>


            <!-- 数据结构 -->
            <div class="component-card__code">
                <es-code v-if="isShowCode" :code="code"></es-code>
            </div>

            <div v-if="code" class="component-card__btn" @click="isShowCode =!isShowCode">
                <i :class="isShowCode ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"></i>
                {{isShowCode === true ? '收起代码' : '显示代码'}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "component-card",

        // 接收父组件传过来的属性
        props: {
            // 背景
            background: {
                type: String
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

            // 代码
            code: {
                type: [Number, String],
            },

        },

        // 组件注册
        components: {},

        // 计算属性
        computed: {},

        // 过滤
        filters: {},

        // 数据
        data() {
            return {
                title: '测试标题',
                isShowCode: false,
                text: ''
            };
        },

        // 方法
        methods: {},

        // 创建
        created() {
            const vm = this;
            const {title, text} = vm.$attrs;

            vm.title = title;
            vm.text = text;
        },

        // 挂载
        mounted() {

        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .component-card{
        box-sizing: border-box;
        margin-bottom: 80px;

        .component-card--box{
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 8px 12px #ebedf0;
            padding: 20px 10px 0 10px;
        }

        &__subject{
            /*padding: 24px 24px 14px 24px;*/
        }

        &__title{
            font-size: 22px;
            font-weight: 800;
            margin: 0 0 20px 0;
            color: #1f2f3d;
        }

        &__text{
            color: #5e6d82;
            margin-bottom: 20px;
        }

        &__effect{
            padding: 0 0 20px 0;
        }

        &__code{
            font-size: 13px;
        }

        &__btn{
            text-align: center;
            padding: 15px;
            border-top: 1px solid #eaeefb;
            background-color: #fff;
            cursor: pointer;
            color: rgba(0, 0, 0, .45);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &__btn:hover{
            color: #409eff;
            background-color: #f9fafc;
        }
    }
</style>
