学习备注信息：
推荐：
安装淘宝NPM镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
或者 配置淘宝镜像源亦可
npm config set registry https://registry.npm.taobao.org

步骤：
    1.支持less
    1.1 执行命令： npm install --save-dev less less-loader
    1.2 修改配置文件， 修改配置文件之前，先拉取配置文件到项目中.
        npm run eject
        note: 在执行npm run eject 之前，要先stash or commit changes.
        控制台输出： Remove untracked files, stash or commit any changes, and try again.
        
    1.3 修改配置文件 // Note: 每次修改配置文件，都需要重新启动serve, 即 npm start
        config\webpack.config.js
        类比sass, 添加配置即可
        ///////////////////////////////////////////////////////配置信息
        const lessModuleRegex = /\.module\.less$/;
        // less
        {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders(
            {
                importLoaders: 3,
                sourceMap: isEnvProduction
                ? shouldUseSourceMap
                : isEnvDevelopment,
            },
            'less-loader'
            ),
            sideEffects: true,
        },
        // less
        {
            test: lessModuleRegex,
            use: getStyleLoaders(
            {
                importLoaders: 3,
                sourceMap: isEnvProduction
                ? shouldUseSourceMap
                : isEnvDevelopment,
                modules: {
                getLocalIdent: getCSSModuleLocalIdent,
                },
            },
            'less-loader'
            ),
        },
        ///////////////////////////////////////////////////////配置信息 - end
    
    存在问题：
    less样式没有隔离成组件作用域，造成全局样式污染  ===> 待解决




Note：
优化：
1.可以使用yarn进行管理.速度应该会更加高效

存在的问题：
热加载不是很稳定， 有时候会被block, 还需要手动触发
加载速度有些慢，界面刷新有延迟，不利于高效开发.
