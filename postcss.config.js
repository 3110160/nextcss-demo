module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-apply': {},
        'postcss-preset-env': {
            browsers: 'last 2 versions',
            stage: 0,
            features: {
                'nesting-rules': true,
            }
        },
        'precss':{},
        'autoprefixer':{},
        // 'cssnano':{}
    }
}
// 搜 postcss-plugin 可查看大量postcss插件