import React, { useState } from "react";

export default function CartDropdown() {
    const [open, setOpen] = useState(false);
    // Demo data, bạn thay bằng props/data thực tế
    const cart = [
        {
            img: "/assets/imgs/shop/thumbnail-3.jpg",
            name: "Daisy Casual Bag",
            qty: 1,
            price: 800,
            link: "/shop-product-right",
        },
        {
            img: "/assets/imgs/shop/thumbnail-2.jpg",
            name: "Corduroy Shirts",
            qty: 1,
            price: 3200,
            link: "/shop-product-right",
        },
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <a href="/shop-cart" className="relative flex flex-col items-center">
                <img src="/assets/imgs/theme/icons/icon-cart.svg" className="w-6 h-6" alt="Cart" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">{cart.length}</span>
                <span className="text-xs mt-1">Cart</span>
            </a>
            {open && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="divide-y divide-gray-200">
                        {cart.map((item, idx) => (
                            <li className="flex py-2 items-center" key={idx}>
                                <img src={item.img} className="w-12 h-12 rounded mr-3" alt={item.name} />
                                <div className="flex-1">
                                    <a href={item.link} className="font-semibold">{item.name}</a>
                                    <div className="text-xs text-gray-400">{item.qty} × ${item.price}</div>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 text-lg ml-2">&times;</button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-green-600">${cart.reduce((s, i) => s + i.price * i.qty, 0)}</span>
                    </div>
                    <div className="mt-4 flex gap-2">
                        <a href="/shop-cart" className="flex-1 text-center bg-gray-100 rounded py-2 hover:bg-gray-200">View cart</a>
                        <a href="/shop-checkout" className="flex-1 text-center bg-green-600 text-white rounded py-2 hover:bg-green-700">Checkout</a>
                    </div>
                </div>
            )}
        </div>
    );
}