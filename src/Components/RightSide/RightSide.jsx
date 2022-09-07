import React from 'react'
import './RightSide.css'
import Home from '../../img/home1.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom';

const RightSide = () => {
    const [modalOpened, setmodalOpened]= useState(false);
  return (
    <div className='RightSide'>
        <div className="navIcons">
          <Link to= '../home' ><img src={Home} alt="" /></Link>
          
          <Link to='/settings'>  <UilSetting/></Link>

           <Link to='/notification'> <img src={Noti} alt="" /></Link>
            <Link to="../chat">
            <img src={Comment} alt="" />
            </Link>
        </div>
        <TrendCard></TrendCard>
        <button className="button r-button" onClick={() => setmodalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setmodalOpened} />
    

    </div>
  )
}

export default RightSide