const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'//main是默认入口，也可以是多入口
    },
    output: {
        filename: './build.js',//指定js文件
        path: path.join(__dirname, 'dist')//这时为了解决路径问题。
        // 最好使用绝对路径，代表当前目录的上一级的dist

    },
    module: {
        // 和rules功能一样，rules值webpack2之后新加的
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                // ccs和style的load的顺序放过来，2!1
            },
            {
                test: /\.(jpg|svg|png|gif)$/,
                loader: 'url-loader?limit=4096&name=[name].[ext]',
                // [name]是读到的文件名，[ext]是拓展名
                // loader可用loader属性或options属性配置
                /*options: {
                    limit: 4096,
                    name: '[name].[ext]'
                }*/
            },
            {
                //解析ES6的js
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除node_modules下的所有js，不用ES解析
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],// 关键字
                    plugins: ['transform-runtime']// 函数
                }
            },
            {
                //解析vue
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]

    },
    plugins:[
        // 插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            // 将src下的template属性描述的文件根据output。path将文件移动到该目录
            template: './src/index.html'
        })
    ]
}



