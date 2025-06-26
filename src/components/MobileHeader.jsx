import React from "react";

export default function MobileHeader() {
    return (
        <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b">
                <a href="/" className="flex items-center">
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" className="w-28" />
                </a>
                <button className="text-2xl font-bold text-gray-600">&times;</button>
            </div>
            <div className="px-4 py-2">
                {/* Search */}
                <form className="flex mb-4">
                    <input className="flex-1 border rounded-l px-3 py-2" type="text" placeholder="Search for items…" />
                    <button className="bg-green-600 text-white px-4 py-2 rounded-r">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
                {/* Mobile Menu */}
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="block py-2 text-green-700 font-semibold">Home</a>
                            {/* submenu demo */}
                            <ul className="pl-4">
                                <li><a href="/index.html" className="block py-1">Home 1</a></li>
                                <li><a href="/index-2" className="block py-1">Home 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/shop-grid-right" className="block py-2">Shop</a>
                        </li>
                        <li>
                            <a href="/page-account" className="block py-2">My Account</a>
                        </li>
                        <li>
                            <a href="/page-contact" className="block py-2">Contact</a>
                        </li>
                    </ul>
                </nav>
                {/* Info */}
                <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                    <a href="/page-contact" className="flex items-center gap-2">
                        <i className="fi-rs-marker" /> Our location
                    </a>
                    <a href="/page-login" className="flex items-center gap-2">
                        <i className="fi-rs-user" /> Log In / Sign Up
                    </a>
                    <a href="#" className="flex items-center gap-2">
                        <i className="fi-rs-headphones" /> (+01) - 2345 - 6789
                    </a>
                </div>
                {/* Social */}
                <div className="mt-8 space-x-4">
                    <a href="#"><img src="/assets/imgs/theme/icons/icon-facebook-white.svg" className="inline w-6" alt="fb" /></a>
                    <a href="#"><img src="/assets/imgs/theme/icons/icon-twitter-white.svg" className="inline w-6" alt="tw" /></a>
                    <a href="#"><img src="/assets/imgs/theme/icons/icon-instagram-white.svg" className="inline w-6" alt="ig" /></a>
                </div>
                <div className="mt-6 text-center text-xs text-gray-400">
                    Copyright 2024 © Nest. All rights reserved.
                </div>
            </div>
        </div>
    );
}