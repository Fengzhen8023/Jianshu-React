import React, { Component } from 'react'
import RecommentAuthor from 'components/recommendAuthor/RecommendAuthor'
import ArticleBrief from 'components/articleBrief/ArticleBrief'
import './Find.scss'

const member = require('images/member.png')
const serial = require('images/serial.png')
const copyright = require('images/copyright.png')
const school = require('images/school.png')
const qrCode = require('images/qr-code.png')


const articleBriefInfo1 = {
    "title": "公告：关于暂停用户发布功能，并全面清查平台内容",
    "content": "亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信息服务管理规定》《互联网用户公...",
    "diamondNumber": 4697.7,
    "likeNumber": 10989,
    "author": "简书",
    "image": null
}

const articleBriefInfo2 = {
    "title": "简书一年，我找到了一份好工作",
    "content": "这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既...",
    "diamondNumber": 2425.8,
    "likeNumber": 16062,
    "author": "陌上红裙",
    "image": "1.jpg"
}

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChangeBatchActive: false
        }
    }

    render() {
        return (
            <div className="find-box">
                <div className="find-left-part">
                    <ArticleBrief article={articleBriefInfo1} />
                    <ArticleBrief article={articleBriefInfo2} />
                </div>
                <div className="find-right-part">
                    <div className="right-nav">
                        <img src={member} alt="member"/>
                        <img src={serial} alt="serial"/>
                        <img src={copyright} alt="copyright"/>
                        <img src={school} alt="school" className="last-nav-img" />
                    </div>
                    <div className="qr-code">
                        <div className="big-qr-code">
                            <div className="down-arrow"></div>
                            <img src={qrCode} alt="qrCode" />
                        </div>
                        <img src={qrCode} alt="qrCode" className="left-img" />
                        <div className="q-code-text">
                            <p className="qr-code-up-text">下载简书手机App></p>
                            <p className="qr-code-down-text">随时随地发现和创建内容</p>
                        </div>
                    </div>
                    <RecommentAuthor />
                </div>
            </div>
        );
    }
}

export default Find;