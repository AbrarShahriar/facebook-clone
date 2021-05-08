import React from 'react'
import Story from './Story'
import './StoryRow.css'

function StoryRow() {
    return (
        <div className='storyRow'>
            <Story img='https://th.bing.com/th/id/Ra007f4cb9d478fbcb83d5b70fead42cc?rik=81%2ftzNJJUqjWWg&pid=ImgRaw' profileSrc='R' title='Jeff Bezos'/>
            <Story img='https://th.bing.com/th/id/Rc7a61e19c33f3801bab74deaf1cd1d88?rik=79LeTdmYfp7gCg&pid=ImgRaw'  profileSrc='S' title='Mark Z'/>
            <Story img='https://th.bing.com/th/id/Rd7347675494a87132adfb4cbdcaf2bc4?rik=zwgHdnHm8PrNsA&pid=ImgRaw'  profileSrc='S' title='ellen'/>
            <Story img='https://th.bing.com/th/id/OIP.6ePEz73BGHjg4jb_aIhxJgHaLF?pid=ImgDet&rs=1'  profileSrc='S' title='Billy'/>
            <Story img='https://th.bing.com/th/id/R7c3eee3dfabb25cbc5ae06bceea17aa2?rik=YqOjqSmdg%2b5AFA&pid=ImgRaw'  profileSrc='S' title='sssangha'/>
        </div>
    )
}

export default StoryRow
