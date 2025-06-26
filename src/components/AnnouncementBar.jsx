import React from "react";

/**
 * Thanh thông báo nổi (info, cảnh báo, hoặc quảng cáo)
 */
export default function AnnouncementBar({ message }) {
    if (!message) return null;
    return (
        <div className="w-full bg-yellow-100 text-yellow-800 py-2 text-center text-sm font-semibold">
            {message}
        </div>
    );
}