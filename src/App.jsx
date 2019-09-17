import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from 'components/header/Header'
import Content from 'components/content/Content'
import Find from 'views/find/Find'
import Care from 'views/care/Care'
import Message from 'views/message/Message'
import Favorite from 'views/favorite/Favorite'
import Help from 'views/help/Help'
import Like from 'views/like/Like'
import PersonIndex from 'views/personIndex/PersonIndex'
import Purchase from 'views/purchase/Purchase'
import Set from 'views/set/Set'
import Wallet from 'views/wallet/Wallet'

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Header></Header>
                    <Content>
                        <Route path="/find" component={ Find } />
                        <Route path="/care" component={ Care } />
                        <Route path="/message" component={ Message } />
                        <Route path="/favorite" component={ Favorite } />
                        <Route path="/help" component={ Help } />
                        <Route path="/like" component={ Like } />
                        <Route path="/personIndex" component={ PersonIndex } />
                        <Route path="/purchase" component={ Purchase } />
                        <Route path="/set" component={ Set } />
                        <Route path="/wallet" component={ Wallet } />
                    </Content> 
                </BrowserRouter>
            </div>
        );
    }
}

export default App;