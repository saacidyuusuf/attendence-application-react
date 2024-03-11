/* eslint-disable */
import Userimage from "../public/user.png";
import { useUser } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import supabase from "../lib/supabase";
import { ContextHaye } from "../context/context";
import { Link } from "react-router-dom";

const User = () => {
  const [clicked, isclicked] = useState(false);
  const router = useNavigate();
  const { user, message, name, handleLogout, role } = useContext(ContextHaye);

  return (
    <>
      <div className="userDisplay">
        {user ? (
          <>
            <img
              onClick={() => isclicked(!clicked)}
              className="userImage"
              src={Userimage}
            />
          </>
        ) : (
          <>
            <img
              onClick={() => isclicked(!clicked)}
              className="userImage"
              src={Userimage}
            />
            <h1 className="username">{message}</h1>
          </>
        )}

        {clicked && (
          <div className="userInfo">
            <h1 className="username">
              Name:
              {name}
            </h1>
            <p className="role">
              Role:
              {role}
            </p>
            <h4>
              Subject:
              <span>Xisaab</span>
            </h4>
            <h4>
              Number:
              <span>615422035</span>
            </h4>
            <h4>
              Gmail: <span>Saacidyuusuf871@gmail.com</span>
            </h4>
            {user ? (
              <div className="signoutUser">
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="signoutUser">
                <Link to="/">
                  <button>login</button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default User;
