/* eslint-disable */

import React, { useEffect, useState, useContext } from "react";
import ClassNames from "./ClassNames";
import ListStudent from "./ListStudent";
import { ContextHaye } from "../context/context";
import supabase from  '../lib/supabase'



const Classes = () => {
  const { dataClass, setDataClass } = useContext(ContextHaye);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClasses() {
      try {
        let query = supabase.from("classes").select("*");
        const { data, error } = await query;
        console.log("Data:", data);
        console.log("Error:", error);
        if (error) {
          console.error("Error fetching classes:", error.message);
          setDataClass(null);
        } else {
          setDataClass(data);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
    fetchClasses();
  },[]);

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : dataClass !== null && dataClass.length > 0 ? (
        <ClassNames classesData={dataClass} />
      ) : (
        <p>No classes available</p>
      )}
    </>
  );
};

export default Classes;
