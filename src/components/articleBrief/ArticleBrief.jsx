import React from 'react'
import './ArticleBrief.scss'
import { Icon } from 'antd'

const ArticleBrief = (props) => {
    return (
        <div className="article-brief">
            <div className="article-text">
                <h1>{props.article.title}</h1>
                <p className="article-content">{props.article.content}</p>
                <div className="article-info">
                    <div className="diamond">
                        <Icon type="sketch-circle" theme="filled" />
                        <span>{props.article.diamondNumber}</span>
                    </div>
                    <div className="author-name">{props.article.author}</div>
                    <div className="article-like">
                        <Icon type="heart" theme="filled" />
                        <span>{props.article.likeNumber}</span>
                    </div>
                </div>
            </div>
            <div className={`article-image ${!!props.article.image ? "" : "no-cover"}`}>
                {!!props.article.image ? <img src={getArticleCover(props.article.image)} alt="cover"/> : ""}
            </div>
        </div>
    );
}

function getArticleCover(faceName) {
    const coverImg = require(`images/article-cover/${faceName}`);
    return coverImg;
}

export default ArticleBrief;