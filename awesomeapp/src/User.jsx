import React from 'react'
import{useParams,useLocation} from "react-router-dom"

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    return(
    <>
    <h1>user{fname}page</h1>
    <p>My current location is {location.pathname} </p>
        {location.pathname===`/contact/user/karunahuja`?(
            <button>ClickMe</button>
        ):null}
</>
    )
};
export default User;