import React from 'react'
import Logo from '../../img/logo2.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt=""/>
        <div className="Search">
            <input type="text" placeholder='Search Twitter clone' />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch