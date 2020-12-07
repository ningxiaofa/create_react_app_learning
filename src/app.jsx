import React from 'react';

// import Home from './views/home/home';
// import Login from './views/login/login';
import AppRouter from './router/AppRouter';

import './static/css/common.less'
export default class App extends React.Component {

    render(){
        return (
            <>
            {/* <Home />
            <Login /> */}
            {/* 路由组件，建议还是直接放到入口文件中 */}
            <AppRouter />
            </>
        )
    }
}