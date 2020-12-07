import React from 'react';

import './home.less'

import FootNav from '../../components/foot-nav/foot-nav'

export default class Home extends React.Component {

    render(){
        return (
            <div className="homeContainer">
                home
                <div className="testAgain">
                    home sub container
                </div>

                <FootNav />
            </div>
        )
    }
}