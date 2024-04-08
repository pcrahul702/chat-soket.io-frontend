import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";
import {useParams} from "react-router-dom"
import {useUserDetails} from "./../authentication"
export const ChatPage = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message,setMessage]=useState("");
  const {id:chatId}=useParams();
  const {user}=useUserDetails();
  useEffect(() => {
    const createConnection = async () => {
      const socket = socketIO(
        "http://127.0.0.1:8080",{
          query:{
            token:await user.getIdToken()
          },
        }
      );
      setSocket(socket);
      socket.on("updatedChats",(data)=>{
        // console.log(messages)
        if(data.chatId==chatId){
          setMessages(data.messages)
        }
        
      })
    };

    createConnection();
  }, [user,chatId]);
  const sendMessage=async ()=>{
    socket.emit("sendMessage",{
      message,
      chatId,
      userId:user.uid,
      query:{
        token:await user.getIdToken()
      },

    })
    setMessage("");
  }
  return (
    <div className="container">
      <ul className="list-group mt-2">
        {messages.map((message,index) => {
        return  <li key={index} className="list-group-item">
            <h5 style={{fontSize:"12px"}}>{message.postedBy.name}</h5>
            <p>{message.text}</p>
          </li>;
        })}
      </ul>
      <div className="input-group mt-3">
        <input type="text" placeholder="Enter a New message"
        onChange={(e)=>setMessage(e.target.value)}
        value={message}
        className="form-control"/>
        <button className="btn btn-info" onClick={sendMessage}>Send</button>
      </div>
    </div>
   
  );
};
