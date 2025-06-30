import React from "react";

/**
 * Nút gọi điện và nhắn Zalo nổi góc màn hình
 */
export default function FloatingContact() {
    return (
        <div className="fixed bottom-36 right-6 z-[100] flex flex-col gap-3">
            <a
                href="tel:1900888"
                className="bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-green-700"
                aria-label="Call hotline"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                    viewBox="0 0 24 24"><path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a1 1 0 0 1 1 .76l1.17 4.09a1 1 0 0 1-.29 1L7.21 9.21a16 16 0 0 0 7.58 7.58l1.36-1.36a1 1 0 0 1 1-.29l4.09 1.17a1 1 0 0 1 .76 1z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
                href="https://zalo.me"
                className="bg-blue-500 text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-blue-600"
                aria-label="Chat Zalo"
                target="_blank" rel="noopener noreferrer"
            >
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#0068FF" fontWeight="bold">Z</text>
                </svg>
            </a>
        </div>
    );
}