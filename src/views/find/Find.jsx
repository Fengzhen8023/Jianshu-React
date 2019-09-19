import React, { Component } from 'react'
import './Find.scss'

const member = require('images/member.png')
const serial = require('images/serial.png')
const copyright = require('images/copyright.png')
const school = require('images/school.png')
const qrCode = require('images/qr-code.png')

class Find extends Component {
    render() {
        return (
            <div className="find-box">
                <div className="find-left-part">left</div>
                <div className="find-right-part">
                    <div className="right-nav">
                        <img src={member} alt="member"/>
                        <img src={serial} alt="serial"/>
                        <img src={copyright} alt="copyright"/>
                        <img src={school} alt="school"/>
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
                </div>
            </div>
        );
    }
}

export default Find;