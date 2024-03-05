import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserData, setUserData] = useState([]);
  const [classData, setClasses] = useState([]);
  const router = useNavigate();
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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          router("/dashboard");
        } else {
          console.log(data.message);
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











/* 
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpLink = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [value, setValue]);
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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          navigate("/");
        } else {
          console.log(data.message);
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

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="signUpContext">
      <h1>Sign Up</h1>
      <form onSubmit={HandleSubmit}>
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
      </form>
    </div>
  );
};

export default SignUpLink;

 */


/* 
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!data.user) {
        // Handle error
        console.log("login error", data);
        return;
      }
      //catch Error: Unexpected token '<', "<h1>login<"... is not valid JSON
      //const { user, classes } = data;
      setClasses(data.classes);
      if (data.user) {
        setUserData(data.user);
      };
      console.log(UserData);
      console.log(classData);
      console.log(data);
      router("/dashboard");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        // Display the error message from the response (if available)
      } else if (error.request) {
        console.error("Error in the request:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handing login function");
    handleLogin();
  };

*/
