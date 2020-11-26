import { render } from '@testing-library/react';
import React from 'react';

import Home from './components/home/home';

export default class App extends React.Component {

    render(){
        return (
           <Home />
        )
    }
}