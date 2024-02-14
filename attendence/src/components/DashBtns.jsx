/* eslint-disable */
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useContext } from "react";
import { ContextHaye } from "../context/context";
import Classeslist from "../../utills/Classeslist";
import Attendencelist from "../../utills/attendencelist";

const DashBtns = () => {
  const [classes, setclasses] = useState(false);
  const [attendence, setattendence] = useState(false);
  const [openBtns, setOpenBtns] = useState(false);
  const { dataClass } = useContext(ContextHaye);

  return (
    <>
      <FiMenu className="dashOpenMenu" onClick={() => setOpenBtns(!openBtns)}/>

      {!openBtns && (
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
    </>
  );
};

export default DashBtns;
