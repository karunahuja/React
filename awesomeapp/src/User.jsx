import React from 'react'
import{useParams,useLocation,useHistory} from "react-router-dom"

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return(
    <>
    <h1>user{fname}page</h1>
    <p>My current location is {location.pathname} </p>
        {location.pathname===`/contact/user/karunahuja`?(
            <button onClick={()=>history.goBack()}>ClickMe</button>
        ):null}
</>
    )
};
export default User;