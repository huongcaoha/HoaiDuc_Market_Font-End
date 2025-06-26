import React from "react";

// Sticky bar dưới cùng màn hình trên mobile, ví dụ cho icon cart, home, account
export default function StickyBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white shadow z-50 flex justify-around items-center py-2 lg:hidden">
            <a href="/" className="flex flex-col items-center text-xs text-gray-700 hover:text-green-600">
                <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0v6m0-6h6m-6 0H5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Home
            </a>
            <a href="/shop-cart" className="flex flex-col items-center text-xs text-gray-700 hover:text-green-600">
                <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Cart
            </a>
            <a href="/page-account" className="flex flex-col items-center text-xs text-gray-700 hover:text-green-600">
                <svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Account
            </a>
        </nav>
    );
}