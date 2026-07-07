export default function Login() {
    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl shadow-xl">

                <h1 className="text-3xl font-bold text-center text-orange-400 mb-8">
                    Customer Login
                </h1>

                <form className="space-y-5">

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-slate-800 border border-gray-700 outline-none"
                    />

                    <button
                        className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg font-bold"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?
                    <span className="text-orange-400 cursor-pointer">
                        {" "}Register
                    </span>
                </p>

            </div>
        </main>
    );
}