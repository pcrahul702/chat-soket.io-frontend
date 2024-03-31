import React, { useState } from 'react'

export const NewChatPage = () => {
  const [groupName,setGroupName]=useState("")
  const users=[{
    id:"1",
    name:"Lokesh"
  },
  {
    id:"2",
    name:"rahul"
  },{
    id:"3",
    name:"rohit"
  },{
    id:"4",
    name:"puja"
  }]
  return (
    <div className="container">
      <h1>New Chats</h1>
      <hr />
      <input
      className='form-control'
      type='text'
      placeholder='Enter a name for the group/chat'
      onChange={(e)=>{
        setGroupName(e.target.value)
      }}
      />
      <h3 className='mt-3'>Add Users</h3>
      <ul className='list-group mt-3'>
        {
          users.map((user)=>{return (
            <li className='list-group-item'  key={user.id}>
            <label>{user.name}</label>
            <button className='btn btn-primary ' style={{float:"right"}}>Add</button>
          </li>
          )})
         
        }
      </ul>
      <button className='btn btn-primary mt-3'>Create Group</button>
    </div>
  )
}
