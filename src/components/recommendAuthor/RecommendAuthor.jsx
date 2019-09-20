import React from 'react'
import { Icon } from 'antd'

import './RecommendAuthor.scss'

const authorInformation = [
    {
        "authorName": "没文化的狐狸",
        "authorFace": "author1",
        "wordNumber": "293.1k",
        "likeNumber": "5.7k"
    }, {
        "authorName": "须僧",
        "authorFace": "author2",
        "wordNumber": "79.9k",
        "likeNumber": "7k"
    }, {
        "authorName": "灌灌",
        "authorFace": "author3",
        "wordNumber": "20.7k",
        "likeNumber": "1.7k"
    }, {
        "authorName": "晓晨",
        "authorFace": "author4",
        "wordNumber": "118.5k",
        "likeNumber": "20.6k"
    }, {
        "authorName": "安随",
        "authorFace": "author5",
        "wordNumber": "56.5k",
        "likeNumber": "20.8k"
    }, {
        "authorName": "阿特",
        "authorFace": "author6",
        "wordNumber": "56.3k",
        "likeNumber": "1.5k"
    }, {
        "authorName": "琪琪",
        "authorFace": "author7",
        "wordNumber": "63.5k",
        "likeNumber": "66k"
    }, {
        "authorName": "莉莉",
        "authorFace": "author8",
        "wordNumber": "45.5k",
        "likeNumber": "2.6k"
    }, {
        "authorName": "哟哟",
        "authorFace": "author9",
        "wordNumber": "66.3k",
        "likeNumber": "23.8k"
    }, {
        "authorName": "吱吱",
        "authorFace": "author10",
        "wordNumber": "56k",
        "likeNumber": "4.8k"
    }, {
        "authorName": "杯杯",
        "authorFace": "author11",
        "wordNumber": "2.6k",
        "likeNumber": "1.8k"
    }, {
        "authorName": "肉丝儿",
        "authorFace": "author12",
        "wordNumber": "151.5k",
        "likeNumber": "12k"
    }
];

class RecommentAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChangeBatchActive: false,
            sectionListNumber: parseInt(authorInformation.length / 5) + 1,
            currentSectionList: 0
        }
    }

    render() {
        return (
            <div className="recommend">
                <div className="recommend-top-part">
                    <span>推荐作者</span>
                    <p className="change-batch" onClick={this.setChangeBatchStatus}>
                        <Icon
                            className={`change-batch-icon ${this.state.isChangeBatchActive ? "change-batch-active" : ""}`}
                            type="sync" />
                        <span>换一批</span>
                    </p>
                </div>
                <ul className="recommend-content-part">
                    {
                        authorInformation.slice(this.state.currentSectionList * 5, (this.state.currentSectionList + 1) * 5).map(author => (
                            <li className="author-content" key={author.authorName}>
                                <div className="author-left">
                                    <img src={this.getAuthorFace(author.authorFace)} alt="authorFace" />
                                    <div className="author-info">
                                        <p className="author-name">{author.authorName}</p>
                                        <p className="author-achievement">写了{author.wordNumber}字 · {author.likeNumber}喜欢</p>
                                    </div>
                                </div>
                                <div className="author-right">
                                    <span className="care-btn" onClick={() => this.CareAuthor(author.authorName)}>+关注</span>
                                    <p>&nbsp;</p>
                                </div>
                            </li>)
                        )
                    }
                </ul>
                <div className="recommend-bottom-part">查看全部 ></div>
            </div>
        )
    }

    changeBatchRecommendAuthor = () => {
        this.setState((preState) => ({
            currentSectionList: (preState.currentSectionList + 1) % preState.sectionListNumber
        }), () => {
            console.log(this.state);
        });
    }

    setChangeBatchStatus = () => {
        this.setState({
            isChangeBatchActive: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    isChangeBatchActive: false
                });
            }, 1000);

            setTimeout(() => {
                this.changeBatchRecommendAuthor();
            }, 500);
        });
    }

    getAuthorFace = (faceName) => {
        const faceImg = require(`images/author-face/${faceName}.webp`)
        return faceImg;
    }

    CareAuthor = (authorName) => {
        console.log("你关注的作者是： ", authorName);
    }
}

export default RecommentAuthor;