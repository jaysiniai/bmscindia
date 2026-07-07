import {
    FaIdCard,
    FaPassport,
    FaFileAlt,
    FaUniversity,
    FaCar,
    FaHeartbeat,
    FaVoteYea,
    FaUsers,
} from "react-icons/fa";

const services = [
    { icon: <FaIdCard size={40} />, title: "Aadhaar Services" },
    { icon: <FaFileAlt size={40} />, title: "PAN Card" },
    { icon: <FaPassport size={40} />, title: "Passport" },
    { icon: <FaUniversity size={40} />, title: "PM Kisan" },
    { icon: <FaHeartbeat size={40} />, title: "Ayushman Card" },
    { icon: <FaVoteYea size={40} />, title: "Voter ID" },
    { icon: <FaCar size={40} />, title: "Driving Licence" },
    { icon: <FaUsers size={40} />, title: "Certificates" },
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-orange-400">
                    Our Services
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-14">
                    Fast • Secure • Trusted Government & Digital Services
                </p>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-orange-500 hover:-translate-y-2 transition duration-300"
                        >
                            <div className="text-orange-400 flex justify-center mb-5">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}