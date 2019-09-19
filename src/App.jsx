import React from 'react';
import Header from 'components/header/Header'
import Content from 'components/content/Content'
import Find from 'views/find/Find'

import './asset/css/init.css'

class App extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Content>
                    <Find></Find>
                </Content>
            </div>
        );
    }
}

export default App;