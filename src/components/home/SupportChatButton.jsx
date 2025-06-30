import React, { useState } from "react";

/**
 * Nút chat hỗ trợ nổi, khi bấm mở khung chat đơn giản (demo)
 */
export default function SupportChatButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen((v) => !v)}
                className="fixed bottom-24 right-6 bg-green-600 text-white rounded-full p-4 shadow-lg z-[100]"
                aria-label="Support chat"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                    viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.436 0-2.79-.255-4-.713L3 21l1.713-4C4.256 15.79 4 14.436 4 13c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="fixed bottom-36 right-8 bg-white rounded-lg shadow-lg p-4 z-[101] w-72">
                    <div className="flex justify-between items-center mb-2">
                        <div className="font-bold text-green-700">Hỗ trợ trực tuyến</div>
                        <button onClick={() => setOpen(false)} className="text-gray-500 text-xl">&times;</button>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Chào bạn! Bạn cần hỗ trợ gì? Hãy để lại tin nhắn.</div>
                    <textarea className="w-full border rounded p-2 text-sm" rows={2} placeholder="Nhập tin nhắn..." />
                    <button className="mt-2 w-full bg-green-600 text-white rounded py-1 font-semibold">Gửi</button>
                </div>
            )}
        </>
    );
}