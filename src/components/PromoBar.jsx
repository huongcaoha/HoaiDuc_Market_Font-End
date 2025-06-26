import React from "react";

export default function PromoBar() {
    return (
        <div className="w-full bg-green-100 text-green-800 py-2 text-center text-sm font-semibold">
            Grand opening, <span className="font-bold">up to 15%</span> off all items. Only <span className="font-bold">3 days</span> left
        </div>
    );
}