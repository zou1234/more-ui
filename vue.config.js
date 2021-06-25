const markdownRender = require('markdown-it')();

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                wrapper: 'article',
                wrapperName: '123',
                raw: true,
                preventExtract: true,
                use: [
                    [require('markdown-it-container'), 'tip'],
                    [require('markdown-it-container'), 'warning'],
                    [require('markdown-it-container'), 'danger'],
                    [require('markdown-it-container'), 'details'],
                ],
            })
        // .end()
    },
    configureWebpack: {
        // 开发模式下不能用contenthash，与热部署插件冲突，只在生产模式启用contenthash
        output: {
            filename: process.env.NODE_ENV === "production" ? `[name].[contenthash:8].js` : `[name].[hash:8].js`,
            chunkFilename: process.env.NODE_ENV === "production" ? `[name].[contenthash:8].js` : `[name].[hash:8].js`,
        },

        plugins: [

        ],

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        module:{
            rules:[
                {
                    test: /\.(txt|html?)$/,
                    loader: "raw-loader"
                },
            ]
        }
    },
}