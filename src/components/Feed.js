import React, { useState, useEffect } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryRow from './StoryRow'
import db from '../firebase'
import moment from 'moment';
import { useMediaQuery } from '@material-ui/core'

function Feed() {
    const isPhone = useMediaQuery('(max-width: 600px)')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className='feed'>

            {!isPhone 
                ? 
                <>
                <StoryRow />
                <MessageSender />
                </>
                : 
                <>
                <MessageSender />
                <StoryRow />
                </>
            }

            {
                posts.map(post => (
                    <Post 
                        key={post.data.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        username={post.data.username}
                        img={post.data.img}
                        timestamp={post.data.timestamp ? moment(post.data.timestamp?.seconds*1000).fromNow() : 'just now'}
                    />
                ))
            }
        </div>
    )
}

export default Feed
