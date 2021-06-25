<!--
    @Describe：代码编辑器
    @Author: zouwf
    @Date:  2021/3/1
-->
<template>
    <div>
        <codemirror v-model="code"  :options="cmOption"></codemirror>
    </div>
</template>

<script>
    import { codemirror } from 'vue-codemirror'
    // base style
    import 'codemirror/lib/codemirror.css'
    // // theme css
    import 'codemirror/theme/base16-dark.css'
    // // language
    import 'codemirror/mode/vue/vue.js'
    // active-line.js
    import 'codemirror/addon/selection/active-line.js'
    // styleSelectedText
    import 'codemirror/addon/selection/mark-selection.js'
    import 'codemirror/addon/search/searchcursor.js'
    // highlightSelectionMatches
    import 'codemirror/addon/scroll/annotatescrollbar.js'
    import 'codemirror/addon/search/matchesonscrollbar.js'

    import 'codemirror/addon/search/match-highlighter.js'
    // keyMap
    import 'codemirror/mode/clike/clike.js'
    import 'codemirror/addon/edit/matchbrackets.js'
    import 'codemirror/addon/comment/comment.js'
    import 'codemirror/addon/dialog/dialog.js'
    import 'codemirror/addon/dialog/dialog.css'

    import 'codemirror/addon/search/search.js'
    import 'codemirror/keymap/sublime.js'
    // foldGutter
    import 'codemirror/addon/fold/foldgutter.css'
    import 'codemirror/addon/fold/brace-fold.js'
    import 'codemirror/addon/fold/comment-fold.js'
    import 'codemirror/addon/fold/foldcode.js'
    import 'codemirror/addon/fold/foldgutter.js'
    import 'codemirror/addon/fold/indent-fold.js'
    import 'codemirror/addon/fold/markdown-fold.js'
    import 'codemirror/addon/fold/xml-fold.js'

    export default {
        name: "index",

        // 接收父组件传过来的属性
        props: {
            code: {
                type: String
            }
        },

        // 组件注册
        components: {
            codemirror
        },

        // 计算属性
        computed: {},

        // 过滤
        filters: {},

        // 数据
        data() {
            return {
                cmOption: {
                    dedentCode: '',
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    keyMap: 'sublime',
                    mode: 'text/x-vue',
                    theme: 'base16-dark',
                    extraKeys: {
                        'F11' (cm) {
                            cm.setOption('fullScreen', !cm.getOption('fullScreen'))
                        },
                        'Esc' (cm) {
                            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false)
                        }
                    }
                },
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

<style lang="scss">
    .CodeMirror {
        /*font-family: monospace;*/
        height: auto;
        border: 1px solid #ccc;
        font-family: Monaco, Menlo, Consolas, 'COURIER NEW', monospace;
        font-size: 14px;
    }
    .CodeMirror-scroll {
        overflow: auto;
        min-height: 150px;
        max-height: 740px;
    }
</style>
