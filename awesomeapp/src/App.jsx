import React, { useState } from 'react';


const App = () => {

    const [fullname, setFullName] = useState({

        fname: "",
        lname: "",
        email: "",
        phone: "",


    });






    const InputEvent = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
        return{
                    ...preValue,
                    [name]:value

        }
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone

            //     }
            // } else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }

            // else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone
            //     }

            // } else if (name === "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value
            //     }
            // }



        })

    }


    const onSubmit = (event) => {
        event.preventDefault();

        alert("Form Submitted")

    }

    return (
        <>
            <div>

                <form onSubmit={onSubmit}>
                    <h1>Hello {fullname.fname}{fullname.lname}
                        {fullname.email}{fullname.phone}
                    </h1>
                    <input type="text" name="fname" placeholder="Enter your name" value={fullname.fname} onChange={InputEvent} /*value="name" can't use value*/></input>
                    <input type="text" name="lname" placeholder="Enter your last Name" value={fullname.lname} onChange={InputEvent} /*value="name" can't use value*/></input>
                    <input type="email" name="email" placeholder="Enter your email" value={fullname.email} onChange={InputEvent} /*value="name" can't use value*/></input>
                    <input type="text" name="phone" placeholder="Enter your phone" value={fullname.phone} onChange={InputEvent} /*value="name" can't use value*/></input>
                    <button type="submit" >Click me</button>
                </form>
            </div>
        </>
    )

}
export default App;


