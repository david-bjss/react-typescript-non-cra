const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/Index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.([jt]s)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // {
            //     test: /\.(ts)x?$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //     },
            // },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],

    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
}