import React,{useState} from "react"
import Sresult from "./Sresult";
const Search=()=>{

    const [img,setImg]=useState("");
const inputEvent=(event)=>{
    const data=event.target.value;
    setImg(data);
}
    return(
     <>
<div className="Searchbar">
        <input type="text" value={img} onChange={inputEvent} placeholder="Search Anything"/>

</div>
<Sresult name={img}></Sresult>
</>

    )
}
export default Search;