import React from 'react'
import Cover from '../../img/cover1.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
    const profilepage = true;
  return (
    <div className='ProfileCard'>
        <div className="profileImages">
            <img src={Cover} alt="" srcset="" />
            <img src={Profile} alt="" srcset="" />
        </div>

        <div className="ProfileName">
            <span>Arunkumar V</span>
            <span>Full Stack Web Developer</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>580</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>300</span>
                    <span>Followers</span>
                </div>
                {profilepage && (
                    <>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                    
                    </>
                )}
            </div>
            <hr />
        </div>
        {profilepage ? "":<span>
            My Profile
        </span>}

    </div>
  )
}

export default ProfileCard