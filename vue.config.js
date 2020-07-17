const path =require('path')
const port = 8888

const resolve =  (dir) => {
    return path.join(__dirname,dir)
}

module.exports = {
    devServer: {
        port,
        clientLogLevel: 'info'
    },
    chainWebpack(config){
        // svg规则配置一下，排除icons目录
        config.module.rule('svg').exclude.add(resolve('src/icons'));
        //新增icons规则，设置svg-sprite-loader
        config.module.rule('icons').test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end().use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({symbolId: 'icon-[name]'})
            .end()
    }
}
