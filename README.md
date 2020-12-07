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
    
    存在问题:
    less样式没有隔离成组件作用域，造成全局样式污染  ===> 待解决 [即: home/login组件中同时定义clas为container的样式, 相同页面下, 后者会覆盖前者]
    简单说: CSS 文件分离 != CSS 作用域隔离
    src\app.jsx:
        <>
        <Home />
        <Login />
        </>
    
    src\views\home\home.less:
    .container {
        border: 1px solid red;
    }

    src\views\login\login.less:
    .container {
        color: blue;
        border: 1px solid blue;
    }
    
    界面上会显示: 蓝色文字与边框

    经验证: purchase-landing-widget组件使用treat书写less, 也存在这个问题.
    临时解决方案: 通过手动添加前缀方式, 避免重名[尤其是组件最外层容器,内部容器可通过less样式嵌套写法,似乎并不能避免污染,已经测试], 如: 改成:homeContainer/loginContainer
    最终解决方案: 
    参考: https://blog.csdn.net/william_n/article/details/109470962
    https://juejin.cn/post/6844904021304541198

    总结: 解决 React的CSS作用域污染方案
    方案一：namespaces
    方案二：CSS in JS
    方案三：CSS Modules

    2.配置路由/以及路由跳转
    https://www.bilibili.com/video/BV1fV411d7Ka?p=88
    存在问题: 没有解决NavLink样式高亮问题.
    


    3.redux/react-redux实践 ==> TBD
    https://www.bilibili.com/video/BV1fV411d7Ka?p=95


Note：
优化：
1.可以使用yarn进行管理.速度应该会更加高效

存在的问题：
热加载不是很稳定， 有时候会被block, 还需要手动触发
加载速度有些慢，界面刷新有延迟，不利于高效开发.
