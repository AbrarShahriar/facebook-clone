import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'
import { useMediaQuery } from '@material-ui/core'
import db from '../firebase'

function MessageSender() {
    const [{ user }] = useStateValue()
    const [input, setInput] = useState('')
    const isPhone = useMediaQuery('(max-width: 600px)')
    const [imgUrl, setImgUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user?.photoURL,
            username: user?.displayName || user?.email,
            img: imgUrl
        })

        setInput('')
        setImgUrl('')
    }
    return (
        <div className='messageSender'>

            <div className="messageSender__top">
                <Avatar className='messageSender__avatar' src={user?.photoURL}/>

                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='messageSender__input' 
                        placeholder="What's on your mind?" 
                        type="text"
                    />

                    
                    <input
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)} 
                        placeholder='Image URL (Optional)'
                        className='messageSender__image' 
                    />

                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
                </form>
            </div>

            {!isPhone &&
                <div className="messageSender__bottom">
                    <div className="messageSender__option">
                        <Videocam style={{color: 'red'}} />
                        <h3>Live Video</h3>
                    </div>
                    <div className="messageSender__option">
                        <PhotoLibrary style={{color: 'green'}} />
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="messageSender__option">
                        <InsertEmoticon style={{color: 'orange'}} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            }

        </div>
    )
}

export default MessageSender
