import React, {Component} from 'react';
import './App.less';
import '../../assets/global.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from 'components/common/Header/Header'
import Login from 'components/common/Login/Login';
import Skill from 'components/Staff/Skill/Skill';
import NotFoundPage from 'components/common/NotFoundPage/NotFoundPage';
import './App.less';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/' exact component={Header}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/staff/skill' component={Skill}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
