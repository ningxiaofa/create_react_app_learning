import React from 'react';
import { NavLink } from 'react-router-dom';

import './foot-nav.less';

export default function FootNav() {
    return (
        <div id="footNavContainer">
            <ul>
                <li>
                    <NavLink exact to="/home">
                        首页
                    </NavLink>
                </li>
                <li style={{
                    // 组件内行内样式 -1
                    border: "1px solid rgb(232, 67, 147)",
                }}>
                    <NavLink to="/login">
                        登录
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/not-found"
                        // 组件内行内样式 -2s
                        // style={{
                        //     color: "red",
                        // }}
                    >
                        404页面
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}