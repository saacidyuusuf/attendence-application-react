import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TimeTable = ({user}) => {
  const [timetable, setTimeTable] = useState([]);

  const getTimeFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return time;
  };
  useEffect(() => {
    const fetchTimeTable = async () => {
      const response = await fetch("http://localhost:5000/Timetable");
      const data = await response.json();
      console.log(data);
      setTimeTable(data);
    };
    fetchTimeTable();
  }, []);
  console.log(timetable);
  return (
    <>
      <Nav />
      <Link className="backdash" to="/">
        Back to Dashboard
      </Link>
      <div className="TimeTable">
        <h1 className="one">TimeTable</h1>
        <div className="infoTimeTable">
          <h1>Class</h1>
          <h1>Subject</h1>
          <h1>Time</h1>
          <h1>Type</h1>
        </div>
        {timetable.map((table) => (
          <div className="tableHaye">
            <div className="TimetableTop">
              <h1>Saturday</h1>
            </div>
            <div className="bodyTable">
              <p>{table.className}</p>
              <p>{table.subjectName}</p>
              <p>{getTimeFromTimestamp(table.classTime)}</p>
              <p>{table.classType}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeTable;


