import React, { useState } from "react";

export default function AccountDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <a href="/page-account" className="flex flex-col items-center">
                <img src="/assets/imgs/theme/icons/icon-user.svg" className="w-6 h-6" alt="Account" />
                <span className="text-xs mt-1">Account</span>
            </a>
            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-3 z-50">
                    <ul className="space-y-2 text-sm">
                        <li><a href="/page-account" className="flex items-center gap-2 hover:text-green-600"><i className="fi fi-rs-user" />My Account</a></li>
                        <li><a href="/page-account" className="flex items-center gap-2 hover:text-green-600"><i className="fi fi-rs-location-alt" />Order Tracking</a></li>
                        <li><a href="/page-account" className="flex items-center gap-2 hover:text-green-600"><i className="fi fi-rs-label" />My Voucher</a></li>
                        <li><a href="/shop-wishlist" className="flex items-center gap-2 hover:text-green-600"><i className="fi fi-rs-heart" />My Wishlist</a></li>
                        <li><a href="/page-account" className="flex items-center gap-2 hover:text-green-600"><i className="fi fi-rs-settings-sliders" />Setting</a></li>
                        <li><a href="/page-login" className="flex items-center gap-2 hover:text-red-600"><i className="fi fi-rs-sign-out" />Sign out</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}