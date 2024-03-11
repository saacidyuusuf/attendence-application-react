/* eslint-disable */
import { useState } from "react";
import supabase from  '../lib/supabase'
import { Link } from 'react-router-dom'


const Listnames = ({ students, classesData, currentDate,classIdentifier }) => {

  //send attendence to supabase

  return (
    <>
      <Link className="backdash" to="/">
        Back to Dashboard
      </Link>
      <div className="listStudents">
        <h1 className="one">Student Attendence</h1>
        <div className="infoClass">
          <>
            <h1>
              Class: <span>{students.length > 0 ? students[0].ClassName : ''}</span>
            </h1>
            <h1>
              Subject: <span>{students.length > 0 ? students[1].subject : ''}</span>
            </h1>
            <h1>
              Date:
              <span>
                <input type="date" className="currentDate" value={currentDate} disabled />
              </span>
            </h1>
          </>
        </div>

        <h2 className="total">
          Total Students: <span>{students.length}</span>
        </h2>
        <div className="tableHaye">
          <div className="tableTop">
            <h1>Id</h1>
            <h1>Name</h1>
            <h2>Check all</h2>
          </div>
          <div className="tableNames">
            {students.map((student) => (
              <>
                <div className="radiotablenameHaye">
                  <div className="tablename">
                    <p>{student.id}:</p>
                    <p className="studentNames">{student.name}</p>
                  </div>
                </div>
              </>
            ))} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Listnames
