export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen px-6 text-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl">

                <span className="inline-block px-4 py-2 rounded-full border border-orange-400 text-orange-300 text-sm mb-6">
                    🇮🇳 Digital & Government Services
                </span>

                <h1 className="text-5xl md:text-7xl font-extrabold text-orange-400">
                    BIRSA MUNDA
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold mt-3">
                    SERVICE CENTER
                </h2>

                <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
                    Aadhaar • PAN • Passport • PM Kisan • Ayushman Card •
                    Government Certificates • Online Applications
                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-10">

                    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold transition">
                        Apply Now
                    </button>

                    <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition">
                        Track Application
                    </button>

                </div>

                <div className="grid grid-cols-3 gap-8 mt-16">

                    <div>
                        <h3 className="text-3xl font-bold text-orange-400">5000+</h3>
                        <p className="text-gray-400">Happy Customers</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-orange-400">50+</h3>
                        <p className="text-gray-400">Services</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-orange-400">100%</h3>
                        <p className="text-gray-400">Secure</p>
                    </div>

                </div>

            </div>

        </section>
    );
}