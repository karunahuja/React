import React from "react"
import {NavLink} from "react-router-dom"
const Menu=()=>{

return(
<>
<NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
<NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
<NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
<NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
<br/>
<a href="/">About us</a>
<a href="/contact">Contact</a>
<a href="/Service">Service</a>
</>
)

}
export default Menu;