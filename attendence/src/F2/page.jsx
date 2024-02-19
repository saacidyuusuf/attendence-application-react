
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import ListStudent from "../components/ListStudent";
import Listnames from "../components/listOnlynames";
import supabase from "../lib/supabase";

const Students = () => {
  const [students, setStudents] = useState(null);
  const [error, setError] = useState();

  const ClassIdentifier = 'f2students'
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("F2").select("*");
        if (error) {
          setError(error);
          setStudents(null);
          console.log(error);
        } else {
          setStudents(data);
          setError(null);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setStudents(null);
      }
    }
    fetchData();
  }, []);
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <>
      <Nav />
      <div className="studentHaye">
        <h1 className="text-center">Student List</h1>
        {students ? (
          <>
          <ListStudent students={students} classIdentifier={ClassIdentifier} currentDate={currentDate} />
          <Listnames students={students} classIdentifier={ClassIdentifier} currentDate={currentDate} />
          </>
        ) : (
          <span class="loader"></span>
        )}
      </div>
    </>
  );
};

export default Students;
