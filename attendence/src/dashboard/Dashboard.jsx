/* eslint-disable */

import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Nav from "../components/Nav";
import Classes from "../components/Classes";
import Login from "../Auth/page";
import { ContextHaye } from "../context/context";

const Dashboard = () => {
  const { user } = useContext(ContextHaye);
  const router = useNavigate();
  const [getBackend, setBackend] = useState([]);

  useEffect(() => {
    const FetchClasses = async () => {
      try {
        const response = await fetch(`http://localhost:5000/dashboard`);
        const data = await response.json();
        setBackend(data.classes);
      } catch (err) {
        console.log(err);
      }
    };
    FetchClasses();
  }, []);

  return (
    <>
      {!user && <Login />}
      {user && (
        <>
          <Nav user={user} />
          <Classes />

          {getBackend.map((classka) => (
            <div className="Api" key={classka.id}>
              <p>{classka.className}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Dashboard;
