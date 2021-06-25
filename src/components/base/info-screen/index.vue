<!--
    @Describe：日期显示列表
    @Author: zouwf
    @Date: 2021/4/27 0027 
-->
<template>
    <div class="info-screen">
        <div class="info-screen__item"
             :class="{'info-screen--active':item.checked}"
             v-for="(item, index) in rendData"
             :key="index"
             @click="handleClickItem(item, index)"
        >
            <!-- 文本 -->
            <span class="info-screen--text">{{ item.name }}</span>

            <!-- 数量红点 -->
            <span v-if="item.num && item.num > 0" class="info-screen--num">{{ item.num}}</span>

            <!-- 右下图标 -->
            <span v-if="item.checked" class="info-screen--triangle">
                <i class="el-icon-check"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info-screen",
        // 组件注册
        components: {},

        // 接收父组件传过来的属性
        props: {
            // 数据
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            // 是否加全选
            whole:{
                type: [String, Number]
            }
        },

        // 数据
        data() {
            return {
                active: 0
            };
        },

        // 计算属性
        computed: {
            // 数据
            rendData() {
                const vm = this;
                // console.log(vm);
                vm.data.forEach((v) => {
                    vm.$set(v, 'checked',
                        v.checked ? v.checked : false
                    );
                });

                return vm.data
            }
        },

        // 过滤
        filter: {},

        // 方法
        methods: {
            /**
             * @description: 点击选中
             * @param: (v) 当前选中相
             * @methods: 'click-item' -- 点击事件监听, checkedData -- 选中数组返回给父级别;
             *
             * */
            handleClickItem(v) {
                const vm = this;

                const checkedData = vm.rendData.filter((val) => {
                    if (val.name === v.name)
                        val.checked = !v.checked;
                    return val.checked === true;
                });

                vm.$emit('click-item', checkedData)
            }
        },

        // 创建
        created() {
            const vm = this;

            vm.whole ? vm.data.unshift({
                name: "全部",
                checked: false
            }) : ""
        },

        // 挂载
        mounted() {
        },

        // 监听
        watch: {}
    };
</script>

<style lang="scss" scoped>
    .info-screen {}

    .info-screen__item {
        height: 32px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        border: 1px solid rgba(0, 0, 0, 0.15);
        text-align: center;
        line-height: 32px;
        display: inline-block;
        margin-right: 12px;
        cursor: pointer;
        position: relative;
        -webkit-user-select: none;
        padding: 0 10px;
    }

    .info-screen--num {
        display: inline-block;
        height: 16px;
        background: red;
        position: absolute;
        right: -5px;
        top: -8px;
        border-radius: 10px;
        font-size: 12px;
        line-height: 15px;
        color: #fff;
        padding: 1px 4px;
    }

    .info-screen--triangle {
        width: 0;
        height: 0;
        border-bottom: 14px solid #4090FF;
        border-left: 14px solid transparent;
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff;
    }

    .info-screen--triangle i{
        position: relative;
        left: -10px;
        top: -7px;
        transform: scale(.7);
        font-size: 12px;
    }

    .info-screen--active {
        border: 1px solid #4090FF;
        border-radius: 2px;
        color: #4090FF;
    }
</style>
