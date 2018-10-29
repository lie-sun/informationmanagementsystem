import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import skill from './Skill.module.less';

class Skill extends Component {
    render() {
        return (
            <div className={skill.container}>
                技术
                <Link to='/'>首页</Link>

            </div>
        );
    }
}

export default Skill;
