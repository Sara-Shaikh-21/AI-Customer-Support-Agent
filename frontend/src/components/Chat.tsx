import { useState, useEffect, useRef } from "react";
import type { Message } from "../types/message";
import { v4 as uuid } from "uuid";
import { api } from "../services/api";

import WelcomeCard from "./WelcomeCard";
import QuickActions from "./QuickActions";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            sender: "bot",
            text: "Hello! 👋 I'm CommerceAI. How can I help you today?",
        },
    ]);
    const [sessionId] = useState(() => {
        const existing = localStorage.getItem("sessionId");

        if (existing) {
            return existing;
        }

        const id = uuid();
        localStorage.setItem("sessionId", id);

        return id;
    });
    console.log("Session:", sessionId);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    async function send(text: string) {
        if (loading) return;

        const userMessage: Message = {
            id: Date.now(),
            sender: "user",
            text,
        };

        setMessages((prev) => [...prev, userMessage]);

        setLoading(true);

        try {
            const response = await api.post("/chat", {
                message: text,
                history: messages,
                sessionId,
            });

            const botMessage: Message = {
                id: Date.now() + 1,
                sender: "bot",
                text: response.data.response,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: "❌ Something went wrong. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

            <div className="p-6 border-b border-slate-200">
                <WelcomeCard />
                <QuickActions onSelect={send} />
            </div>

            <div className="h-[420px] overflow-y-auto p-6 bg-slate-50 space-y-4">

                {messages.map((message) => (
                    <ChatBubble
                        key={message.id}
                        message={message}
                    />
                ))}

                {loading && (
                    <div className="flex items-center gap-3 animate-pulse">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                            🤖
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-slate-500 italic">
                            CommerceAI is typing...
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />

            </div>

            <div className="border-t border-slate-200 p-4">
                <ChatInput
                    onSend={send}
                    loading={loading}
                />
            </div>

        </div>
    );
}