import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null,
    token: ''
  });

  useEffect(()=>{
    const data = localStorage.getItem('userInfo')
    if(data){
      const parseData = JSON.parse(data)
      setUser({
        ...user,
        user: parseData.user,
        token: parseData.token
      })
    }
    
  },[])

  return (
    <AuthContext.Provider value={[ user, setUser ]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};

// export const useAuth = () =>{
//   return useContext(AuthContext)
// }

// export default authProvider
