"use client";

import Navbar from "../Navbar"
import { ShieldCheckIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Spline from '@splinetool/react-spline/next';
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
export default function Home() {
    const steps = [
        {
            title: "Companies register",
            description:
                "Companies register and deposit funds into a secure smart contract to fund their bounty programs.",
        },
        {
            title: "Users Submit",
            description: "All submissions and reviews are recorded on-chain for a transparent, tamper-proof history.",
        },
        {
            title: "Review & Verify",
            description: "Contributions are reviewed, verified, and decisions are traceable end-to-end.",
        },
        {
            title: "Rewards Released",
            description: "Once approved, rewards are released automatically and remain auditable.",
        },
    ]

    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setVisible(true)
                        observer.unobserve(entry.target)
                    }
                }
            },
            {
                // reveal as the card is ~20% in view
                threshold: 0.2,
                rootMargin: "0px 0px -5% 0px",
            },
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])



    return (
        <>
            <div className="min-h-screen bg-[#000000]">
                <Navbar />

                <div className="mt-20 flex flex-col items-center justify-center gap-10">
                    <div className="flex text-7xl font-bold items-center justify-center gap-2">
                        <h1 className=" text-[#9438FF]">You Hunt.</h1>
                        <h1 className="  text-white">We Pay.</h1>
                        <h1 className=" text-[#9438FF]">Simple.</h1>
                    </div>
                    <div>
                        <p className="text-center text-xl text-gray-300 max-w-2xl">
                            Vulnera turns your bug reports into real bounties — fast, fair, and on-chain.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <button className="px-6 py-2 bg-[#9438FF] text-white rounded-md hover:bg-[#7a2de6] transition-colors duration-300">
                            View Bounties
                        </button>
                        <button className="px-6 py-2  text-white rounded-md border border-white hover:bg-gray-800 transition-colors duration-300">
                            Join us as Company/User
                        </button>
                    </div>
                    <Image
                        src="/5da65ab32dcd4d7a23daf2db0c55a0d2c24464f3.jpg"
                        alt="3D Spline"
                        width={1300}
                        height={5}
                        className="mx-auto"
                    />
                </div>


                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Why Choose <span className="text-purple-500">Vulnera</span> ?
                                </h2>
                                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Vulnera offers a suite of features designed to enhance the bug bounty experience for both researchers and
                                    organizations
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-10">
                            <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                                        <ShieldCheckIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Transparency</h3>
                                </div>
                                <p className="text-gray-400 h-50">
                                    All bounty submissions and reviews are recorded on the blockchain, creating a a secure, transparent, and
                                    tamper-proof history. This ensures every contribution is verifiable, decisions are traceable, and the
                                    process remains open and accountable .
                                </p>
                            </div>
                            <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                                        <ShieldCheckIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Smart Contracts</h3>
                                </div>
                                <p className="text-gray-400 h-50">
                                    Payments are automated via smart contracts, removing intermediaries and minimizing delays or disputes.
                                    Researchers are rewarded instantly and fairly upon successful review, enabling a more efficient and
                                    trustworthy incentive system .
                                </p>
                            </div>
                            <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                                        <ShieldCheckIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Fair Review</h3>
                                </div>
                                <p className="text-gray-400 h-50">
                                    Our decentralized review process guarantees transparency, fairness, and accuracy in evaluating bug
                                    submissions, ensuring that every researcher's work is recognized and rewarded appropriately.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <section className="w-full py-12 md:py-24 lg:py-32 px-20 text-foreground">
                    <div className="container grid gap-8 px-4 md:px-6">
                        <div className="grid grid-cols-5  gap-8">
                            <Card className="bg-white col-span-2 text-black p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center p-0">
                                    <p className="text-lg font-semibold">About</p>
                                    <h3 className="text-5xl font-bold mt-2">1000+</h3>
                                    <p className="text-lg mt-2">Bounties are live</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-black col-span-3 border border-[#9438FF] text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
                                <CardContent className="p-0">
                                    <p className="text-lg leading-relaxed">
                                        Ready to hunt? Join the fastest-growing security platform where ethical hackers earn big. With 1,000+
                                        active bounties across top companies, there's never been a better time to test your skills and get
                                        rewarded.
                                    </p>
                                    <p className="text-2xl font-bold mt-4">
                                        Find . <span className="text-[#9438FF]">Report</span>. Get Paid.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <Card className="bg-black col-span-3 border border-[#9438FF] text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
                                <CardContent className="p-0">
                                    <p className="text-lg leading-relaxed">
                                        Join the platform trusted by top Web3 projects. With millions at stake, Vulnera connects ethical hackers
                                        to high-value bug bounties protecting $10,000,000+ in smart contracts.
                                    </p>
                                    <p className="text-2xl font-bold mt-4">
                                        Trust the chain. <span className="text-[#9438FF]">We secure it.</span>
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white text-black col-span-2 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center p-0">
                                    <p className="text-lg font-semibold">About</p>
                                    <h3 className="text-5xl font-bold mt-2">10M +</h3>
                                    <p className="text-lg mt-2">In Smart Contracts</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section> */}


                <section className="w-full">
                    <header className="text-center max-w-2xl mx-auto">
                        <h2 className="text-white text-3xl md:text-4xl font-semibold">How it Works</h2>
                        <p className="text-pretty mt-2 text-[var(--color-muted-foreground)]">A transparent and fair process for all</p>
                    </header>

                    <div className="relative mt-12">
                        {/* Vertical timeline line */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none  absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-[var(--color-border)]"
                        />

                        <ol className="relative space-y-10">
                            {steps.map((step, i) => {
                                const isLeft = i % 2 === 0
                                return (
                                    <li key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                                        {/* Marker */}
                                        <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 z-10">
                                            <div className="h-9 w-9 rounded-full text-white bg-[#9438FF] transition-shadow duration-300 hover:shadow-[0_0_36px_#9438FF] grid place-items-center text-sm font-semibold">
                                                {i + 1}
                                            </div>
                                        </div>

                                        {/* Left cell */}
                                        <div
                                            className={cn(
                                                // show this cell on mobile only if it's the one holding content
                                                isLeft ? "flex md:justify-end" : "hidden md:flex md:justify-end",
                                            )}
                                        >
                                            {isLeft && (
                                                <div
                                                    className={cn(
                                                        "w-full md:max-w-[520px] rounded-[var(--radius-lg)] border border-[#9438FF] bg-[var(--color-card)] p-4 md:p-5 shadow-sm",
                                                        "md:mr-16", // space from center line
                                                    )}
                                                >
                                                    <h3 className=" font-semibold">{`${i + 1}. ${step.title}`}</h3>
                                                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">{step.description}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right cell */}
                                        <div
                                            className={cn(
                                                // show this cell on mobile only if it holds content
                                                !isLeft ? "flex md:justify-start" : "hidden md:flex md:justify-start",
                                            )}
                                        >
                                            {!isLeft && (
                                                <div
                                                    className={cn(
                                                        "w-full md:max-w-[520px] rounded-[var(--radius-lg)] border border-[#9438FF] bg-[var(--color-card)] p-4 md:p-5 shadow-sm",
                                                        "md:ml-16", // space from center line
                                                    )}
                                                >
                                                    <h3 className=" font-semibold">{`${i + 1}. ${step.title}`}</h3>
                                                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">{step.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </section>


                <section className="relative bg-black text-white">
                    {/* Hero content */}
                    <div className="flex flex-col items-center justify-center text-center py-32 gap-8 px-4">
                        <h1 className="text-3xl md:text-7xl font-semibold leading-tight mb-6">
                            Coffee in hand. Eyes on the prize. <br />
                            Hunt, report, earn your bounty.
                        </h1>
                        <button className="px-8 py-3 text-xl bg-[#9438FF] text-white rounded-md hover:bg-[#7a2de6] transition-colors duration-300">
                            Register Now
                        </button>
                    </div>
                    <img
                        src="\Screenshot 2025-09-25 025851.png" // Replace with your actual image name
                        alt="Background"
                        className=" relative  w-screen  "

                    />
                </section>

                <div className="bg-white flex items-center justify-between px-40 w-full ">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Image
                            src="/navlogo.png"
                            alt="Vulnera Logo"
                            width={200}
                            height={40}
                            priority
                            className="object-contain"
                        />

                        <p className="text-2xl">You Hunt. We Pay. Simple</p>
                        <div className="flex justify-center mb-8">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-72 px-4 py-2 border bg-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-6 text-gray-600">
                        <a href="#" className="hover:text-purple-500 ">
                            <FaYoutube className="text-3xl " />
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaFacebookF className="text-3xl" />
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaLinkedinIn className="text-3xl" />
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaTwitter className="text-3xl" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}
