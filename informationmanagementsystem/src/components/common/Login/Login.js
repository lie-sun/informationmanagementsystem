import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className='ll'>
                登录
                <div>
                    <Link to='/'>首页</Link>
                </div>
            </div>
        );
    }

}

export default Login;