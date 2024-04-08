import { useEffect,useState } from "react";
import { getAuth } from "firebase/auth";

export const useGetCall = (url,defaultValue) => {
 url="http://localhost:8080" + url;
 const [isLoading,setIsLoading]=useState(true)
 const [data,setData]=useState(defaultValue);
 useEffect(()=>{ 
    const loadData=async ()=>{
        const user=getAuth().currentUser;
      let token  =await user.getIdToken()
        const response=await fetch(url,{
            headers:{
                AuthToken:await user.getIdToken()
            }
        });
        const res_data=await response.json();
        setData(res_data);
        setIsLoading(false);
    }
    loadData();

 },[url])
 return {data,isLoading}
}
