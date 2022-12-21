import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signin(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [user,setUser] = useState()
  const handleClick = () => {
    console.log("submit button clicked");
    if (userName && password) {
      props.setUser(userName);
      console.log("Login succesful");
    } else {
      console.log("login failed");
    }
  };
  if (props.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h3> Signin </h3>
        <input
          type="text"
          placeholder="enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleClick}> Submit </button>
      </div>
    );
  }
}
