module.exports = {
    plugins: {
        'postcss-apply': {},
        'postcss-preset-env': {
            browsers: 'last 2 versions',
            stage: 0,
            features: {
                'nesting-rules': true,
            }
        },
        'autoprefixer':{}
    }
}