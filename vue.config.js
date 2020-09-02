module.exports = {
    // 配置less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    devServer: {
        //proxy: "http://192.168.1.119:80"
        //proxy: "http://10.2.5.138:80"
        proxy: "http://192.168.31.138:80"
    }
}