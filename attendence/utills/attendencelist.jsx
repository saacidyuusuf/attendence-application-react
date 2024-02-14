import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "./motion";
import { Link } from 'react-router-dom'

const classeslist = () => {
  return (
    <motion.div
      className="showclasses"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Link to="/classes/F4">
        <motion.span variants={textVariant(0.8)}>Class F4</motion.span>
      </Link>
      <motion.span variants={textVariant(0.8)}>Class F3</motion.span>
      <motion.span variants={textVariant(0.8)}>Class F2</motion.span>
    </motion.div>
  );
};

export default classeslist;
