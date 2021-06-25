<!--
    @Describe：导航锚点效果
    @Author: zouwf
    @Date: 2021/5/31 0031 
-->
<template>
    <div class="page-nav">
        <el-tabs class="page-nav__tabs l-nav"
                 :style="{ height: height }"
                 :tab-position="'right'"
                 v-model="activeName"
                 @tab-click="handleClickNav"
        >
            <el-tab-pane v-for="(item, index) in sourceData"
                         :key="item+index"
                         :label="item.label"
            ></el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang="scss" scoped></style>

<script>
    export default {
        name: "page-nav",
        // 组件注册
        components: {},

        // 接收父组件传过来的属性
        props: {
            //导航高
            height: {
                type: String,
                default: "380px"
            },

            //数据
            data: {
                type: Array,
                default() {
                    return [
                        {
                            label: '人员基本信息',
                            name: 'ryjbxx',
                        },
                        {
                            label: '最新走访信息',
                            name: 'zxzfxx',
                        },
                        {
                            label: '管控信息 - 社会管控力量',
                            name: 'gkxx-shgkll',
                        },
                        {
                            label: '管控信息 - 公安管控力量',
                            name: 'gkxx-gagkll',
                        },
                        {
                            label: '人员社会信息',
                            name: 'ryshxx',
                        },
                        {
                            label: '负面信息',
                            name: 'fmxx',
                        },
                        {
                            label: '类别信息',
                            name: 'lbxx',
                        },
                        {
                            label: '走访记录',
                            name: 'zfjl',
                        },
                        {
                            label: '轨迹信息',
                            name: 'gjxx',
                        }
                    ];
                }
            },

            //滚动条id，默认是body，局部可配置
            scrollName: {
                type: String
            }

        },

        // 数据
        data() {
            return {
                activeName: "",
                sourceData: []
            };
        },

        // 计算属性
        computed: {},

        // 过滤
        filter: {},

        // 方法
        methods: {
            /**
             * @param: 点击锚点定位
             *
             * */
            handleClickNav() {
                const vm = this;
                const domName = vm.sourceData[vm.activeName].name;

                document.getElementById(domName).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            },

            /**
             * @param: 监听滚动条实现滚动时候标题同步绑定
             *
             * */
            handleScroll() {
                const vm = this, { scrollName, sourceData, activeName } = vm;
                const scrollDom = scrollName ? document.getElementById(scrollName) : document.body;

                scrollDom.onscroll = () => {
                    let scrollTop = scrollDom.scrollTop || document.documentElement.scrollTop;

                    sourceData.forEach((v, i) => {
                        const domOffTop = document.getElementById(v.name).offsetTop,
                            diff = domOffTop - scrollTop;

                        if (diff < 10) vm.activeName = i + "";
                    });

                };
            }
        },

        // 创建
        created() {
            const vm = this;
            vm.sourceData = this.data;

        },

        // 挂载
        mounted() {
            this.handleScroll()
        },

        // 监听
        watch: {}
    };
</script>