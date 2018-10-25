var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/')
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'dist'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.sass$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true
                    },
                },
            ],
        }]
    }
};