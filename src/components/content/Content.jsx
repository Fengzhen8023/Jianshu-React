import React from 'react'
import './Content.scss'

class Content extends React.Component {
    render() {
        return (
            <div className="page-content">
                { this.props.children }
            </div>
        )
    }
}

export default Content;