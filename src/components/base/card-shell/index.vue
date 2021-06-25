<!--
    @Describe：卡片外壳
    @Author: zouwf
    @Date: 2021/4/26 0026 
-->
<template>
    <div class="card-shell" :style="cardShellStyle">
        <div class="card-shell__img" :style="{ width: imgWidth }">
            <img :src="imgUrl" alt="/">
            <div>
                <slot name="imgSign"></slot>
            </div>
        </div>

        <div class="card-shell__content">
           <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-shell",
        // 组件注册
        components: {},

        // 接收父组件传过来的属性
        props: {
            // 宽
            width: {
                type: String,
                default: "100%"
            },
            // 高
            height: {
                type: String,
                default: "106px"
            },

            // 图片宽
            imgWidth: {
                type: String,
                default: "106px"
            },

            // 图片地址
            imgUrl: {
                type: String,
                default:''
            }
        },

        // 数据
        data() {
            return {};
        },

        // 计算属性
        computed: {
            /**
             * @description: 外壳样式
             * */
            cardShellStyle(){
                const vm = this;
                const boxShadow = vm.$attrs.hasOwnProperty("is-shadow") ?
                    "0 0 4px 0 rgba(0,0,0,0.10)" : " ";

                return {
                    "width" : vm.width,
                    "height" : vm.height,
                    "box-shadow": boxShadow
                }
            },

            /**
             * @description: 标识颜色
             * Status: 1 -- 橙色, 2 -- 黄色, 3 -- 蓝色, 4 -- 奶奶灰
             * */
            getIdentClass(){
                const vm = this;
                return {
                    'is-active-orange': vm.status === 1,
                    'is-active-yellow': vm.status === 2,
                    'is-active-blue': vm.status === 3,
                    'is-active-grey': vm.status === 4,
                }
            }
        },

        // 过滤
        filter: {},

        // 方法
        methods: {},

        // 创建
        created() {
            console.log(this.$attrs["box-shadow"]);
        },

        // 挂载
        mounted() {
        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .card-shell{
        background: #FFFFFF;
        /*box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);*/
        border-radius: 2px;
        width: 100%;
        height: 106px;
        box-sizing: border-box;
    }

    .card-shell__img{
        height: 100%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        box-sizing: border-box;
    }

    .card-shell__img img{
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .card-shell__img-ident{
        width: 100%;
        height: 18px;
        line-height: 18px;
        background: #FE8637;
        font-size: 12px;
        color: #FFFFFF;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .card-shell__content{
        height: 100%;
        display: inline-block;
        overflow: hidden;
    }

    .is-active-orange{
        background: #FE8637;
    }

    .is-active-yellow{
        background: #FFCC53;
    }

    .is-active-blue{
        background: #4390FF;
    }

    .is-active-grey{
        background: #A2A2A2;;
    }
</style>
