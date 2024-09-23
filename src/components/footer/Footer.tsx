import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const aboutText = "Founded in 2022, Abali has quickly emerged as a leading regional oil marketing company in Africa. The company has made significant investments in the sourcing, transportation, storage, distribution, and marketing of fuels, kerosene, jet fuels, LPG, and lubricants for both industrial and automotive systems."
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-center p-10 lg:mx-10 gap-5">
                <div className="md:w-1/3 w-full h-full flex flex-col justify-center gap-2 ">
                    <h1 className="text-2xl font-semibold">TRI FALI SYNDICATE, LTD</h1>
                    <p className="">This business plan outlines the development of 12 terrace houses on a 3,500-hectare plot in Abuja. With an estimated construction cost of 600 million naira, we aim to deliver a 30% ROI within a year for investors, with minimum investments starting at 80 million naira. The project is scheduled to commence in November 2024 and will cater to upper-middle-class buyers seeking premium residential homes.</p>
                </div>
                <div className="md:w-2/3 w-full h-full flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:pl-10">
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Company</h1>
                        <Link href="#about" className="hover:text-orange-500">About</Link>
                        <Link href="#investment"  className="hover:text-orange-500">Investment</Link>
                        <Link href="#plan"  className="hover:text-orange-500">Plan</Link>
                        <Link href="#gallery"  className="hover:text-orange-500">Gallery</Link>
                        <Link href="#analysis"  className="hover:text-orange-500">Analysis</Link>
                        {/* <Link href="/contact" className="hover:text-orange-500">Contact</Link> */}
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Support</h1>
                        <Link href="#contact" className="hover:text-orange-500">Contact</Link>
                        <Link href="#investors-partners" className="hover:text-orange-500">Investors & Partners</Link>
                        {/* <Link href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-orange-500">Terms and Conditions</Link> */}
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Contact</h1>
                        <p>Address: 1234, Sample Street, Lekki, Lagos, Nigeria</p>
                        <a href="mailto:info@test.com" className="hover:text-orange-500">info@test.com</a>
                        <div className="flex flex-col ">
                        <a href="tel:+252770766835" className="hover:text-orange-500">+125 770 766 835</a>
                        </div>
                        <div className="flex flex-row gap-6 mt-2">
                            <Image src="/facebook.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/instagram.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/youtube.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/x.png" alt="" className="cursor-pointer" width={16} height={16} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white"/>
            <div className="w-full flex justify-center items-center font-asap mb-5 px-10 text-center">
                <p className="text-sm">TRI FALI SYNDICATE, LTD © 2024. All rights reserved, Developed by <a className="underline" href="https://abdurrahmanidris.info">Aiadam</a></p>
            </div>
        </div>
    )
}

export default Footer