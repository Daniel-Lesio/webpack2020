const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode : 'production',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use : [
                    {
                     loader : "html-loader",
                     options : {minimize :false}   
                    }
                ]
            },
            {
                test : /\.(png|svg|jpeg|jpg|gif)$/i,
                loader : 'file-loader',
                options : {
                    name : 'assets/[name].[ext]',
                    esModule: false,
                }
            },
            {
                test : /\.scss$/,
                
                use : [
                    {loader : "style-loader"},
                    {loader : 'css-loader'},
                    {loader : 'postcss-loader'},
                    {loader: "sass-loader"}
                ],
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : "./src/index.html",
            filename : "./index.html",
        }),
        new miniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
        })
    ]
}