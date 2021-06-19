import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../reducer/login/index";
import axios from "axios";

// const state = useSelector((state) => {
// specify which state to subscribe to (state tree => reducer => state name )
// return {
//       user: state.login.user,
//       todos: state.todos.todos
//     };
//   });

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const redirect = () => {
    history.push("/dashboard");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      dispatch(setToken(res.data.token));
      console.log(res.data.token, "yyyyy");
      setLoggedIn(true);
      redirect();
    } catch (error) {
      setMessage(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>

      {message && <div>{message}</div>}
    </>
  );
};

export default Login;
