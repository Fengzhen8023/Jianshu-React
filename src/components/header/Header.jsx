import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


class Header extends React.Component {
    render() {
        return (
            <ul className="route-list">
                <li><Link to="/find">发现</Link></li>
                <li><Link to="/care">关注</Link></li>
                <li><Link to="/message">消息</Link></li>
                <li><Link to="/favorite">收藏的文章</Link></li>
                <li><Link to="/help">帮助</Link></li>
                <li><Link to="/like">喜欢的文章</Link></li>
                <li><Link to="/personIndex">个人主页</Link></li>
                <li><Link to="/purchase">购买的文章</Link></li>
                <li><Link to="/set">设置</Link></li>
                <li><Link to="/wallet">钱包</Link></li>
            </ul>
        )
    }
}

export default Header;