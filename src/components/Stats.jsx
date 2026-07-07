export default function Stats() {
    const stats = [
        { number: "5000+", label: "Happy Customers" },
        { number: "50+", label: "Services" },
        { number: "100%", label: "Secure" },
        { number: "24/7", label: "Support" },
    ];

    return (
        <section className="bg-slate-900 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
                {stats.map((item) => (
                    <div
                        key={item.label}
                        className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition"
                    >
                        <h2 className="text-4xl font-bold text-orange-400">
                            {item.number}
                        </h2>

                        <p className="text-gray-300 mt-2">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}