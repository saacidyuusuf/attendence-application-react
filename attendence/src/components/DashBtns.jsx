/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextHaye } from "../context/context";
import Category from "../components/CategoryData";

const DashBtns = ({ OncategorySelected }) => {
  const [openBtns, setOpenBtns] = useState(false);
  const { dataClass } = useContext(ContextHaye);
  const [selectedCategory, setSelectedCategory] = useState(0); // Initial state
  const [ShowClassesList, setShowClassesList] = useState(0);
  const [ShowAttendenceList, setShowAttendenceList] = useState(0)

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
