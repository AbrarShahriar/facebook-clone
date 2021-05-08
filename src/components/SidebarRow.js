import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({ title, Icon, src, avatar }) {
    return (
        <div className='sidebarRow'>
            {(avatar || src) && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
