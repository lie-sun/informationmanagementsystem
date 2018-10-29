import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import head from './Header.module.less';
import userLogo from 'src/assets/images/user-logo.png'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className={head.logo}>
                    <Link to='/'> <img src={require('../../../assets/images/logo.png')} alt="" className={head.logos}/></Link>
                </div>
                <div className={head.login}>
                    <li>
                        <Link to='/staff/skill' className={head.a}><i className='iconfont icon-server'></i>
                            <span>服务器</span></Link>
                    </li>
                    <li>
                        <Link to='/staff' className={head.a}>
                            <span>员工信息</span></Link>
                    </li>
                    <li>
                        <Link to='/user'> <img src={userLogo} alt="" className={head.userLogo}/></Link>
                    </li>
                    <li>
                        <Link to='/login' className={head.a}><i className='iconfont icon-denglu'></i>
                            <span>登录</span></Link>
                    </li>

                </div>
            </header>
        );
    }
}