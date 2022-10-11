import React from "react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [state, setState] = useState(1);

  function handleUserName(event) {
    setValue({ ...value, userName: event.target.value });
  }
  function handleEmail(event) {
    setValue({ ...value, email: event.target.value });
  }
  function handlePassword(event) {
    setValue({ ...value, password: event.target.value });
  }

  function mouseOver() {
    if (state === 1) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 2) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 3) {
      setState((prevVal) => (prevVal -= 2));
    }
  }

  var mystyle = {
    left:
      state === 1 ? "0px" : state === 2 ? "200px" : state === 3 ? "450px" : "",

    position: value.password.length < 8 && "absolute",
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <form action="">
          <div>
            <input
              onChange={handleUserName}
              value={value.userName}
              type="text"
              placeholder="username"
              className="input"
              name="username"
            />
          </div>
          <div>
            <input
              onChange={handleEmail}
              value={value.email}
              type="email"
              placeholder="Email"
              className="input"
              name="email"
            />
          </div>
          <div>
            <input
              onChange={handlePassword}
              value={value.password}
              type="password"
              placeholder="Password"
              className="input"
              name="password"
            />
            <label htmlFor="password" className="password_label">
              Password must be 8 character long
            </label>
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn "
              onMouseOver={mouseOver}
              style={mystyle}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
