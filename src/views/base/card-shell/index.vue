<!--
    @Describe：模块组件
    @Author: zouwf
    @Date:  2021/3/4
-->
<template>
    <div>
        <h1 class="l-title-intro">card-shell卡片外壳</h1>

        <es-modular
                title="基础用法"
                :code="require('./1.htm').default"
                :text="'label-width设置属性宽, data对象里label value 字段分别定义属性和属性名称，column属性定义列数'"
        >
            <card-shell :imgUrl="require('@/assets/images/default/tx-1.png')" width="600px" is-shadow>
                <div>
                    自定义
                </div>
            </card-shell>
        </es-modular>

        <es-modular
                title="图标区自定义标识"
                :code="require('./2.htm').default"
                :text="'插槽名imgSign图片区域标识形状颜色可自由定义'"
        >
            <card-shell :imgUrl="require('@/assets/images/default/tx-1.png')"
                        width="600px"
                        is-shadow
            >
                <template slot="imgSign">
                    <div style="width: 15px; height: 15px;background: #7c84ff;
                    border-radius: 50%;position: absolute; right: 5px;top: 5px"></div>
                </template>
                <div>
                    自定义
                </div>
            </card-shell>
        </es-modular>

    </div>
</template>

<script>
    export default {
        name: "",

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
