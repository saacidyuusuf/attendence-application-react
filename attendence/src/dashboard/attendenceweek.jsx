import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const AttendenceWeek = () => {
  return (
    <>
      <div className="weekHaye">
      {/*   <Link className="backdash" to="/">
          Back to Dashboard
        </Link> */}
        <div className="attendenceweek">
          <h1>Student AttendenceWeek</h1>
          <div className="attendenceHaye">
            <h2>Course</h2>
            <h2>Class</h2>
            <h2>Date</h2>
          </div>
          <div className="attendenceInfo">
            <div className="infos">
              <select name="" id="">
                <option value="">xisaab</option>
              </select>
            </div>
            <div className="infos">
              <select name="" id="">
                <option value="">F4</option>
                <option value="">F3</option>
                <option value="">F2</option>
              </select>
            </div>
            <div className="infos">
              <input type="date" />
            </div>
          </div>
          <button className="generate">Generate</button>
        </div>

        <h1>Report Student Attendence week</h1>
        <div className="weekInfo">
          <p></p>
          <p>Student</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        <div className="weekList">
          <p>Id</p>
          <p>Name</p>
        </div>
        <div className="weekListNames">
          <p>C1220520</p>
          <p>Cabdimalik Yuusuf Maxamuud</p>
        </div>
      </div>
    </>
  );
};

export default AttendenceWeek;
