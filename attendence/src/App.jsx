/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import DashPage from "./dashboard/Dashboard";
import Auth from "./Auth/page";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "./lib/supabase";
import Timetable from "./dashboard/timetable";
import Attendencerate from "./dashboard/attendencerate";
import StudentAttendence from "./dashboard/studentAttendence";
import Attendenceweek from "./dashboard/attendenceweek";
import F4 from "./F4/page";
import F3 from "./F3/page";
import F2 from "./F2/page";

function App() {
  const router = useNavigate();

  /* useEffect(() => {
    if (!user) {
      router("/");
    } else {
      router("/Dashboard");
    }
  }); */
  console.log(supabase);

  return (
    <>
    
      <Routes>
        {/*     <Route path="/" element={<Auth />} /> */}
        <Route path="/" element={<DashPage />} />
        <Route path="/dashboard/timetable" element={<Timetable />} />
        <Route path="/dashboard/attendencerate" element={<Attendencerate />} />
        <Route path="/dashboard/attendenceweek" element={<Attendenceweek />} />
        <Route
          path="/dashboard/studentattendence"
          element={<StudentAttendence />}
        />
        <Route path="/classes/F4" element={<F4 />} />
        <Route path="/classes/F3" element={<F3 />} />
        <Route path="/classes/F2" element={<F2 />} />

        <Route path="/classes/F4/Listnames" element={<F4 />} />
        <Route path="/classes/F3/Listnames" element={<F3 />} />
        <Route path="/classes/F2/Listnames" element={<F2 />} />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </>
  );
}

export default App;
