import React, { useEffect, useState } from "react";

/**
 * Thanh Flash Sale hiển thị tiến trình thời gian khuyến mãi.
 * Có thể đặt ở giữa HeroSlider và FeaturedCategories.
 */
export default function FlashSaleBar({ endTime = "2025-07-01T23:59:59Z" }) {
    const [remaining, setRemaining] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const end = new Date(endTime);
        const diff = Math.max(0, end - now);
        const h = Math.floor(diff / 1000 / 60 / 60);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        return { h, m, s, finished: diff <= 0 };
    }

    useEffect(() => {
        const timer = setInterval(() => setRemaining(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (remaining.finished) return null;

    return (
        <div className="container mx-auto mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg flex items-center justify-between px-4 py-2 shadow">
                <div className="font-bold text-red-600 text-lg flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4" /></svg>
                    FLASH SALE
                </div>
                <div className="flex items-center gap-2 text-sm">
                    Kết thúc sau:
                    <span className="bg-white rounded px-2 py-1 font-mono">{remaining.h.toString().padStart(2, "0")}</span>:
                    <span className="bg-white rounded px-2 py-1 font-mono">{remaining.m.toString().padStart(2, "0")}</span>:
                    <span className="bg-white rounded px-2 py-1 font-mono">{remaining.s.toString().padStart(2, "0")}</span>
                    <a href="/shop-grid-right" className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded px-4 py-2 transition">Mua ngay</a>
                </div>
            </div>
        </div>
    );
}