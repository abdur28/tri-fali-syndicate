'use client'

import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({setOpen}: {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const items = ["About", "Investment", "Plan", "Gallery", "Analysis", "Contact"];

  return (
    <motion.div className="flex flex-col h-full w-full justify-center items-center gap-5" variants={variants}>
      {items.map((item: string) => (
        <motion.a
        className="text-2xl"
        href={`#${item.toLowerCase()}`}
        key={item}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(false)}
      >
        {item}
      </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
