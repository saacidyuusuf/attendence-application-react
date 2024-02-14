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
import DashBtns from "./DashBtns";
import { useNavigate } from "react-router-dom";
import User from "./User";
import supabase from "../lib/supabase";
import { Link } from "react-router-dom";
import { ContextHaye } from "../context/context";
import Attendencelist from "../../utills/attendencelist";
import Classeslist from "../../utills/classeslist";

export default function Nav() {
  const user = supabase.auth.getUser();
  const [classes, setclasses] = useState(false);
  const [attendence, setattendence] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openBtns, setOpenBtns] = useState(false);
  const { dataClass } = useContext(ContextHaye);

  const router = useNavigate();

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Baxar<span className="coder">Flow</span>
        </Link>
        <FiMenu
          onClick={() => setProfile(!profile)}
          className={profile !== true ? "menu" : "MenuOpen"}
        />
        <User />
      </header>

      <div className="barbardhig">
        <div>
          {user && (
            <div>
              {profile && (
                <>
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
                </>
              )}
            </div>
          )}

          {!user && (
            <Link to="/dashboard" className="auth">
              join know
            </Link>
          )}

          <FiMenu
            className="dashOpenMenu"
            onClick={() => setOpenBtns(!openBtns)}
          />
        </div>

        <div>
          {openBtns && (
            <div className="dash">
              <div className="btnsDash">
                <Link className="link" to="/dashboard">
                  <BiHomeAlt className="classesicon" />
                  <p>Dashboard</p>
                </Link>
                <div className="Container" onClick={() => setclasses(!classes)}>
                  <BiCoinStack className={`dclass`} />
                  <p>Classes</p>
                  <span className="classesLength">
                    {dataClass ? dataClass.length : 0}{" "}
                  </span>
                  {classes && <Classeslist />}
                </div>
                <div
                  className="attendenceContainer"
                  onClick={() => setattendence(!attendence)}
                >
                  <BiBookOpen className={`dashIcons att`} />
                  <p>Student Attendence</p>
                  <span className="attendenceLength">
                    {dataClass ? dataClass.length : 0}
                  </span>
                  {attendence && <Attendencelist />}
                </div>

                <Link className="link" to="/dashboard/timetable">
                  <BiSolidDashboard className="dashIcons" />
                  <p>TimeTable Period</p>
                </Link>
                <Link className="link" to="/dashboard/attendenceweek">
                  <BiCalendarWeek className="dashIcons" />
                  <p>Attendence Week</p>
                </Link>
                <Link className="link" to="/dashboard/attendencerate">
                  <BiBarChart className="dashIcons" />
                  <p>Attendence Rate</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
