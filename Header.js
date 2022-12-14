import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
 import NotificationIcon from "@material-ui/icons/Notifications"
import { useDispatch  } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';



function Header() {

  const dispatch= useDispatch();
  const logoutOfApp= () =>{
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className="header">
     
 <div className="header_left">
<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
<div className="header_search">
    <SearchIcon/> 
    <input placeholder="Search" type="text"/>

</div>
 </div>

 <div className="header_right">
<HeaderOption Icon={HomeIcon} title="Home"/>
<HeaderOption Icon={SupervisorAccountIcon}  title="My Network" />
<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
<HeaderOption Icon={ChatIcon} title="Messaging" />
<HeaderOption Icon={NotificationIcon} title="Notifications" />
 <HeaderOption avatar={true}
 title="me"
  onClick={logoutOfApp}/>
 </div>


    </div>

  )
}

export default Header;
