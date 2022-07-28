import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const validUser = {
    id: 1,
    name: "Taryn",
    email: "taryn@email.com",
    password: "abc123"
};

// console.log(validUser);

export default function Login () {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showLoginError, setShowLoginError] = useState();
    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password);
        if (email === validUser.email && password === validUser.password) {
            setShowLoginError(false);
            setLoggedInUser(validUser);
            navigate("/cart");
        } else {
            setShowLoginError(true);
        }
    };
    
    return (
        <>
            <p style={{textAlign: "center"}}>Login Page</p>
            <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
                <label for="Email">Email</label>
                <input name="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <label for="Password">Password</label>
                <input name="Password" label="Password" value={password} type="password" onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Login</button>
            </form>
            {showLoginError && <div>User not found.</div>}
        </>
    );
}