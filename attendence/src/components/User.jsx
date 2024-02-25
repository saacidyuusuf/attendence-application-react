/* eslint-disable */

import Userimage from "../public/user.png";
import { useUser } from "@supabase/auth-helpers-react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import supabase from  '../lib/supabase'


const User = ({user}) => {
  const [clicked, isclicked] = useState(false);
  const router = useNavigate();
  
  return (
    <>
      <div className="userDisplay">
        <img
          onClick={() => isclicked(!clicked)}
          className="userImage"
          src={Userimage}
        />
        {clicked && (
          <div className="userInfo">
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
            <div className="signoutUser">
              <button>Logout</button>
            </div>
          </div>
        )}
        <h1 className="username">UserName</h1>
      </div>
    </>
  );
};

export default User;
