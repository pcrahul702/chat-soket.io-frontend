import React from 'react'
import {Link} from "react-router-dom"
import {useGetCall} from "./../api"
import {useUserDetails} from "./../authentication"
export const ChatListPage = () => {
  const {user}=useUserDetails();
  const {isLoading,data:chats}=useGetCall(`/users/${user.uid}/chats`,[]);

  return (
   <div className="container">
    <h1>Chat List</h1>
    <hr/>
    {
      chats.map(chat=>{
        return <Link to={`/chat/${chat._id}`} key={chat._id}>
        <div className='list.item'>
          <h3>{chat.name}</h3>
          <p>{chat.ids.length} Members</p>
      
        </div></Link>
      })
    }
    <h1>chat will we shown here --TBD</h1>
    <Link to="/new-chat">
      <button className='btn btn-primary'>
        New Chat
      </button>
    </Link>
   </div>
  )
}
