import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
    const [modalOpened, setmodalOpened]= useState(false);
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
           <div> <UilPen width='2rem' height='1.2rem'
           onClick={()=> setmodalOpened(true)}
           />
           <ProfileModal modalOpened={modalOpened}
           setModalOpened={setmodalOpened}/>
           </div>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>Single</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Andhra Pradesh</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>Looking</span>
        </div>
        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard