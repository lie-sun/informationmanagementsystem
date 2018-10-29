import React, {Component} from 'react';
import notpage from "./NotFoundPage.module.less";

class NotFoundPage extends Component {
    render() {
        return (
            <div className={notpage.container}>
                页面不存在
            </div>
        );
    }
}

export default NotFoundPage;
