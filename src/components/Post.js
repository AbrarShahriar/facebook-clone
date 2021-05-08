import { Avatar, useMediaQuery } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUpSharp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

function Post({ img, profilePic, username, timestamp, message }) {
    const isPhone = useMediaQuery('(max-width: 600px)')

    return (
        <div className='post'>
            <div className="post__top">
                <Avatar className='avatar__avatar' src={profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={img} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpSharp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                {!isPhone &&
                    <div className="post__option">
                        <AccountCircle />
                        <ExpandMoreOutlined />
                    </div>
                }
            </div>
        </div>
    )
}

export default Post
