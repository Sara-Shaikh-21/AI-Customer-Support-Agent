interface Props {
    onSelect: (text: string) => void;
}

const suggestions = [
    "Where is my order ORD1001?",
    "Show me wireless earbuds",
    "I want to return ORD1001",
    "Check refund status of ORD1002",
];

export default function Suggestions({ onSelect }: Props) {
    return (
        <div className="grid grid-cols-2 gap-3 mb-6">
            {suggestions.map((item) => (
                <button
                    key={item}
                    onClick={() => onSelect(item)}
                    className="bg-white hover:bg-indigo-50 border rounded-xl p-4 text-left shadow-sm transition"
                >
                    {item}
                </button>
            ))}
        </div>
    );
}