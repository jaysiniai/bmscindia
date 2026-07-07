import { FaBolt, FaShieldAlt, FaWhatsapp, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <FaBolt className="text-4xl text-orange-400" />,
            title: "Fast Processing",
            desc: "Applications are processed quickly.",
        },
        {
            icon: <FaShieldAlt className="text-4xl text-orange-400" />,
            title: "Secure Service",
            desc: "Your data remains safe and protected.",
        },
        {
            icon: <FaWhatsapp className="text-4xl text-orange-400" />,
            title: "WhatsApp Support",
            desc: "Get instant help on WhatsApp.",
        },
        {
            icon: <FaClock className="text-4xl text-orange-400" />,
            title: "Live Tracking",
            desc: "Track your application anytime.",
        },
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-orange-400 mb-4">
                    Why Choose Us
                </h2>

                <p className="text-center text-gray-400 mb-12">
                    Trusted Digital & Government Service Center
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-900 rounded-xl p-6 text-center hover:bg-slate-800 transition"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}