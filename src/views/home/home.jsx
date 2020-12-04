import React from 'react';

// import styles from './home.less'  // 这种写法, 是less文件中有export, 对应于render中 className={styles.homeContainer} 暂时不确定
import './home.less';

export default class Home extends React.Component {

    render(){
        return (
            <div className="homeContainer">
                home
                <div className="testAgain">
                    home sub container
                </div>
            </div>
        )
    }
}