import {getAuth,onAuthStateChanged} from "firebase/auth"
import { useState,useEffect } from "react"
export const useUserDetails=()=>{
    const [userDetails,setUserDetails]=useState(()=>{
        const auth=getAuth();
        const user=auth.currentUser;
        const isloading=!user;
        return {isloading,user}
    })
    useEffect(()=>{
        const auth=getAuth();
        return onAuthStateChanged(auth,user=>{
            setUserDetails({isloading:false,user})
        })
    },[])
    return userDetails;
}