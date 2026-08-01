import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Chat from "./components/Chat";
import AdminDashboard from "./pages/AdminDashboard";

function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <div className="max-w-5xl mx-auto py-10 px-4">
        <Chat />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<ChatPage />}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />
    </Routes>
  );
}