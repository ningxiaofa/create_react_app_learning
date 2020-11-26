import { render } from '@testing-library/react';
import React from 'react';

import Home from './views/home/home';
import Login from './views/login/login';

export default class App extends React.Component {

    render(){
        return (
            <>
            <Home />
            <Login />
            </>
        )
    }
}