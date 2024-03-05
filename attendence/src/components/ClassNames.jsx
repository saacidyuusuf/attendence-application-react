/* eslint-disable */
import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import ListStudent from "./ListStudent";
import User from "./User";
import DashBtns from "./DashBtns";
import { Link } from "react-router-dom";
import { useState } from "react";
import Attendencelist from "../../utills/attendencelist";
import Timetable from "../dashboard/timetable";
import AttendenceWeek from "../dashboard/attendenceweek";

const ClassNames = ({ classesData }) => {
  const [attendence, setattendence] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);
  const [isSelected, setIsSelected] = useState(0); // State variable to store selected category

  // Pass function to set selected category from DashBtns
  const handleCategorySelect = (index) => {
    setIsSelected(index);
  };
  //in the && operator we are making sure that classesdata
  //is not null before rendering

  return (
    <>
      <div className="dashDIsplay">
        <DashBtns
          isSelected={isSelected}
          OncategorySelected={handleCategorySelect}
        />
        {isSelected === 0 && (
          <div className="dashClass">
            <div className="date">
              <h1 className="dashText">Dashboard</h1>
              <div className="current">
                <div>
                  <h3>CurrentDate</h3>
                </div>
                <input
                  type="date"
                  className="currentDate"
                  value={currentDate}
                  disabled
                />
              </div>
            </div>
            <div className="Classes">
              {classesData.map((classesyada) => (
                <Link className="NavLink" to={`/classes/${classesyada.class}`}>
                  <div className="class" key={classesyada.class}>
                    <h1>{classesyada.day}</h1>
                    <p>{classesyada.subject}</p>
                    <h2>
                      <BiCoinStack className="dashIconsDash" />
                      {classesyada.class}
                    </h2>
                    <br />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {isSelected === 1 && (
          <div className="dashClass">
            <div className="date">
              <h1 className="dashText">Dashboard</h1>
              <div className="current">
                <div>
                  <h3>CurrentDate</h3>
                </div>
                <input
                  type="date"
                  className="currentDate"
                  value={currentDate}
                  disabled
                />
              </div>
            </div>
            <div className="Classes">
              {classesData.map((classesyada) => (
                <Link className="NavLink" to={`/classes/${classesyada.class}`}>
                  <div className="class" key={classesyada.class}>
                    <h1>{classesyada.day}</h1>
                    <p>{classesyada.subject}</p>
                    <h2>
                      <BiCoinStack className="dashIconsDash" />
                      {classesyada.class}
                    </h2>
                    <br />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {isSelected === 2 && (
          <div className="dashClass">
            <div className="date">
              <h1 className="dashText">Dashboard</h1>
              <div className="current">
                <div>
                  <h3>CurrentDate</h3>
                </div>
                <input
                  type="date"
                  className="currentDate"
                  value={currentDate}
                  disabled
                />
              </div>
            </div>
            <div className="Classes">
              {classesData.map((classesyada) => (
                <Link className="NavLink" to={`/classes/${classesyada.class}`}>
                  <div className="class" key={classesyada.class}>
                    <h1>{classesyada.day}</h1>
                    <p>{classesyada.subject}</p>
                    <h2>
                      <BiCoinStack className="dashIconsDash" />
                      {classesyada.class}
                    </h2>
                    <br />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        

        {isSelected === 3 && <Timetable />}
        {isSelected === 4 && <AttendenceWeek />}
      </div>
    </>
  );
};

export default ClassNames;


{
  /* <>
<div
  className="attendenceContainer"
  onClick={() => setattendence(!attendence)}>
  <BiBookOpen className={`dashIcons att`} />
  <span className="attendenceLength">
    {classesData ? classesData.length : 0}
  </span>
  {attendence && <Attendencelist />}
</div>
</> */
}
