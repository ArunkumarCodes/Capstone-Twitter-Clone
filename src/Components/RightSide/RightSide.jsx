import React from 'react'
import './RightSide.css'
import Home from '../../img/home1.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {
    const [modalOpened, setmodalOpened]= useState(false);
  return (
    <div className='RightSide'>
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
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