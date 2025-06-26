import React, { useState } from "react";

const categories = [
    { icon: "/assets/imgs/theme/icons/category-1.svg", label: "Milks and Dairies" },
    { icon: "/assets/imgs/theme/icons/category-2.svg", label: "Clothing & beauty" },
    { icon: "/assets/imgs/theme/icons/category-3.svg", label: "Pet Foods & Toy" },
    { icon: "/assets/imgs/theme/icons/category-4.svg", label: "Baking material" },
    { icon: "/assets/imgs/theme/icons/category-5.svg", label: "Fresh Fruit" },
    { icon: "/assets/imgs/theme/icons/category-6.svg", label: "Wines & Drinks" },
    { icon: "/assets/imgs/theme/icons/category-7.svg", label: "Fresh Seafood" },
    { icon: "/assets/imgs/theme/icons/category-8.svg", label: "Fast food" },
    { icon: "/assets/imgs/theme/icons/category-9.svg", label: "Vegetables" },
    { icon: "/assets/imgs/theme/icons/category-10.svg", label: "Bread and Juice" }
];

export default function CategoriesDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded hover:bg-green-200 font-semibold">
                <span className="fi-rs-apps" />
                Browse All Categories
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {open && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded p-4 z-50 w-64">
                    <ul>
                        {categories.map((cat, idx) => (
                            <li key={idx} className="flex items-center gap-2 py-2 hover:text-green-600">
                                <img src={cat.icon} alt="" className="w-6 h-6" />
                                <span>{cat.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}