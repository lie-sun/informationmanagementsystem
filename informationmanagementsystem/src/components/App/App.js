import React, {Component} from 'react';
import './App.less';
import '../../assets/global.less';
import Header from 'components/common/Header/Header'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from 'components/common/Login/Login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Router>
                    <Route path='/login' component={Login}/>
                </Router>
            </div>

        );
    }
}

export default App;
