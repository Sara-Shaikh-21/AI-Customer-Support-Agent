import type { Message } from "../types/message";
import { FiUser } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";

interface Props {
    message: Message;
}

export default function ChatBubble({ message }: Props) {
    const isUser = message.sender === "user";

    return (
        <div
            className={`flex items-end gap-3 ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            {!isUser && (
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <BsRobot size={18} />
                </div>
            )}

            <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${isUser
                        ? "bg-indigo-600 text-white rounded-br-md"
                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-md"
                    }`}
            >
                <p className="whitespace-pre-wrap leading-relaxed">
                    {message.text}
                </p>

                <p
                    className={`text-xs mt-2 ${isUser
                            ? "text-indigo-100"
                            : "text-slate-400"
                        }`}
                >
                    {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>

            {isUser && (
                <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0">
                    <FiUser size={18} />
                </div>
            )}
        </div>
    );
}