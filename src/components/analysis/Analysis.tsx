'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const Analysis = () => {
    const sections = [
        {
            title: "Market Analysis",
            icon: "/market-analysis.png",
            points: [
                "Location: Abuja’s real estate market is booming, with demand for high-quality residential properties continuing to rise, driven by the city’s status as Nigeria’s capital and a business hub.",
                "Target Market: The target demographic includes upper-middle-class buyers, expatriates, professionals, and families looking for premium, spacious housing in secure neighborhoods.",
                "Competition: While several developers are active in the region, your project will stand out with its modern design, exclusive features, and strategic pricing.",
            ]
        },
        {
            title: "Revenue Model",
            icon: "/revenue.png",
            points: [
                "Total Units for Sale: 12 terrace houses.",
                "Average Selling Price per Unit: ₦100 million (based on market analysis of similar developments).",
                "Estimated Total Revenue: ₦1.2 billion (12 units x ₦100 million per unit).",
            ]
        },
        {
            title: "Cost Breakdown",
            icon: "/cost-breakdown.png",
            points: [
                "Land Acquisition (Already Secured)",
                "Construction Costs: ₦600-800 million (for materials, labor, and permits).",
                "Marketing and Sales Costs: ₦30 million (for agents, marketing campaigns, and administrative costs).",
                "Miscellaneous Costs: ₦20 million (contingency, legal, and operational expenses).",
                "Total Projected Costs: ₦600-800 million.",
            ]
        },
        {
            title: "Profit Projections",
            icon: "/profit-projection.png",
            points: [
                "Total Investment Needed: ₦600-800 million.",
                "Projected Revenue: ₦1.2 billion.",
                "Profit: ₦550 million.",
                "Investors ROI wil be starting from 15% on total investment, Reaching a maximum of 25% within 12 months.",
            ]
        },
        {
            title: "Timeline",
            icon: "/timeline.png",
            points: [
                "November 2024: Project kick-off and initial groundwork.",
                "December 2024 – May 2025: Construction of structural elements (foundation, framework, etc.).",
                "June 2025 – September 2025: Finishing work, installation of amenities, and internal fittings.",
                "October 2025 – November 2025: Marketing, presales, and final unit sales.",
                "November 2025 – December 2025: Completion of unit sales and payout to investors.",
            ]
        },
        {
            title: "Marketing and Sales Strategy",
            icon: "/strategy.png",
            points: [
                "Online Listings: Leverage real estate websites and social media platforms to promote the project to high-income buyers.",
                "Real Estate Exhibitions: Participate in exhibitions to showcase the project and attract potential buyers.",
                "Agent Partnerships: Collaborate with top real estate agents and agencies in Abuja.",
                "Direct Marketing: Target professionals, expatriates, and government officials through focused campaigns.",
            ]
        },
        {
            title: "Risk Mitigation",
            icon: "/risk-mitigation.png",
            points: [
                "Construction Delays: We will partner with reputable contractors with a strong track record to ensure that construction stays on schedule.",
                "Market Risks: The demand for premium housing remains high in Abuja, but we will adjust pricing strategies if necessary to stay competitive.",
                "Funding Flexibility: Investors can enter the project with contributions starting at ₦80 million, allowing us to attract multiple stakeholders and diversify financial risk.",
            ]
        }
    ]
    return (
        <div className="w-full h-full">
            <div className="flex h-full w-full flex-col justify-center items-center gap-10">
                <h1 className="md:text-9xl text-6xl text-center font-semibold text-gray-100">BUSINESS ANALYSIS</h1>
                <div className="w-full h-full flex md:flex-row flex-wrap flex-col justify-center  gap-20 px-10">
                    {sections.map((section, index) => (
                        <motion.div 
                        initial={{opacity: 0, y: 100, scale: 0}}
                        whileInView={{opacity: 1, y: 0, scale: 1, transition: {duration: 1, ease: "easeInOut"}}}
                        viewport={{once: true}}
                        className="lg:w-[28%] md:w-[40%] w-full h-full flex flex-col justify-center items-center gap-5"  key={index}>
                            <Image
                            src={section.icon} 
                            alt="image"
                            width={500}
                            height={500}
                            className="w-20 h-20"
                            />
                            <h1 className="text-2xl font-semibold ">{section.title}</h1>
                            <div>
                                <ul className="flex flex-col gap-5">
                                    {section.points.map((point, index) => (
                                        <li key={index} className="flex flex-row gap-2 h-full w-full items-center">
                                            <div className="bg-orange-500 w-[10%] h-[1px]"></div>
                                            <p  className="w-[90%]">{`${point}`}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Analysis