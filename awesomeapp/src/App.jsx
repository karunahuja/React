import React,{useState} from 'react';


const App=()=>{

    const [name,setName]=useState("Vinod");
    const [fullname,setfullname]=useState("")
const onSubmit=(event)=>{
    event.preventDefault();
    setfullname(name)
    
}

const InputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
}

const [password,setpassword]=useState("");

const InputEvent2=(event)=>{
    setpassword(event.target.value);
}
    return(
        <>
        <div>
        <form onSubmit={onSubmit}>      
        <h1>hello {fullname}</h1>
       <input type="text" placeholder="Enter your name" value={name} onChange={InputEvent} /*value="name" can't use value*/></input>
       <input type="password" placeholder="Enter your password" value={password} onChange={InputEvent2} /*value="name" can't use value*/></input>
       <button type="submit" >Click me</button> 
       </form>
    </div></>
    )

}

export default App;


