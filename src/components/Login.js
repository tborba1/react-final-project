import { useState } from "react";

export default function Login () {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted");
    }
    
    return (
        <>
            <p style={{textAlign: "center"}}>Login Page</p>
            <form onSubmit={handleSubmit}>
                <label for="Email">Email</label>
                <input name="Email" value={email} setValue={setEmail} />
                <label for="Password">Password</label>
                <input name="Password" label="Password" value={password} setValue={setPassword} inputType="password" />

            </form>
        </>
    );
}