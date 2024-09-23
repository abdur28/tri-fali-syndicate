'use client'

import Image from "next/image"
import Button from "../Button"
import { motion } from "framer-motion"

const Investment = () => {
    return (
        <div className="w-full min-h-[110vh]">
            <div className="w-full h-full flex flex-col md:flex-row gap-5">
                <motion.div 
                initial={{opacity: 0, x: -100,}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                viewport={{once: true}}
                className="p-10 md:p-20 md:w-1/2 w-full h-full">
                    <Image
                    src='/investor.jpg'
                    alt='image'
                    width={1920}
                    height={1080}
                    className="w-full h-full aspect-square object-cover rounded-lg shadow-2xl"
                    />
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                viewport={{once: true}}
                className="h-full md:w-1/2 w-full flex flex-col justify-center items-center gap-10 px-10">
                     <h1 className="text-3xl font-semibold text-center">Key Investment Highlights</h1>
                     <ul className="flex flex-col gap-5">
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p  className="w-[90%]">{`Investment Size: ₦80 million (minimum) to ₦800 million`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p  className="w-[90%]">{`Expected ROI: 25% within 12 months`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Project Location: 3,500 hectares in Abuja`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Development: 12 terrace houses, 3 floors each`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Construction Cost: ₦600-800 million (includes full amenities)`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Timeline: 12 months (starting November 2024)`}</p>
                        </li>
                        <li className="flex flex-row gap-2 h-full w-full items-center">
                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                            <p className="w-[90%]">{`Exit Strategy: Sale of terrace houses to individual buyers or investors`}</p>
                        </li>
                     </ul>
                     <Button Link="#contact" text="Invest" color="black"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Investment