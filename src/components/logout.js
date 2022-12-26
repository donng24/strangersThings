import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Logout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    const history = useHistory();

    function handleLogout() {
       localStorage.removeItem("loginData");
       setIsLoggedIn(false)
    
    }

    return (
        <button onSubmit={handleLogout} disabled={!isLoggedIn}>
        Logout
        </button>
    )
 }


export default Logout