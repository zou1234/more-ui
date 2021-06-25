<!--
    @Describe：菜单
    @Author: zouwf
    @Date:  2021/1/8
-->
<template>
    <div class="menu-bar">
        <el-scrollbar>
            <ul v-for="(val, idx) in menuList" :key="idx">
                <h2>{{val.meta.title}}</h2>
                <li class="menu-bar__item"
                    v-for="(item, index) in val.children"
                    @click="handleClickGo(item)"
                    :key="index"
                    :class="{'is-active': item.path === activePath}"
                >
                    {{item.meta.title}}
                </li>
            </ul>
        </el-scrollbar>
    </div>
</template>

<script>

    export default {
        name: "menu",

        // 接收父组件传过来的属性
        props: {},

        // 组件注册
        components: {},

        // 计算属性
        computed: {},

        // 数据
        data() {
            return {
                isShow: true,
                activePath: true,
                menuList: [
                    {
                        title: '业务类',
                        data: [
                            {
                                name: '模块卡片',
                                path: 'module-wrap'
                            }
                        ]
                    },
                    {
                        title: '图表类',
                        data: [
                            {
                                name: '多功能饼图',
                                path: 'multi-pie-chart'
                            },
                            {
                                name: '线柱状图混合',
                                path: 'bar-line-chart'
                            }
                        ]
                    }
                ]
            };
        },

        // 方法
        methods: {
            handleClickGo(item){
                this.activePath = item.path;
                this.$router.push(item.path)
            }
        },

        // 创建
        created() {
            const vm = this;
            // 初始化获取
            vm.activePath = vm.$route.name;

            vm.menuList =vm.$router.options.routes;
            console.log('113243', this.menuList);
            // this.activePath = this.$route.name;
        },

        // 挂载
        mounted() {
        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .menu-bar{
        display: inline-block;
        width: 100%;
        border-right: 1px solid #eaecef;
        box-shadow: 0 8px 22px #ebedf0;
        background: #fff;

        .el-scrollbar{
            height: calc(100vh - 70px);
        }

        ul{
            margin-top: 20px;
            margin-bottom: 30px;
            padding-left: 30px;

            h2{
                color: #455a64;
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 10px;
            }

            li{
                text-align: left;
                padding: 8px 0 8px 15px;
                color: #455a64;
                cursor: pointer;
                list-style: none;
                font-size: 15px;
            }

            li:hover{
                color: #3eaf7c;
            }
        }

        .is-active{
            color: #3eaf7c;
        }

    }

    /deep/.el-scrollbar__wrap {
        overflow-x: hidden;
    }
</style>
