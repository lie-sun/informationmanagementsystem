import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import login from "./Login.module.less"

class Login extends Component {
    render() {
        return (
            <div className={login.container}>
                登录
                <Link to='/' className={login.a}>首页</Link>

            </div>

        );
    }

}

export default Login;