import React from "react";

export default function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`bg-green-600 text-white rounded px-4 py-2 font-semibold hover:bg-green-700 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}