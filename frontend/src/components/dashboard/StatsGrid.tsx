import StatCard from "./StatCard";

import {
    FiMessageSquare,
    FiTool,
    FiPackage,
    FiRefreshCcw,
} from "react-icons/fi";

interface Props {
    conversations: number;
    toolCalls: number;
    order: number;
    refund: number;
}

export default function StatsGrid({
    conversations,
    toolCalls,
    order,
    refund,
}: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
                title="Conversations"
                value={conversations}
                subtitle="Live chats"
                icon={FiMessageSquare}
                iconBg="bg-blue-600"
            />

            <StatCard
                title="Tool Calls"
                value={toolCalls}
                subtitle="Functions executed"
                icon={FiTool}
                iconBg="bg-indigo-600"
            />

            <StatCard
                title="Orders"
                value={order}
                subtitle="Order requests"
                icon={FiPackage}
                iconBg="bg-emerald-600"
            />

            <StatCard
                title="Refunds"
                value={refund}
                subtitle="Return requests"
                icon={FiRefreshCcw}
                iconBg="bg-amber-500"
            />

        </div>
    );
}