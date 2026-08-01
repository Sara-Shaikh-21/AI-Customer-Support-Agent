interface Props {
    shopping: number;
    order: number;
    refund: number;
    support: number;
}

export default function AgentChart({
    shopping,
    order,
    refund,
    support,
}: Props) {
    const total =
        shopping +
        order +
        refund +
        support;

    function width(value: number) {
        if (total === 0) return 0;
        return (value / total) * 100;
    }

    const data = [
        {
            name: "Shopping",
            value: shopping,
            color: "bg-blue-500",
        },
        {
            name: "Order",
            value: order,
            color: "bg-green-500",
        },
        {
            name: "Refund",
            value: refund,
            color: "bg-yellow-500",
        },
        {
            name: "Support",
            value: support,
            color: "bg-red-500",
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h2 className="font-semibold text-lg mb-6">
                Agent Usage
            </h2>

            <div className="space-y-5">
                {data.map((item) => (
                    <div key={item.name}>
                        <div className="flex justify-between text-sm mb-2">
                            <span>{item.name}</span>
                            <span>{item.value}</span>
                        </div>

                        <div className="w-full bg-slate-200 rounded-full h-3">
                            <div
                                className={`${item.color} h-3 rounded-full transition-all duration-500`}
                                style={{
                                    width: `${width(item.value)}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}