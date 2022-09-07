import React, { useState } from 'react'
import LogoSearch from '../../Components/LogoSearch/LogoSearch'
import './Chat.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userChats } from '../../api/ChatRequests';
import Conversation from '../../Components/Conversation/Conversation';
import { Link } from 'react-router-dom';
import { UilSetting } from '@iconscout/react-unicons';
import Home from '../../img/home1.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import ChatBox from '../../Components/ChatBox/ChatBox';
import {io} from 'socket.io-client'
import { useRef } from 'react';

const Chat = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer.authData);

    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat]= useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const socket = useRef()

     // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // connect to socket.io
    useEffect(()=>{
        socket.current = io('http://localhost:8800');
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users)=>{
            setOnlineUsers(users);
        })
    },[user])

    // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);

  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

    // useEffect(()=>{
    //     const getChats = async()=>{
    //         try{
    //             const {data}= await userChats(user._id)
    //             setChats(data)
    //             console.log(data)

    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getChats()
    // },[user])

  return (
    <div className="Chat">
            {/* Left Side Part */}
        <div className="Left-side-chat">
            <LogoSearch/>
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    {chats.map((chat)=>(
                        <div onClick={()=> setCurrentChat(chat)} >
                        <Conversation data={chat} currentUserId={user._id}
                        
                        online={checkOnlineStatus(chat)} />
                    </div>

                    ))}
                    
                </div>
            </div>
        </div>
        {/* Right Side Part */}
        <div className="Right-side-chat">
            <div style={{width: '20rem', alignSelf:'flex-end'}}>
                <div className="navIcons">
                 <Link to= '../home' ><img src={Home} alt="" /></Link>
          
                 <Link to='/settings'>  <UilSetting/></Link>
                <Link to='/notification'> <img src={Noti} alt="" /></Link>
                 <Link to="../chat">
                 <img src={Comment} alt="" />
                 </Link>
                </div>
                
            </div>
            {/* Chat body */}
            <ChatBox chat={currentChat} 
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
            ></ChatBox>
        </div>
    </div>
  )
}

export default Chat