/* eslint-disable */
import { useState } from "react";
import supabase from  '../lib/supabase'
import { Link } from 'react-router-dom'


const ListStudent = ({ students, classesData, currentDate,classIdentifier }) => {
  console.log(students);
  const { ClassName } = students;
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAllCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    if (checked) {
      const allStudentNames = students.map((student) => student.name);
      setAllChecked(allStudentNames);
    } else {
      setAllChecked([]);
    }
  };
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const checked = event.target.checked;
    if (checked) {
      setAllChecked((prevState) => [...prevState, checkboxName]);
    } else {
      setAllChecked((prevState) =>
        prevState.filter((name) => name !== checkboxName)
      );
    }
  };

  const handleCancel = () =>{
    setAllChecked([]);
  }
  
  //send attendence to supabase
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const attendanceData = students.map((student) => ({
        studentid: student.id,
        studentname: student.name,
        date: currentDate,
        ispresent: allChecked.includes(student.name),
        class: classIdentifier
      }));
      const { data, error } = await supabase
        .from("attendance")
        .upsert(attendanceData, { onConflict: ["studentid", "date",'class'] });

      if (error) {
        console.error(error);
      } else {
        console.log(data);
        setIsSent(true);
        setAllChecked([]);
        setIsModalVisible(true)
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
              Class: <span>{students.length > 0 ? students[0].ClassName : ''}</span>
            </h1>
            <h1>
              Subject: <span>{classesData}</span>
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
            <input
              checked={isChecked}
              onChange={handleAllCheckboxChange}
              type="checkbox"
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
                      checked={allChecked.includes(student.name)}
                      onChange={handleCheckboxChange}
                      name={student.name}
                      className="radio"
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
            <button onClick={handleCancel} className="cancel">Cancel</button>
            {/* MODal */}
            <div
              className="modal"
              style={{ display: isModalVisible ? "block" : "none" }}
            >
              <div className="modalContent">
                <span
                  className="close"
                  onClick={() => setIsModalVisible(false)}
                >
                </span>
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
