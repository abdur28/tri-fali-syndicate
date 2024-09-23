'use client'

import { motion } from "framer-motion"
import SlideShow from "../SlideShow"


const Description = () => {
    return (
        <div className="w-full md:h-[150vh] h-[120vh] flex flex-col justify-center items-center">
            <div className="w-full h-[300px] md:h-[800px] overflow-hidden">
                <SlideShow />
            </div>
            <motion.div 
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0, transition: {duration: 1, ease: "easeInOut"}}}
            viewport={{once: true}}
            className="md:w-[500px] md:h-max w-[80%] h-max md:-mt-[25rem] p-10 -mt-[1.5rem] md:ml-96 lg:ml-[40rem] bg-white shadow-2xl rounded-lg">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Business Description</h1>
                    <p>{`The project involves the construction of 12 luxury 3-floor terrace houses on a 3,500-hectare plot in a prime location in Abuja. With full modern amenities, the project will target high-income individuals and families seeking premium residential properties in one of Nigeria's fastest-growing real estate markets.`}</p>
                    <h1 className="text-2xl mt-5">Objectives</h1>
                    <ul className="flex flex-col gap-5">
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p  className="w-[90%]">{`Development of 12 Terrace Houses: To deliver high-quality residential homes with modern amenities.`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p  className="w-[90%]">{`Construction Timeline: Complete construction within 12 months starting November 2024.`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Investor ROI: Ensure a 30% return on investment by strategically pricing and selling the units to buyers within a year of project completion.`}</p>
                        </li>
                     </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default Description