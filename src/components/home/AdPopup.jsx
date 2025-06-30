import React, { useEffect, useState } from "react";

/**
 * Popup quảng cáo xuất hiện sau vài giây, hoặc khi user vào trang
 */
export default function AdPopup({ image = "/assets/imgs/banner/banner-1.png", link = "/shop-grid-right" }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setOpen(true), 2500); // Xuất hiện sau 2.5s
        return () => clearTimeout(timeout);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-4">
                <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-lg text-gray-400 hover:text-gray-800">&times;</button>
                <a href={link}>
                    <img src={image} alt="ad" className="rounded mb-3" />
                </a>
                <div className="text-center">
                    <a href={link} className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded transition">Shop Now</a>
                </div>
            </div>
        </div>
    );
}