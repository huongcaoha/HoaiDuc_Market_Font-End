import React, { useState } from "react";

export default function AuthModal({ open, onClose }) {
    const [tab, setTab] = useState("login");

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                <button onClick={onClose} className="absolute top-2 right-2 text-lg text-gray-400 hover:text-gray-800">&times;</button>
                <div className="flex justify-center mb-6">
                    <button
                        className={`mr-4 px-4 py-2 font-semibold rounded ${tab === "login" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setTab("login")}
                    >
                        Đăng nhập
                    </button>
                    <button
                        className={`px-4 py-2 font-semibold rounded ${tab === "register" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setTab("register")}
                    >
                        Đăng ký
                    </button>
                </div>
                {tab === "login" ? (
                    <form className="space-y-4">
                        <input className="w-full border px-3 py-2 rounded" type="email" placeholder="Email" />
                        <input className="w-full border px-3 py-2 rounded" type="password" placeholder="Mật khẩu" />
                        <button type="submit" className="w-full bg-green-600 text-white rounded py-2 font-semibold">Đăng nhập</button>
                    </form>
                ) : (
                    <form className="space-y-4">
                        <input className="w-full border px-3 py-2 rounded" type="email" placeholder="Email" />
                        <input className="w-full border px-3 py-2 rounded" type="password" placeholder="Mật khẩu" />
                        <input className="w-full border px-3 py-2 rounded" type="password" placeholder="Nhập lại mật khẩu" />
                        <button type="submit" className="w-full bg-green-600 text-white rounded py-2 font-semibold">Đăng ký</button>
                    </form>
                )}
                <div className="mt-4 text-center text-sm text-gray-500">
                    {tab === "login" ? (
                        <>
                            Chưa có tài khoản?{" "}
                            <button className="text-green-700 font-semibold" onClick={() => setTab("register")}>Đăng ký ngay</button>
                        </>
                    ) : (
                        <>
                            Đã có tài khoản?{" "}
                            <button className="text-green-700 font-semibold" onClick={() => setTab("login")}>Đăng nhập</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}