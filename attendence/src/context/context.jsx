import { createContext, useState,useEffect } from "react";

const intialize = {
  totalclasses: 0,
};

export const ContextHaye = createContext(intialize);

const GlobalcontextProvider = ({ children }) => {
  const [dataClass, setDataClass] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState([]);
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(0); // State variable to store selected category

  // Pass function to set selected category from DashBtns
  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    fetch("http://localhost:5000/sql/verify", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(true);
          console.log(data)
          setName(data.name);
        } else {
          setUser(false);
          setMessage(data.message);
        }
      });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5000/sql/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          window.location.reload();
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
        handleCategorySelect
      }}
    >
      {children}
    </ContextHaye.Provider>
  );
};
export default GlobalcontextProvider;
