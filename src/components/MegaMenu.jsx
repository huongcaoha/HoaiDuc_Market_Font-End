import React, { useState } from "react";

export default function MegaMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="px-4 py-2 font-semibold hover:text-green-600 flex items-center gap-1">
                Mega menu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg rounded-lg grid grid-cols-4 gap-4 p-6 z-50">
                    <div>
                        <h4 className="font-bold mb-2">Fruit & Vegetables</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/shop-product-right" className="hover:text-green-600">Meat & Poultry</a></li>
                            <li><a href="/shop-product-right" className="hover:text-green-600">Fresh Vegetables</a></li>
                            {/* ... */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Breakfast & Dairy</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/shop-product-right" className="hover:text-green-600">Milk & Flavoured Milk</a></li>
                            {/* ... */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Meat & Seafood</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/shop-product-right" className="hover:text-green-600">Breakfast Sausage</a></li>
                            {/* ... */}
                        </ul>
                    </div>
                    <div>
                        <div className="mb-4">
                            <img src="/assets/imgs/banner/banner-menu.png" alt="banner" className="rounded" />
                        </div>
                        <div>
                            <span className="text-green-600 font-bold">Save up to 50%</span>
                            <br />
                            <a href="/shop-product-right" className="text-blue-600 underline">Shop now</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}