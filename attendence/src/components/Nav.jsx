/* eslint-disable */
import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import { useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import User from "./User";
import supabase from "../lib/supabase";
import { Link } from "react-router-dom";
import { ContextHaye } from "../context/context";
import Attendencelist from "../../utills/attendencelist";
import Classeslist from "../../utills/classeslist";
/* import DisplayBtns from "./displayBtns";
 */
import Display from "./DashBtns";
export default function Nav({ user }) {
  const [profile, setProfile] = useState(false);
  const router = useNavigate();

  return (
    <>
      <div className="navFlex">
        <div className="barbardhig">
          <header className="header">
            <Link to="/" className="logo">
              Baxar<span className="coder">Flow</span>
            </Link>
            <FiMenu
              onClick={() => setProfile(!profile)}
              className={profile !== true ? "menu" : "MenuOpen"}
            />
            {!user && (
              <Link to="/dashboard" className="auth">
                join know
              </Link>
            )}
            <User />
          </header>
        </div>
        <Display />
       
      </div>

      <div>
        {user && (
          <div>
            {profile && (
              <div className="signoutDisplay">
                <button onClick={() => {}} className="profilePerson">
                  Profile
                </button>
                <Link to="/">
                  <button className="buttonDash ">Dashboard</button>
                </Link>
                <Link to="/dashboard/timetable">
                  <button className="buttonDash">TimeTable</button>
                </Link>
                <Link to="/dashboard/attendenceweek">
                  <button className="buttonDash">Attendence Week</button>
                </Link>
                <Link to="/dashboard/attendencerate">
                  <button className="buttonDash">Attendence Rate</button>
                </Link>
                <button>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
