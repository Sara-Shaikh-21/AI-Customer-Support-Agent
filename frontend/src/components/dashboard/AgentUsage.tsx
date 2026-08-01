import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

interface Props {
    shopping: number;
    order: number;
    refund: number;
    support: number;
}

const COLORS = [
    "#2563EB",
    "#10B981",
    "#F59E0B",
    "#EF4444",
];

export default function AgentUsage({
    shopping,
    order,
    refund,
    support,
}: Props) {

    const data = [
        {
            name: "Shopping",
            value: shopping,
        },
        {
            name: "Order",
            value: order,
        },
        {
            name: "Refund",
            value: refund,
        },
        {
            name: "Support",
            value: support,
        },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

            <h2 className="text-2xl font-bold mb-6">
                AI Agent Distribution
            </h2>

            <div className="h-[350px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={120}
                            innerRadius={70}
                            paddingAngle={3}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}