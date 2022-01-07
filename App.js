// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Sender />
      <br />
      <br />
      {/* <MyComponent /> */}
    </>
  );
}

function MyComponent() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const addUser = async () => {
    if (username == "" || password == "" || email == "") {
      alert("Validation fails");
      return;
    }

    const url = "http://localhost:4000/us";
    const data = {
      username: username,
      password: password,
      email: email,
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setUsername("");
    setPassword("");
    setemail("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // LIke Constructor
  useEffect(() => getUser(), []);

  return (
    <div>
      <h2 className="bg-dark text-light p-3">User Registration</h2>
      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          name=""
          id=""
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
      </div>
      {/* <input class={message} type={button} /> */}

      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          name=""
          id=""
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <input
          className="form-control form-control-lg mb-1"
          type="text"
          name=""
          id=""
          value={email}
          onChange={handleemailChange}
          placeholder="email"
        />
      </div>
      <div>
        <input
          className="btn btn-secondary w-100"
          type="button"
          name=""
          value="Register"
          onClick={addUser}
        />
      </div>

      <h3 className="bg-dark text-light mt-1 p-3">User List</h3>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.username} {item.password}{item.email}
        </div>
      ))}
    </div>
  );
}

function Sender() {
  const [sMessage, setsMessage] = useState("");
  const [list, setList] = useState([]);

  const handleUsernameChange = (e) => {
    setsMessage(e.target.value);
  };


  const addUser = async () => {
    if (sMessage === "") {
      alert("Validation fails");
      return;
    }

    const url = "http://localhost:4000/us";
    const data = {
      username: sMessage
    };

    // AJAX using AXIOS
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setsMessage("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // LIke Constructor
  useEffect(() => getUser(), []);
  return (
    <div>
      <h2 className="bg-dark text-light p-3">MychatApp</h2>
      <div>
        <input
          className="form-control form-control-lg mb-1 xl-6"
          type="text"
          name=""
          id=""
          value={sMessage}
          onChange={handleUsernameChange}
          placeholder="Enter message"
        />

        <input
          className="btn btn-secondary w-100"
          type="button"
          name=""
          value="Send"
          onClick={addUser}
        />
      </div>




      <h3 cassName="bg-dark text-light mt-1 p-3">MESSAGE</h3>

      {list.map((item, index) => (
        <div key={index} className="alert alert-secondary fs-4">
          {item.username}
        </div>
      ))}
    </div>
  );
}




