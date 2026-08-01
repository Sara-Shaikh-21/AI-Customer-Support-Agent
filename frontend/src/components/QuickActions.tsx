import {
    FiPackage,
    FiSearch,
    FiRefreshCcw,
    FiDollarSign,
} from "react-icons/fi";

interface Props {
    onSelect: (text: string) => void;
}

const actions = [
    {
        icon: <FiPackage size={22} />,
        title: "Track Order",
        prompt: "Where is my order ORD1001?",
    },
    {
        icon: <FiSearch size={22} />,
        title: "Find Products",
        prompt: "Show me wireless earbuds",
    },
    {
        icon: <FiRefreshCcw size={22} />,
        title: "Return Item",
        prompt: "I want to return ORD1001",
    },
    {
        icon: <FiDollarSign size={22} />,
        title: "Refund",
        prompt: "Check refund status of ORD1002",
    },
];

export default function QuickActions({ onSelect }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {actions.map((item) => (
                <button
                    key={item.title}
                    onClick={() => onSelect(item.prompt)}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500 hover:shadow-md transition"
                >
                    <div className="text-indigo-600 mb-3">
                        {item.icon}
                    </div>

                    <h3 className="font-semibold text-slate-700">
                        {item.title}
                    </h3>
                </button>
            ))}
        </div>
    );
}