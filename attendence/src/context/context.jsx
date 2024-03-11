import { createContext, useState,useEffect } from "react";
import { redirect } from "react-router-dom";

const intialize = {
  totalclasses: 0,
};

export const ContextHaye = createContext(intialize);

const GlobalcontextProvider = ({ children }) => {
  const [dataClass, setDataClass] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState([]);
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(0); // State variable to store selected category

  // Pass function to set selected category from DashBtns
  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/sql/verify", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to verify token"); // Handle non-2xx response
        }

        const data = await response.json();
        if (data.status === "success") {
          setUser(true);
          setName(data.name);
          setRole(data.role);
        } else {
          setUser(false); // Mark as not logged in
          setMessage(data.message);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setUser(false); // Assume not logged in if error occurs (safety)
      }
    };
    checkUser();
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5000/sql/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          redirect('/login')
        } else {
          console.log("logout error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ContextHaye.Provider
      value={{
        dataClass,
        setDataClass,
        isAuthenticated,
        setAuthenticated,
        user,
        handleLogout,
        message,
        name,
        selectedCategory,
        setSelectedCategory,
        handleCategorySelect,
        role,
        setUser
      }}
    >
      {children}
    </ContextHaye.Provider>
  );
};
export default GlobalcontextProvider;
