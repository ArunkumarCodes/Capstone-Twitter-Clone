import React from 'react'
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import RightSide from '../../Components/RightSide/RightSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide></ProfileSide>
        <PostSide></PostSide>
        <RightSide></RightSide>
    </div>
  )
}

export default Home