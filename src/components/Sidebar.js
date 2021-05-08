import { EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'


function Sidebar() {
    const [{ user }] = useStateValue()

    return (
        <div className='sidebar'>
            <SidebarRow avatar src={user?.photoURL} title={user?.displayName || user?.email}/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={LocalHospital} title='Friends'/>
            <SidebarRow Icon={People} title='Messenger'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='More'/>
        </div>
    )
}

export default Sidebar
