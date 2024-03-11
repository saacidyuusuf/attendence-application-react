import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextHaye } from "../context/context";

const Login = () => {
  const { user,setUser } = useContext(ContextHaye);
  /*   const [UserData, setUserData] = useState([]);
  const [classData, setClasses] = useState([]); */
  // State to manage login status (initially set to unknown)
  const navigate = useNavigate()
    const [value, setValue] = useState({
    email: "",
    password: "",
  });



  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/sql/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(value), // Convert value to JSON
      headers: {
        "Content-Type": "application/json", // Add Content-Type header
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setUser(true)
          navigate("/");
        } else {
          console.log(data.message);
          navigate('/login')
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log(error.response.data.message);
        } else {
          console.log("An error occurred");
        }
      });
  };

  return (
    <div className="login">
      <h1>Student Attendence</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={HandleSubmit}>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
