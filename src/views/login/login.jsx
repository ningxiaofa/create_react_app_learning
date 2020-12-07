import React from 'react';

import './login.less';

import FootNav from '../../components/foot-nav/foot-nav';

// 类组件 [class component]
// export default class Login extends React.Component{
//     render() {
//         return (
//             <div className="loginContainer">login</div>
//         )
//     }
// }

// 函数组件 [function component]
// export default function Login(){
//     return (
//         <div className="loginContainer">
//             login
//         </div>
//     )
// }
// 箭头函数
const Login  = () => {
    return (
        <div className="loginContainer">
        login
            <div className="testAgain">
                login sub container
            </div>

            <FootNav />
        </div>
    )
}

export default Login;