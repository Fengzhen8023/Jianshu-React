import React from 'react'
import './Header.scss'
import { Icon } from 'antd'

const logo = require('images/jianshu-logo.png')
const face = require('images/face-photo.png')
const beat = require('images/beat.png')

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNavIndex: 0,
            searchText: ""
        }
    }

    render() {
        return (
            <div className="header-nav">
                <div className="left-part">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="middle-part">
                    <ul className="nav-list">
                        <li 
                            onClick={() => this.changeActiveNav(0)}
                            className={`nav-item ${this.state.activeNavIndex === 0 ? "active-nav" : "no-active-nav"}`}>
                            <Icon type="compass" />
                            <span>发现</span>
                        </li>
                        <li 
                            onClick={() => this.changeActiveNav(1)}
                            className={`nav-item ${this.state.activeNavIndex === 1 ? "active-nav" : "no-active-nav"}`}>
                            <Icon type="book" />
                            <span>关注</span>
                        </li>
                        <li     
                            onClick={() => this.changeActiveNav(2)}
                            className={`nav-item ${this.state.activeNavIndex === 2 ? "active-nav" : "no-active-nav"}`}>
                            <Icon type="bell" />
                            <span>消息</span>
                        </li>
                        <li className="search-input">
                            <input type="text" placeholder="搜索" onKeyUp={(e) => this.handleInputSearch(e)} />
                            <Icon type="search" className="search-icon" onClick={this.searchArticle} />
                        </li>
                    </ul>
                </div>
                <div className="right-part">
                    <div className="font-set">
                        <Icon type="font-colors" />
                    </div>
                    <div className="diamond">
                        <img src={beat} alt="beat"/>
                    </div>
                    <div className="photo">
                        <img src={face} alt="face"/>
                        <Icon type="caret-down" />
                        <ul className="more-option">
                            <li>
                                <Icon type="smile" theme="filled" />
                                <span>我的主页</span>
                            </li>
                            <li>
                                <Icon type="star" theme="filled" />
                                <span>收藏的文章</span>
                            </li>
                            <li>
                                <Icon type="heart" theme="filled" />
                                <span>喜欢的文章</span>
                            </li>
                            <li>
                                <Icon type="pay-circle" theme="filled" />
                                <span>已购内容</span>
                            </li>
                            <li>
                                <Icon type="layout" theme="filled" />
                                <span>我的钱包</span>
                            </li>
                            <li>
                                <Icon type="setting" theme="filled" />
                                <span>设置</span>
                            </li>
                            <li>
                                <Icon type="message" theme="filled" />
                                <span>帮助与反馈</span>
                            </li>
                            <li>
                                <Icon type="lock" theme="filled" />
                                <span>退出</span>
                            </li>
                        </ul>
                    </div>
                    <div className="write-article">
                        <Icon type="audio" className="write-article-icon" />
                        <span>写文章</span>
                    </div>
                </div>
            </div>
        )
    }

    changeActiveNav = (index) => {
        this.setState({
            activeNavIndex: index
        });
    }

    handleInputSearch = (e) => {
        if(e.keyCode === 13) {
            this.searchArticle();
            return false;
        }
        this.setState({
            searchText: e.currentTarget.value
        });
    }

    searchArticle = () => {
        console.log("当前搜索框的值： ", this.state.searchText);
    }
}

export default Header;