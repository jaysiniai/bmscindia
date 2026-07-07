export default function Reviews() {
    const reviews = [
        {
            name: "Rahul Kumar",
            text: "Very fast service. Highly recommended.",
        },
        {
            name: "Anita Das",
            text: "Excellent support and quick processing.",
        },
        {
            name: "Rakesh Singh",
            text: "Professional staff and secure service.",
        },
    ];

    return (
        <section className="py-20 bg-black px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold text-center text-orange-400 mb-12">
                    Customer Reviews
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-slate-900 rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold text-orange-400">
                                {review.name}
                            </h3>

                            <p className="text-gray-300 mt-4">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}