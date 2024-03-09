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
import { useState ,useContext} from "react";
import Attendencelist from "../../utills/attendencelist";
import Timetable from "../dashboard/timetable";
import AttendenceWeek from "../dashboard/attendenceweek";
import AttendenceRate from "../dashboard/attendencerate";
import { ContextHaye } from "../context/context";

const ClassNames = ({ classesData }) => {
  const [attendence, setattendence] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);
  const {selectedCategory,setSelectedCategory} = useContext(ContextHaye)

  // Pass function to set selected category from DashBtns
  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };
  //in the && operator we are making sure that classesdata
  //is not null before rendering

  return (
    <>
      <div className="dashDIsplay">
        <DashBtns
          selectedCategory={selectedCategory}
          OncategorySelected={handleCategorySelect}
        />
        {selectedCategory === 0 && (
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

        {selectedCategory === 1 && (
          <div className="dashClass">
            <div className="date">
              <h1 className="dashText">
                Classes {classesData ? classesData.length : 0}
              </h1>
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

        {selectedCategory === 2 && (
          <div className="dashClass">
            <div className="date">
              <h1 className="dashText">
                Attendence {classesData ? classesData.length : 0}
              </h1>
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

        {selectedCategory === 3 && <Timetable />}
        {selectedCategory === 4 && <AttendenceWeek />}
        {selectedCategory === 5 && <AttendenceRate />}
      </div>
    </>
  );
};

export default ClassNames;

