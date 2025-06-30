import React from "react";

// Dùng cho sidebar (nếu muốn hiển thị menu dọc bên trái, ví dụ trên desktop)
const sideCategories = [
    { icon: "/assets/imgs/theme/icons/category-1.svg", label: "Milks and Dairies" },
    { icon: "/assets/imgs/theme/icons/category-2.svg", label: "Clothing & Beauty" },
    { icon: "/assets/imgs/theme/icons/category-3.svg", label: "Pet Foods & Toy" },
    // ... thêm các mục khác nếu cần
];

export default function SideCategories() {
    return (
        <aside className="hidden xl:block w-56 bg-white shadow rounded-lg p-4 mt-2">
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul>
                {sideCategories.map((cat, idx) => (
                    <li key={idx} className="flex items-center gap-2 py-2 hover:text-green-600 cursor-pointer">
                        <img src={cat.icon} alt="" className="w-6 h-6" />
                        <span>{cat.label}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}