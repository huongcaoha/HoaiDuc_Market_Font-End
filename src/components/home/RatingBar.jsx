import React from "react";

export default function RatingBar({ percent = 80 }) {
    return (
        <div className="relative w-20 h-3 bg-gray-200 rounded overflow-hidden mr-2">
            <div className="bg-yellow-400 h-full" style={{ width: `${percent}%` }} />
        </div>
    );
}