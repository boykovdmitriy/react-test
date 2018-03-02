const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: true,
    title: 'React-Test',
});

module.exports = {
    entry: {
        app: './src/index.jsx',
        styles: './src/styles/index.css'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.css$/,
                include: [ path.resolve(__dirname, 'src', 'app')],
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            }, {
                test: /\.css$/,
                include: [ path.resolve(__dirname, 'src', 'styles'), path.resolve(__dirname, 'node_modules')],
                loader: combineLoaders([
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                    }
                ])
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};