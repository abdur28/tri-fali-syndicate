'use client'

import { motion } from "framer-motion"

const Button = ({Link, text, color}: {Link: string, text: string, color?: string}) => {
    return (
        <motion.a
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
        viewport={{once: true}}
        href={Link}
        >
            <button className={`px-4 py-2 rounded-3xl border ${color === "white" ? "border-white" : "border-black "}  hover:border-black hover:bg-black hover:text-white`}>
                {text}
            </button>
        </motion.a>
    )
}

export default Button