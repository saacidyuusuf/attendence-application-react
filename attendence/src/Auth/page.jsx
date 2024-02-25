import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserData, setUserData] = useState([]);
  const [classData, setClasses] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

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

  /* 
   if (user.role === "admin") {
          router("/dashboard");
        } else if (user.role === "teacher") {
          router("/teacher-dashboard");
        } else {
          router("/student-dashboard");
        }
  */

  return (
    <div className="login">
      <h1>Student Attendence</h1>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Email"
            value={email}
            name="name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
