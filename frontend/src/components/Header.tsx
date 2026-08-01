import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
    return (
        <header className="bg-indigo-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="bg-white p-3 rounded-full">
                        <FiShoppingBag
                            size={22}
                            className="text-indigo-600"
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">
                            CommerceAI
                        </h1>

                        <p className="text-indigo-100 text-sm">
                            AI Customer Support Assistant
                        </p>
                    </div>

                </div>

                <div className="text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Online
                </div>

            </div>
        </header>
    );
}