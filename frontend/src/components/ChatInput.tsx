import { useState } from "react";
import { FiSend } from "react-icons/fi";

interface Props {
    onSend: (message: string) => void;
    loading: boolean;
}

export default function ChatInput({ onSend, loading }: Props) {
    const [text, setText] = useState("");

    function handleSend() {
        if (!text.trim() || loading) return;

        onSend(text);
        setText("");
    }

    return (
        <div className="flex gap-3">

            <input
                type="text"
                value={text}
                disabled={loading}
                placeholder="Ask about products, orders, refunds..."
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSend();
                    }
                }}
                className="flex-1 border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
            />

            <button
                onClick={handleSend}
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-5 rounded-xl transition flex items-center justify-center"
            >
                {loading ? (
                    <span className="text-sm">...</span>
                ) : (
                    <FiSend size={20} />
                )}
            </button>

        </div>
    );
}