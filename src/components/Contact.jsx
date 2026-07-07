export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 px-6 bg-slate-900 text-white"
        >
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-orange-400">
                    Contact Us
                </h2>

                <p className="text-center text-gray-400 mt-4 mb-12">
                    Get in touch with BIRSA MUNDA SERVICE CENTER
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="bg-slate-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6">
                            Contact Details
                        </h3>

                        <p className="mb-4">
                            📞 <strong>Phone:</strong> 8917531106
                        </p>

                        <p className="mb-4">
                            💬 <strong>WhatsApp:</strong> 8917531106
                        </p>

                        <p className="mb-4">
                            📧 <strong>Email:</strong> joyjustin486@gmail.com
                        </p>

                        <p>
                            📍 <strong>Address:</strong><br />
                            Sajanagarh, Tenda,<br />
                            Near Tenda Post Office Chowk,<br />
                            Balasore, Odisha
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6">
                            Send Message
                        </h3>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-slate-700 mb-4"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg bg-slate-700 mb-4"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-3 rounded-lg bg-slate-700 mb-4"
                        ></textarea>

                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold">
                            Send Message
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}