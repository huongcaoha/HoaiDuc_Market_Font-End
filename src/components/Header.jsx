import React from "react";
import MegaMenu from "./MegaMenu";
import CartDropdown from "./CartDropdown";
import AccountDropdown from "./AccountDropdown";

export default function Header() {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            {/* <div className="w-full bg-green-100 text-green-800 py-2 text-center text-sm font-semibold">
                Grand opening, <span className="font-bold">up to 15%</span> off all items. Only <span className="font-bold">3 days</span> left
            </div> */}
            <div className="container mx-auto flex justify-between items-center py-4 px-2">
                <a href="/" className="flex items-center">
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" className="w-32" />
                </a>
                {/* Search */}
                <form className="hidden lg:flex flex-1 justify-center max-w-2xl mx-8">
                    <select className="border rounded-l px-2 py-1 text-gray-600 border-gray-300 outline-none">
                        <option>All Categories</option>
                        <option>Milks and Dairies</option>
                        <option>Wines & Alcohol</option>
                        <option>Clothing & Beauty</option>
                        <option>Pet Foods & Toy</option>
                        <option>Fast food</option>
                        <option>Baking material</option>
                        <option>Vegetables</option>
                        <option>Fresh Seafood</option>
                        <option>Noodles & Rice</option>
                        <option>Ice cream</option>
                    </select>
                    <input className="flex-1 border-t border-b border-gray-300 px-3 py-1 outline-none" type="text" placeholder="Search for items..." />
                    <button className="bg-green-600 text-white px-4 py-1 rounded-r">Search</button>
                </form>
                {/* Actions */}
                <div className="flex gap-6 items-center">
                    <a href="/shop-compare" className="relative flex flex-col items-center">
                        <img src="/assets/imgs/theme/icons/icon-compare.svg" className="w-6 h-6" alt="Compare" />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">3</span>
                        <span className="text-xs mt-1">Compare</span>
                    </a>
                    <a href="/shop-wishlist" className="relative flex flex-col items-center">
                        <img src="/assets/imgs/theme/icons/icon-heart.svg" className="w-6 h-6" alt="Wishlist" />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">6</span>
                        <span className="text-xs mt-1">Wishlist</span>
                    </a>
                    <CartDropdown />
                    <AccountDropdown />
                </div>
            </div>
            {/* Menu Example */}
            <nav className="bg-gray-50 border-t border-b py-2">
                <div className="container mx-auto flex gap-4">
                    <a href="/" className="px-4 py-2 font-semibold hover:text-green-600">Home</a>
                    <a href="/shop-grid-right" className="px-4 py-2 font-semibold hover:text-green-600">Shop</a>
                    <MegaMenu />
                    <a href="/blog-category-grid" className="px-4 py-2 font-semibold hover:text-green-600">Blog</a>
                    <a href="/page-contact" className="px-4 py-2 font-semibold hover:text-green-600">Contact</a>
                </div>
            </nav>
        </header>
    );
}