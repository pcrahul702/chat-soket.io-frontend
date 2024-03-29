import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { ProtectRoute, SignInPage } from './authentication'
import {NavBar} from "./navigation"
import {ChatListPage,NewChatPage} from "./chats"

export const AppRoutes = ({user}) => {
  return (
    <Router>
        <NavBar user={user}/>
        <Routes>
            <Route element={<ProtectRoute user={user}/>} >
            <Route path="/" element={<ChatListPage/>}/>
            <Route path="/new-chat" element={<NewChatPage/>}/>
            </Route>
            <Route path="/sign-in" element={<SignInPage/>}/>
        </Routes>
    </Router>
  )
}

