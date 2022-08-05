import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FormContainer, LoginButton, SubTitle } from "./StyledComponents";

const validUser = {
  id: 1,
  name: "Taryn",
  email: "taryn@email.com",
  password: "abc123",
};

// console.log(validUser);

export default function Login() {
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
  }

  return (
    <>
      <SubTitle>Login Page</SubTitle>
      <FormContainer>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <label for="Email">Email</label>
          <br></br>
          <input
            name="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br></br>
          <label for="Password">Password</label>
          <br></br>
          <input
            name="Password"
            label="Password"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br></br>
          <LoginButton type="submit">Login</LoginButton>
          {showLoginError && (
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#E1523D",
              }}
            >
              User not found.
            </div>
          )}
        </form>
      </FormContainer>
    </>
  );
}
