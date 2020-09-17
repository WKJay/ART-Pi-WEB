const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new CompressionWebpackPlugin({
                // 正在匹配需要压缩的文件后缀
                test: /\.(js|css|svg|woff|ttf|json|html)$/,
                // 大于10kb的会压缩
                threshold: 2048,
                // 其余配置查看compression-webpack-plugin
            })
        ]
    },
    // 配置less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    devServer: {
        //proxy: "http://192.168.1.101:80"
        //proxy: "http://10.2.5.184:80"
        proxy: "http://192.168.31.220:80"
    }
}