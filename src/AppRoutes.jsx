import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { SignInPage } from './authentication'
import {NavBar} from "./navigation"
export const AppRoutes = ({user}) => {
  return (
    <Router>
        <NavBar user={user}/>
        <Routes>
            <Route path="/sign-in" element={<SignInPage/>}/>
        </Routes>
    </Router>
  )
}

