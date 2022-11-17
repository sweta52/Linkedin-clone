import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';
function Sidebar() {
  const user = useSelector(selectUser);
 
  const recentItem = (topic) =>(
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
   </div>
 
 );
  
  
  return (
    <div className="sidebar">
   <div className="sidebar_top">
    <img src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
    <Avatar src={user.photoUrl} className="sidebar_avatar">
      {user.email[0]}
    </Avatar>
     <h2>{user.displayName}</h2>
     <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
     <div className="sidebar_stat">
      <p> who viewed you</p>
      <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
        <p>viewed on post</p>
      <p className="sidebar_statNumber">2,452</p>
      </div>
    </div>
    <div className="sidebar_bottom">
     <p>Recent</p>
     {recentItem('reactjs')}
     {recentItem('programing')}
     {recentItem('softwareEngineering')}
     {recentItem('design')}
     {recentItem('developer')}
    </div>
    </div>
  );
}

export default Sidebar;
