"use client";

import { motion } from "framer-motion";

import {
    FaIdCard,
    FaPassport,
    FaFileAlt,
    FaUniversity,
    FaCar,
    FaHeartbeat,
    FaVoteYea,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";

const services = [
    {
        icon: <FaIdCard size={42} />,
        title: "Aadhaar Services",
        desc: "New Aadhaar, Update, Address Change, Mobile & Biometric Update.",
    },
    {
        icon: <FaFileAlt size={42} />,
        title: "PAN Card",
        desc: "New PAN, PAN Correction, e-PAN Download & Status Check.",
    },
    {
        icon: <FaPassport size={42} />,
        title: "Passport",
        desc: "Fresh Passport, Renewal, Appointment & Application Support.",
    },
    {
        icon: <FaUniversity size={42} />,
        title: "PM Kisan",
        desc: "Registration, e-KYC, Status Check & Beneficiary Update.",
    },
    {
        icon: <FaHeartbeat size={42} />,
        title: "Ayushman Card",
        desc: "Golden Card Registration & Health Scheme Support.",
    },
    {
        icon: <FaVoteYea size={42} />,
        title: "Voter ID",
        desc: "New Voter Card, Correction & Download Services.",
    },
    {
        icon: <FaCar size={42} />,
        title: "Driving Licence",
        desc: "Learner, Renewal, Smart Card & Appointment Booking.",
    },
    {
        icon: <FaUsers size={42} />,
        title: "Certificates",
        desc: "Income, Caste, Residence, Birth & Other Certificates.",
    },
];

export default function Services() {
    return (
        <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-center text-orange-400"
                >
                    Our Services
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 mt-5 mb-16 text-lg"
                >
                    Fast • Secure • Trusted Government & Digital Services
                </motion.p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-orange-400 transition-all duration-300"
                        >
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-gray-400 text-sm leading-7">
                                {service.desc}
                            </p>

                            <button className="mt-8 flex items-center justify-center gap-2 mx-auto text-orange-400 font-semibold hover:text-white transition">
                                Learn More
                                <FaArrowRight />
                            </button>
                        </motion.div>
                    ))}

                </div>

                <div className="text-center mt-16">
                    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition">
                        View All Services
                    </button>
                </div>

            </div>
        </section>
    );
}