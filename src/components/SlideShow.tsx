'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const images = ["/bg-2.png", "/bg-3.png", "/bg-4.png", "/bg-5.png", "/bg-6.png"] 

const SlideShow = () => {
    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 15000)
        return () => clearInterval(timer)
    }, [])
    return (
        <Image
            src={images[currentImage]}
            alt="slide"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
        />
    )
}

export default SlideShow
