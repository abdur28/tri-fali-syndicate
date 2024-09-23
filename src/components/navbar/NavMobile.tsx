'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
// import "./sidebar.scss";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 340px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const clipPath =  "circle(0px at 315px 35px)" ;

  variants.closed.clipPath = clipPath;

  return (
    <motion.div className="flex h-full w-full" animate={open ? "open" : "closed"} initial="closed">
      <motion.div className="fixed top-0 right-0 bg-gray-300 z-20 h-screen w-[80vw]" animate={open ? "open" : "closed"} variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default NavBar;
