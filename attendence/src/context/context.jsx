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

  // No changes needed in render function, as it already displays published texts.

  useEffect(() => {
    fetch("http://localhost:5000/sql/verify", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUser(true);
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
      }}
    >
      {children}
    </ContextHaye.Provider>
  );
};
export default GlobalcontextProvider;
