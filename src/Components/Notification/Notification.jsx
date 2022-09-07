import React from 'react'
import './Notification.css'
import ProfileSide from './../ProfileSide/ProfileSide';
import RightSide from './../RightSide/RightSide';

const Notification = () => {
  return (
    <div className="notification">
        <ProfileSide></ProfileSide>
        <div>Notification</div>
        <RightSide></RightSide>
    </div>
  )
}

export default Notification