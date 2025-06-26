import React from "react";

export default function ModalQuickView({ open, onClose }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white rounded shadow-lg w-full max-w-3xl p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                    onClick={onClose}
                >
                    <span className="sr-only">Close</span>
                    &times;
                </button>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Gallery */}
                    <div className="flex-1">
                        <div className="relative mb-4">
                            <img
                                src="/assets/imgs/shop/product-16-2.jpg"
                                alt="product"
                                className="rounded-lg w-full"
                            />
                            {/* Add a custom zoom icon here if needed */}
                        </div>
                        <div className="flex gap-2">
                            {/* Thumbnails */}
                            {["3", "4", "5", "6", "7", "8", "9"].map((num) => (
                                <img
                                    key={num}
                                    src={`/assets/imgs/shop/thumbnail-${num}.jpg`}
                                    alt={`thumbnail-${num}`}
                                    className="w-12 h-12 object-cover rounded border"
                                />
                            ))}
                        </div>
                    </div>
                    {/* Info */}
                    <div className="flex-1">
                        <span className="inline-block mb-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                            Sale Off
                        </span>
                        <h3 className="text-xl font-bold mb-2">
                            Seeds of Change Organic Quinoa, Brown
                        </h3>
                        <div className="flex items-center mb-2">
                            <div className="w-24 h-2 bg-gray-200 rounded mr-2 overflow-hidden">
                                <div className="bg-yellow-400 h-full" style={{ width: "90%" }} />
                            </div>
                            <span className="text-xs text-gray-500 ml-2">(32 reviews)</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-2xl text-green-600 font-bold">$38</span>
                            <span className="text-sm line-through text-gray-400 ml-4">$52</span>
                            <span className="ml-2 text-pink-600 font-semibold">26% Off</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center border rounded px-2 py-1">
                                <button className="text-lg px-2">-</button>
                                <span className="px-2">1</span>
                                <button className="text-lg px-2">+</button>
                            </div>
                            <button className="bg-green-600 text-white px-6 py-2 rounded flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                Add to cart
                            </button>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Vendor: <span className="text-green-700">Nest</span></li>
                            <li>MFG: <span className="text-green-700">Jun 4.2024</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}