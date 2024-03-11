/* eslint-disable */
import { useState } from "react";
import supabase from "../lib/supabase";
import { Link } from "react-router-dom";
import DisplayBtns from "./displayBtns";
import DashBtns from "./DashBtns";

const ListStudent = ({
  students,
  currentDate,
  classIdentifier,
}) => {
  // console.log(students);
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAllcheckbox = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      const checkallNames = students.map((student) => student.name);
      setAllChecked(checkallNames);
    } else {
      setAllChecked([]);
    }
  };

  const handleSingleCheckbox = (e) => {
    const checked = e.target.checked;
    const checkedName = e.target.name;
    if (checked) {
      setAllChecked((prevState) => [...prevState, checkedName]);
    } else {
      setAllChecked((prevState) =>
        prevState.filter((state) => state !== checkedName)
      );
    }
  };

  const handleCancel = () => {
    setAllChecked([]);
  };

  //send attendence to supabase
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const attendanceData = students.map((student) => ({
        studentid: student.id,
        studentname: student.name,
        date: currentDate,
        ispresent: allChecked.includes(student.name),
        class: classIdentifier,
      }));
      const { data, error } = await supabase
        .from("attendance")
        .upsert(attendanceData, { onConflict: ["studentid", "date", "class"] });

      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setIsSent(true);
        setAllChecked([]);
        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
              Class:
              <span>{students.length > 0 ? students[0].ClassName : ""}</span>
            </h1>
            <h1>
              Subject:
              <span>{students.length > 0 ? students[1].subject : ""}</span>
            </h1>
            <h1>
              Date:
              <span>
                <input
                  type="date"
                  className="currentDate"
                  value={currentDate}
                  disabled
                />
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
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleAllcheckbox}
              className="radio"
            />
          </div>
          <div className="tableNames">
            {students.map((student) => (
              <>
                <div className="radiotablenameHaye">
                  <div className="tablename">
                    <p>{student.id}:</p>
                    <p className="studentNames">{student.name}</p>
                  </div>
                  <div className="divRadio">
                    <input
                      type="checkbox"
                      className="radio"
                      checked={allChecked.includes(student.name)}
                      onChange={handleSingleCheckbox}
                      name={student.name}
                    />
                  </div>
                </div>
              </>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className="submitStudents"
            >
              {isLoading ? "Loading.." : "Submit"}
            </button>
            <button onClick={handleCancel} className="cancel">
              Cancel
            </button>
            {/* MODal */}
            <div
              className="modal"
              style={{ display: isModalVisible ? "block" : "none" }}
            >
              <div className="modalContent">
                <span
                  className="close"
                  onClick={() => setIsModalVisible(false)}
                ></span>
                <p>Attendance sent successfully</p>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListStudent;
