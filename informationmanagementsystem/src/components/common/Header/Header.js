import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import head from './Header.module.less';

class Header extends Component {
    render() {
        return (
            <header>
                <div className={head.logo}>
                    <Link to='/'> <img src={require('../../../assets/images/logo.png')} alt="" className={head.logos}/></Link>
                </div>
                <div className={head.login}>
                    <li>
                        <Link to='/login' className={head.a}><i className='iconfont icon-denglu'></i> <span>登录</span></Link>
                    </li>
                </div>
            </header>
        );
    }
}

export default Header;