import { Avatar, IconButton, useMediaQuery, Menu, MenuItem } from '@material-ui/core'
import { Add, ExpandMore, Flag, Forum, Home, MenuOutlined, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons'
import React, { useState } from 'react'
import './Header.css'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

function Header() {
    const [{ user }, dispatch] = useStateValue()
    const isPhone = useMediaQuery('(max-width: 600px)')
    const iconSize = !isPhone ? 'large' : 'medium'
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        auth.signOut()
    }

    return (
        <div className={isPhone ? 'header header__phone' : 'header'}>

            <div className="header__left">
                {isPhone 
                ? 
                    <Avatar src={user?.photoURL}/> 
                :
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png" alt="logo"/>
                }
                
                <div className="header__input">
                    <Search />
                    <input placeholder='Search Facebook' type="text"/>
                </div>

               {isPhone &&
                <IconButton>
                    <Forum />
                </IconButton>
               }

            </div>

            
            <div className={!isPhone ? "header__middle --isPhone" : 'header__middle'}>
                <div className="header__option header__option--active">
                    <Home fontSize={iconSize} />
                </div>
                <div className="header__option">
                    <Flag fontSize={iconSize} />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize={iconSize} />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize={iconSize} />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize={iconSize} />
                </div>
                {isPhone &&
                    <div className="header__option">
                        <MenuOutlined onClick={handleClick} fontSize={iconSize} />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                }
            </div>
            
            {!isPhone &&
                (<div className="header__right">
                    <div className="header__info">
                        <Avatar src={user?.photoURL}/>
                        <h4>{user?.displayName || user?.email}</h4>

                        <IconButton>
                            <Add />
                        </IconButton>
                        <IconButton>
                            <Forum />
                        </IconButton>
                        <IconButton>
                            <NotificationsActive />
                        </IconButton>
                        <IconButton>
                            <ExpandMore onClick={handleClick}/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Header
