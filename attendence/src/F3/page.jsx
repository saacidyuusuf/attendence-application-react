import { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import ListStudent from "../components/ListStudent";
import supabase from "../lib/supabase";
import { useParams } from "react-router-dom";
import Listnames from "../components/listOnlynames";
import { ContextHaye } from "../context/context";

const Students = () => {
  const { className } = useParams();
  const [students, setStudents] = useState(null);
  const [error, setError] = useState();
  const ClassIdentifier = "f3students";

  const { selectedCategory, setSelectedCategory } = useContext(ContextHaye);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("F3").select("*");
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
            {selectedCategory === 1 && (
              <Listnames
                students={students}
                classIdentifier={ClassIdentifier}
                currentDate={currentDate}
              />
            )}
            {selectedCategory === 2 && (
              <ListStudent
                students={students}
                classIdentifier={ClassIdentifier}
                currentDate={currentDate}
              />
            )}
          </>
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </>
  );
};

export default Students;