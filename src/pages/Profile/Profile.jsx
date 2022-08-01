import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import RightSide from '../../Components/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft></ProfileLeft>
        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>

    </div>
  )
}

export default Profile