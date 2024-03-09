/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import {
  BiSolidDashboard,
  BiCalendarWeek,
  BiHomeAlt,
  BiBookOpen,
  BiBarChart,
  BiCoinStack,
} from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextHaye } from "../context/context";
import Classeslist from "../../utills/Classeslist";
import Category from "../components/CategoryData";
import Attendencelist from "../../utills/attendencelist";

const DashBtns = ({ OncategorySelected }) => {
  const [classes, setclasses] = useState(false);
  const [openBtns, setOpenBtns] = useState(false);
  const { dataClass } = useContext(ContextHaye);
  const [showAttendenceList, setShowAttendenceList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0); // Initial state
  const [showClassesList, setShowClassesList] = useState(false);

  useEffect(() => {
    if (selectedCategory === 1) {
      setShowClassesList(true);
      setShowAttendenceList(false);
    } else if (selectedCategory === 2) {
      setShowClassesList(false);
      setShowAttendenceList(true);
    } else {
      setShowClassesList(false);
      setShowAttendenceList(false);
    }
  }, [selectedCategory]);
  
  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    OncategorySelected(index); // Call passed function to update parent component state
  };
  // Toggle showing the Classes list based on the selected category

  return (
    <>
      <FiMenu className="dashOpenMenu" onClick={() => setOpenBtns(!openBtns)} />

      {!openBtns && (
        <div className="dash">
          {Category.map((cate, index) => (
            <div
              onClick={() => handleCategoryClick(index)}
              className={
                selectedCategory === index ? "SelectedGreen" : "btnsDash"
              }>
              <p className="dashIcons">{React.createElement(cate.icon)}</p>
              <p>{cate.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DashBtns;
