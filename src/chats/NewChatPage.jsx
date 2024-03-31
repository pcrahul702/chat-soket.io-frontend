import React, { useState } from "react";
import { postApi, useGetCall } from "../api";
import { useUserDetails } from "./../authentication";
import { useNavigate } from "react-router-dom";
export const NewChatPage = () => {
  const [groupName, setGroupName] = useState("");
  const { user: currentUser } = useUserDetails();
  const { isLoading, data: users } = useGetCall("/users", []);
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  const add = (id) => {
    setMembers([...members, id]);
  };
  const remove=(id)=>{
    const copymembers=members.filter(m=>m!=id);
    setMembers([...copymembers])
  }
const createGroup=async ()=>{

  const res=await postApi("/new-chat",{
    groupName,
    membersId:[...members,currentUser.uid]
  })
  const newChatId=await res.json()
  navigate(`/chat/${newChatId}`)
}
  return (
    <div className="container">
      <h1>New Chats</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Enter a name for the group/chat"
        onChange={(e) => {
          setGroupName(e.target.value);
        }}
      />
      <h3 className="mt-3">Add Users</h3>
      <ul className="list-group mt-3">
        {users.filter(u=>u.id!=currentUser.uid)
          .map((user) => {
            return (
              <li className="list-group-item" key={user.id}>
                <label>{user.name}</label>
                {members.includes(user.id) ? (
                  <button
                    className="btn btn-danger "
                    style={{ float: "right" }}
                    onClick={()=>{
                      remove(user.id)
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="btn btn-primary "
                    style={{ float: "right" }}
                    onClick={() => {
                      add(user.id);
                    }}
                  >
                    Add
                  </button>
                )}
              </li>
            );
          })}
      </ul>
      <button className="btn btn-primary mt-3" onClick={createGroup}>Create Group</button>
    </div>
  );
};
