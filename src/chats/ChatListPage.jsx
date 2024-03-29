import React from 'react'
import {Link} from "react-router-dom"
export const ChatListPage = () => {
  return (
   <div className="container">
    <h1>Chat List</h1>
    <hr/>
    <h1>chat will we shown here --TBD</h1>
    <Link to="/new-chat">
      <button className='btn btn-primary'>
        New Chat
      </button>
    </Link>
   </div>
  )
}
