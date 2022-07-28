import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function AuthChecker(props) {
    const { loggedInUser } = useContext(UserContext);

    if (!loggedInUser) {
        return <Navigate to="/login" />
    } else {
    return props.children;
}
}