import type { IconType } from "react-icons";

interface Props {
    title: string;
    value: number;
    subtitle: string;
    icon: IconType;
    iconBg: string;
}

export default function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    iconBg,
}: Props) {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

            <div className="flex items-center justify-between">

                <div>
                    <p className="text-slate-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-slate-800">
                        {value}
                    </h2>

                    <p className="text-sm text-green-600 mt-2">
                        {subtitle}
                    </p>
                </div>

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl ${iconBg}`}
                >
                    <Icon />
                </div>

            </div>

        </div>
    );
}