"use client";

import { motion } from "framer-motion";

import {
    FaBolt,
    FaShieldAlt,
    FaWhatsapp,
    FaClock,
    FaArrowRight,
} from "react-icons/fa";

const features = [
    {
        icon: <FaBolt size={42} />,
        title: "Fast Processing",
        desc: "Quick document processing with minimum waiting time.",
    },
    {
        icon: <FaShieldAlt size={42} />,
        title: "100% Secure",
        desc: "Your personal information is fully protected and secure.",
    },
    {
        icon: <FaWhatsapp size={42} />,
        title: "WhatsApp Support",
        desc: "Instant support directly through WhatsApp whenever you need.",
    },
    {
        icon: <FaClock size={42} />,
        title: "Live Tracking",
        desc: "Track your application status anytime from anywhere.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative py-24 px-6 bg-black overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-20 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-center text-orange-400"
                >
                    Why Choose Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 mt-5 mb-16 text-lg"
                >
                    Trusted Digital & Government Service Center
                </motion.p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                    {features.map((item, index) => (

                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-orange-400 transition-all duration-300"
                        >

                            <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300">

                                {item.icon}

                            </div>

                            <h3 className="mt-6 text-2xl font-bold">

                                {item.title}

                            </h3>

                            <p className="mt-4 text-gray-400 leading-7">

                                {item.desc}

                            </p>

                            <button className="mt-8 mx-auto flex items-center gap-2 text-orange-400 hover:text-white transition">

                                Learn More

                                <FaArrowRight />

                            </button>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom Banner */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-blue-600/10 backdrop-blur-xl p-10 flex flex-col lg:flex-row justify-between items-center gap-8"
                >

                    <div>

                        <h3 className="text-3xl font-bold">

                            Ready to Apply for Government Services?

                        </h3>

                        <p className="text-gray-300 mt-3">

                            Fast • Secure • Trusted • Professional Support

                        </p>

                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition">

                        Get Started

                    </button>

                </motion.div>

            </div>

        </section>
    );
}