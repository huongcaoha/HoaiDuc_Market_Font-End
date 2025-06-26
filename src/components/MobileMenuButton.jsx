import React from "react";

export default function MobileMenuButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden p-2 rounded bg-green-100 hover:bg-green-200"
            aria-label="Open mobile menu"
        >
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
    );
}