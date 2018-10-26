import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Header.less';

class Header extends Component {
    render() {
        return (

            <header>
                <div className='logo'>
                    <img src={require('../../../assets/images/logo.png')} alt="" className="logos"/>
                </div>
                <div className='login'>
                    <li>
                        <Link to='/login'><i className='iconfont icon-denglu'></i> <span>登录</span></Link>
                    </li>
                </div>

            </header>

        );
    }
}

export default Header;