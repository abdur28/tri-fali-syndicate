'use client'

import Image from "next/image"
import Button from "../Button"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="h-[80vh] w-full"
        style={{
            background: "url('/bg-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
            <div className="flex h-full w-full flex-col md:flex-row md:mt-20">
                <div className="w-full h-full gap-4 p-10 flex flex-col md:pl-20 text-white justify-center md:justify-start text-center md:text-left items-center md:items-start">
                    <motion.p
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                    viewport={{once: true}}
                    className="lg:text-lg">
                        Business Plan
                    </motion.p>
                    <motion.h1 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 0.7, ease: "easeInOut"}}}
                    viewport={{once: true}}
                    className="text-3xl font-semibold lg:text-5xl">TRI FALI SYNDICATE LTD
                    </motion.h1>
                    <motion.h3 
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0, transition: {duration: 1.2, ease: "easeInOut"}}}
                    viewport={{once: true}}
                    className="lg:text-2xl text-xl mb-5">A Residential Real Estate Development in Abuja.</motion.h3>
                    <Button Link="#about" text="Explore" color="white"/>
                </div>
                <motion.div 
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                viewport={{once: true}}
                className="flex items-center justify-center w-full h-full -mb-28 md:-mb-0 p-10 md:p-5 md:mr-10 ">
                    <Image
                    src='/image-1.png'
                    alt='image'
                    width={1920}
                    height={1080} 
                    className="w-full h-full aspect-square object-cover rounded-lg shadow-2xl"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero