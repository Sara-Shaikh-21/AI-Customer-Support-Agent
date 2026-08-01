import {
    FiCheckCircle,
    FiCpu,
    FiDatabase,
    FiServer,
    FiActivity,
} from "react-icons/fi";

const services = [
    {
        name: "Azure OpenAI",
        icon: FiCpu,
    },
    {
        name: "Cosmos DB",
        icon: FiDatabase,
    },
    {
        name: "Backend API",
        icon: FiServer,
    },
    {
        name: "Function Calling",
        icon: FiActivity,
    },
    {
        name: "Memory Service",
        icon: FiDatabase,
    },
    {
        name: "Multi-Agent Router",
        icon: FiCpu,
    },
];

export default function SystemHealth() {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 h-full">

            <h2 className="text-2xl font-bold mb-6">
                System Health
            </h2>

            <div className="space-y-4">

                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={service.name}
                            className="flex items-center justify-between border rounded-2xl px-4 py-3 hover:bg-slate-50 transition"
                        >
                            <div className="flex items-center gap-3">

                                <Icon className="text-blue-600 text-xl" />

                                <span className="font-medium">
                                    {service.name}
                                </span>

                            </div>

                            <div className="flex items-center gap-2 text-green-600">

                                <FiCheckCircle />

                                <span className="font-semibold">
                                    Online
                                </span>

                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
}