import { FiCpu } from "react-icons/fi";

export default function DashboardHeader() {
    return (
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-8 shadow-2xl">
            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-4xl font-bold">
                        CommerceAI Dashboard
                    </h1>

                    <p className="mt-2 text-blue-100">
                        AI Customer Support Platform
                    </p>
                </div>

                <div className="flex items-center gap-3 bg-white/20 px-5 py-3 rounded-2xl backdrop-blur">

                    <FiCpu className="text-2xl" />

                    <div>
                        <p className="font-semibold">
                            AI System
                        </p>

                        <p className="text-sm text-green-300">
                            ● Online
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}