import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import About from './About'
import Inbox from './Inbox'


render((
    <BrowserRouter>
        <Route path="/" component={ App }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/inbox" component={ Inbox }></Route>
    </BrowserRouter>
), document.getElementById('root'))