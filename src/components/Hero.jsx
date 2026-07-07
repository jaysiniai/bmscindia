"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-28 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white">

            {/* Orange Glow */}
            <div className="absolute -top-44 -left-40 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>

            {/* Blue Glow */}
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">

                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 px-5 py-2 rounded-full text-sm font-medium">

                            🇮🇳 Trusted Government Services

                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">

                            <span className="text-orange-400">
                                BIRSA MUNDA
                            </span>

                            <br />

                            <span className="text-white">
                                SERVICE CENTER
                            </span>

                        </h1>

                        <p className="mt-8 text-lg text-gray-300 max-w-lg leading-8">

                            Your One Stop Solution for Aadhaar, PAN Card,
                            Passport, Ayushman Card, PM Kisan,
                            Government Certificates, Online Applications
                            and many more Digital Services.

                        </p>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-5 mt-10">

                            <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-orange-500/20">

                                Apply Now

                                <FaArrowRight />

                            </button>

                            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition">

                                Track Application

                            </button>

                            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold transition">

                                <FaWhatsapp />

                                WhatsApp

                            </button>

                        </div>

                        {/* Stats */}

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

                            <div>
                                <h2 className="text-3xl font-bold text-orange-400">
                                    5000+
                                </h2>

                                <p className="text-gray-400">
                                    Customers
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-orange-400">
                                    50+
                                </h2>

                                <p className="text-gray-400">
                                    Services
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-orange-400">
                                    10+
                                </h2>

                                <p className="text-gray-400">
                                    Years
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-orange-400">
                                    100%
                                </h2>

                                <p className="text-gray-400">
                                    Secure
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center items-center"
                    >

                        {/* Main Glass Card */}

                        <div className="relative w-[430px] h-[430px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl">

                            <div className="text-center">

                                <div className="text-8xl mb-6">
                                    💻
                                </div>

                                <h2 className="text-3xl font-bold text-orange-400">

                                    Premium Hero Image

                                </h2>

                                <p className="text-gray-400 mt-4">

                                    AI Illustration will be added here

                                </p>

                            </div>

                        </div>

                        {/* Floating Cards */}

                        <div className="absolute top-8 -left-8 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl">

                            🪪 Aadhaar

                        </div>

                        <div className="absolute top-20 -right-8 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl">

                            💳 PAN Card

                        </div>

                        <div className="absolute bottom-8 -left-10 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl">

                            📘 Passport

                        </div>

                        <div className="absolute bottom-20 -right-10 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl">

                            📄 Certificates

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}