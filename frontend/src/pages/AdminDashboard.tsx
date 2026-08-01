import { useEffect, useState } from "react";

import { adminApi } from "../services/adminApi";

import StatCard from "../components/dashboard/StatCard";
import AgentChart from "../components/dashboard/AgentChart";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import AgentUsage from "../components/dashboard/AgentUsage";
import SystemHealth from "../components/dashboard/SystemHealth";

interface Analytics {
    conversations: number;
    shopping: number;
    order: number;
    refund: number;
    support: number;
    toolCalls: number;
}

export default function AdminDashboard() {
    const [analytics, setAnalytics] =
        useState<Analytics | null>(null);

    async function loadAnalytics() {
        const res =
            await adminApi.get("/analytics");

        setAnalytics(res.data);
    }

    useEffect(() => {
        loadAnalytics();

        const interval = setInterval(
            loadAnalytics,
            3000
        );

        return () => clearInterval(interval);
    }, []);

    if (!analytics) {
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <DashboardHeader />

            <div className="mt-8">

                <StatsGrid
                    conversations={analytics.conversations}
                    toolCalls={analytics.toolCalls}
                    order={analytics.order}
                    refund={analytics.refund}
                />
                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    <AgentUsage
                        shopping={analytics.shopping}
                        order={analytics.order}
                        refund={analytics.refund}
                        support={analytics.support}
                    />

                    <SystemHealth />

                </div>

            </div>

        </div>
    );
}