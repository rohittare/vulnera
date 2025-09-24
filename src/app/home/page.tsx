import Navbar from "../Navbar"
import { ShieldCheckIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button"
export default function Home() {
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
                    <div className="w-2/3">
                        <img
                            src="/5da65ab32dcd4d7a23daf2db0c55a0d2c24464f3.jpg" // Replace with your actual image name
                            alt="Logo"
                        />
                    </div>
                    <div>

                    </div>
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
                                <p className="text-gray-400">
                                    All bounty submissions and reviews are recorded on the blockchain, creating a a secure, transparent, and
                                    tamper-proof history. This ensures every contribution is verifiable, decisions are traceable, and the
                                    process remains open and accountable.
                                </p>
                            </div>
                            <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                                        <ShieldCheckIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Smart Contracts</h3>
                                </div>
                                <p className="text-gray-400">
                                    Payments are automated via smart contracts, removing intermediaries and minimizing delays or disputes.
                                    Researchers are rewarded instantly and fairly upon successful review, enabling a more efficient and
                                    trustworthy incentive system.
                                </p>
                            </div>
                            <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                                        <ShieldCheckIcon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">Fair Review</h3>
                                </div>
                                <p className="text-gray-400">
                                    Our decentralized review process guarantees transparency, fairness, and accuracy in evaluating bug
                                    submissions, ensuring that every researcher's work is recognized and rewarded appropriately.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full py-12 md:py-24 lg:py-32 px-20 text-foreground">
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

                    <div className="absolute ">
                        <img
                            src="\Screenshot 2025-09-25 025851.png" // Replace with your actual image name
                            alt="Background"
                            className=" relative bottom-[120px] w-screen  "

                        />
                    </div>
                </section>



                <div className=" relative top-[200px] z-10 flex items-center justify-between px-40 w-full ">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div
                            className="text-6xl font-[Leckerli One] font-bold text-[#9438FF]"
                        >
                            Vulnera
                        </div>
                        <p className="text-2xl">You Hunt. We Pay. Simple</p>
                        <div className="flex justify-center mb-8">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-72 px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-6 text-gray-600">
                        <a href="#" className="hover:text-purple-500 ">
                            <FaYoutube  className="text-6xl "/>
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaFacebookF className="text-6xl" />
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaLinkedinIn className="text-6xl" />
                        </a>
                        <a href="#" className="hover:text-purple-500">
                            <FaTwitter className="text-6xl" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}
