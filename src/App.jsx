import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render(){
        return (
            <>
                <div>Hello React - 简书</div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                { this.props.children }
            </>
        );
    }
}

export default App;