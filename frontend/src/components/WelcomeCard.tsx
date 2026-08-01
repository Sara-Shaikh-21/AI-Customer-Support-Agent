export default function WelcomeCard() {
    return (
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl p-6 mb-6">
            <h2 className="text-2xl font-bold">
                👋 Welcome to CommerceAI
            </h2>

            <p className="mt-2 text-indigo-100">
                I'm your AI shopping assistant. I can help you:
            </p>

            <div className="grid grid-cols-2 gap-2 mt-5 text-sm">
                <div>📦 Track Orders</div>
                <div>🎧 Find Products</div>
                <div>💰 Refund Status</div>
                <div>🔄 Return Items</div>
            </div>
        </div>
    );
}