import React,{useState} from 'react';


const App=()=>{


    const purple="#8e44ad"
    const [bg,setBg] = useState(purple);

    const [name,setName]=useState('Karun');

const bgChange=()=>{
    let newBg="#34495e"

    setBg(newBg);
    setName("Rahul");

}
const bgback=()=>{
    let newBg="#8e44ad"

    setBg(newBg);
    setName("Rohan");

}
    return(
        <>
        <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={bgback}>{name}</button>
        </div></>
    )

}

export default App;


