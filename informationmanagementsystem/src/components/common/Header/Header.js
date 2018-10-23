import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Header.less';


class Header extends Component {

    render() {
        return (
            <Router>
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
            </Router>
        );
    }
}

export default Header;