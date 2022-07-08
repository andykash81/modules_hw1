const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
   module: {
        rules: [{
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader'
        ],
          }]
    },
   plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    
   ]
}