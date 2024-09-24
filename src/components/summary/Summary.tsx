'use client'

import { motion } from "framer-motion"

const Summary = () => {
    return (
        <div className="w-full h-[70vh]">
            <div className="flex h-full w-full flex-col justify-center items-center">
                <h1 className="md:text-9xl text-6xl text-center font-semibold text-gray-100">BUSINESS PLAN</h1>
                <div>
                    <motion.p 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                    viewport={{once: true}}
                    className="text-xl lg:text-2xl px-10 lg:px-44 -mt-0 text-center">
                        This business plan outlines the development of 12 terrace houses on a 3,500-hectare plot in Abuja. With an estimated construction cost of 650-850 million naira, we aim to deliver a 15-25% ROI within a year for investors, with minimum investments starting at 40 million naira. The project is scheduled to commence in November 2024 and will cater to upper-middle-class buyers seeking premium residential homes.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default Summary