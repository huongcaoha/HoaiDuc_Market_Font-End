import React, { useState } from "react";

const tabs = [
    { label: "All", key: "all" },
    { label: "Milks & Dairies", key: "milks" },
    { label: "Coffees & Teas", key: "coffees" },
    { label: "Pet Foods", key: "petfoods" },
    { label: "Meats", key: "meats" },
    { label: "Vegetables", key: "vegetables" },
    { label: "Fruits", key: "fruits" },
];

const products = [
    {
        key: "1",
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        price: 28.85,
        oldPrice: 32.8,
        vendor: "NestFood",
        rating: 90,
        category: "Snack",
        badge: "Hot",
        img: "/assets/imgs/shop/product-1-1.jpg",
        link: "/shop-product-right",
    },
    {
        key: "2",
        name: "All Natural Italian-Style Chicken Meatballs",
        price: 52.85,
        oldPrice: 55.8,
        vendor: "Stouffer",
        rating: 80,
        category: "Hodo Foods",
        badge: "Sale",
        img: "/assets/imgs/shop/product-2-1.jpg",
        link: "/shop-product-right",
    },
    {
        key: "3",
        name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        price: 48.85,
        oldPrice: 52.8,
        vendor: "StarKist",
        rating: 85,
        category: "Snack",
        badge: "New",
        img: "/assets/imgs/shop/product-3-1.jpg",
        link: "/shop-product-right",
    },
];

function ProductCard({ item }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="relative">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded" />
                <span className={`absolute top-2 left-2 bg-${item.badge === "Hot" ? "red" : item.badge === "Sale" ? "blue" : "green"}-500 text-white text-xs px-2 py-0.5 rounded`}>
                    {item.badge}
                </span>
            </div>
            <div className="mt-4 flex-1 flex flex-col">
                <div className="text-xs text-gray-400">{item.category}</div>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <div className="flex items-center mb-2">
                    <div className="w-20 h-3 bg-gray-200 rounded overflow-hidden mr-2">
                        <div className="bg-yellow-400 h-full" style={{ width: `${item.rating}%` }} />
                    </div>
                    <span className="text-xs text-gray-500">({(item.rating / 20).toFixed(1)})</span>
                </div>
                <div className="text-xs text-gray-500 mb-1">
                    By <a href="/vendor-details-1" className="text-green-600">{item.vendor}</a>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-green-600 font-bold">${item.price}</span>
                        <span className="text-gray-400 text-xs line-through ml-2">${item.oldPrice}</span>
                    </div>
                    <a href="/shop-cart" className="bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 text-sm flex items-center">
                        <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Add
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState("all");
    // Lọc sản phẩm theo tab, demo đang hiển thị tất cả
    const filteredProducts = products; // Bạn có thể lọc theo tab với logic riêng

    return (
        <section className="container mx-auto mb-16">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Popular Products</h3>
                <ul className="flex gap-2 text-sm">
                    {tabs.map(tab => (
                        <li key={tab.key}>
                            <button
                                className={`px-3 py-1 rounded hover:bg-green-100 ${activeTab === tab.key ? "bg-green-600 text-white" : "text-gray-600"}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map(item => <ProductCard key={item.key} item={item} />)}
            </div>
        </section>
    );
}