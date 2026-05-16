import { Children } from "react";
import { createContext,useContext } from "react";

import {setUser as saveUser } from "../utils/AuthProf";
import { useState } from "react";
import { fetchUser } from "../config/auth";

const AuthContext = (children) => {
 const [user, setUser] = useState(null)
 const [loader , setLoader] =useState(true)
  const userLoad = async ()=>{
  try {
    const res =  fetchUser
  } catch (error) {
    
  }
    
     

  }
  return (
   <profileContext.Provider>
    {children}
   </profileContext.Provider>
  )
}

export default AuthContext


