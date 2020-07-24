import React,{useState} from 'react';


const App=()=>{

    const [name,setName]=useState("Vinod");
    const [fullname,setfullname]=useState("")
const onSubmit=()=>{
    setfullname(name)
}

const InputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
}
    return(
        <>
        <div><h1>hello {fullname}</h1>
       <input type="text" placeholder="Enter your name" value={name} onChange={InputEvent} /*value="name" can't use value*/></input>
       <button onClick={onSubmit}>Click me</button> 
        </div></>
    )

}

export default App;


