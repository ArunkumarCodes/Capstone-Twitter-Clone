import React, { useEffect, useState } from 'react'
import './FollowersCards.css'
import User from '../User/User'
import { getAllUser } from './../../api/UserRequests';
import { useSelector } from 'react-redux';

const FollowersCards = () => {
    const [persons, setPersons] = useState([]);
    const {user} = useSelector((state)=> state.authReducer.authData);

    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} = await getAllUser();
            setPersons(data)
            console.log(data)
        };
        fetchPersons()
    },[user]);

  return (
    <div className="FollowersCards">
        <h3>People you may know</h3>

        {persons.map((person, id)=>{
            if(person._id !== user._id){
            return <User person= {person} key = {id}/>
            }
        })}
    </div>
  )
}

export default FollowersCards