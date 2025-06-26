import React from "react";

export default function Hotline() {
    return (
        <div className="hidden lg:flex items-center gap-2 ml-6">
            <img src="/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" className="w-8" />
            <div>
                <div className="font-bold text-lg leading-none">1900 - 888</div>
                <div className="text-xs text-gray-500 leading-none">24/7 Support Center</div>
            </div>
        </div>
    );
}