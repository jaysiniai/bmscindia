export default function About() {
    return (
        <section id="about">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-4xl font-bold text-orange-400 mb-6">
                        About BMSC INDIA
                    </h2>

                    <p className="text-gray-300 leading-8">
                        Birsa Munda Service Center is a trusted Digital & Government
                        Service Center providing Aadhaar, PAN Card, Passport,
                        Ayushman Bharat, PM Kisan, Income Certificate, Caste
                        Certificate, Online Form Fill-up and many more services.
                    </p>

                    <div className="mt-8">
                        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-bold">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-2xl h-80 flex items-center justify-center">
                    <span className="text-2xl text-gray-400">
                        Office Image Here
                    </span>
                </div>

            </div>
        </section >
    );
}