import React from "react";

/**
 * Sidebar bộ lọc sản phẩm (filter), demo cho filter theo price và category
 */
export default function FilterSidebar() {
    return (
        <aside className="w-64 bg-white shadow rounded-lg p-4 mb-8">
            <h4 className="font-semibold mb-4">Filter By</h4>
            <div className="mb-4">
                <div className="font-bold mb-2">Category</div>
                <ul className="space-y-1">
                    <li><label><input type="checkbox" /> Milks & Dairies</label></li>
                    <li><label><input type="checkbox" /> Fruits</label></li>
                    <li><label><input type="checkbox" /> Meats & Seafood</label></li>
                </ul>
            </div>
            <div>
                <div className="font-bold mb-2">Price</div>
                <input type="range" min="0" max="100" className="w-full" />
                <div className="flex justify-between text-xs mt-1">
                    <span>$0</span>
                    <span>$100</span>
                </div>
            </div>
            {/* ...bổ sung thêm filter khác nếu muốn */}
        </aside>
    );
}