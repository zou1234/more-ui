<!--
    Exception 模块组件（标题、头部配置）
    @Author： zouwf
    @Date： 2019-12-10
-->
<template>
    <div class="module-wrap">
        <!-- 头部 -->
        <div v-if="isHeader">

            <!-- 默认 -->
            <div  v-if="title" class="module-wrap__header">
                <div class="module-wrap__header-left">{{title}}</div>
                <div class="module-wrap__header-right">
                    <slot name="title-right"></slot>
                </div>
            </div>

            <!-- tabs切换 -->
            <el-tabs
                    v-else-if="tabData.length > 0"
                    class="module-wrap__tabs"
                    v-model="activeName"
                    @tab-click="handleClickTab"
            >
                <el-tab-pane
                        v-for="(item, index) in tabData"
                        :key="index"
                        :label="item.label"
                        :name="item.name"
                ></el-tab-pane>
            </el-tabs>

            <!-- 头部自定义 -->
            <div v-else>
                <slot name="header"></slot>
            </div>
        </div>

        <!-- 主体内容 -->
        <div class="module-wrap__content">
            <el-scrollbar>
                <slot></slot>
            </el-scrollbar>
        </div>
    </div>
</template>

<style lang="scss">
    .module-wrap{
        width: 100%;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 15px;

        &__header{
            height: 3.5rem;
            line-height: 3.5rem;
            padding: 0 2rem;
            border-bottom: 1px solid rgba(0,0,0,0.09);

            &>div{
                display: inline-block;
            }

            &-left{}

            &-right{
                float: right;
            }
        }

        &__tabs{

            .el-tabs__nav{
                padding: 0  2rem;
                height: 3.5rem;
                line-height: 3.5rem;

                .el-tabs__item {
                    height: 3.5rem;
                    line-height: 3.5rem;
                }
                div{
                    font-size: 1rem;
                }
            }

            .el-tabs__active-bar{
                margin-left: 2rem;
            }

            .el-tabs__nav-wrap::after{
                height: 1px;
            }

            .el-tabs__header{
                margin: 0;
            }

            .el-tabs__item{
                color: rgba(#000000, .45);
            }

            .is-active{
                color: #1890ff;
                font-weight: bold;
            }
        }

        .is-active-bottom{
            border-bottom: none;
        }

        &__content {
            padding: 1.5rem 2rem;
        }
    }
</style>

<script>
    export default {
        name: "index",
        props: {
            //标题
            title:{
                type: String,
            },

            //是否需要标题
            isTitle: {
                type: Boolean,
                default: false
            },

            //标题前面竖线
            titleSign:{
                type: Boolean,
                default: true
            },

            //标题线
            titleBottom: {
                type: Boolean,
                default: true
            },

            //tab数据
            tabData: {
                type: Array,
                default: () => []
            },

            //主体内容padding值
            contentPadding: {
                type: String,
            },

            //控制头部
            isHeader: {
                type: Boolean,
                default: true
            },
            //默认值
            defaultTabActive: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                // tab选中值
                activeName: '',
            };
        },
        methods: {
            /**
             *
             * tab切换事件
             *
             * */
            handleClickTab() {
                this.$emit('handleClickTab', this.activeName)
            }
        },
        created() {
            this.activeName = this.defaultTabActive
        }
    };
</script>

