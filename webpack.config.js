const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: '/build',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['js', 'jsx'],
    },
    plugins: [
        new GenerateSW()
    ]

}