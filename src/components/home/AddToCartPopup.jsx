import React, { useEffect } from "react";

/**
 * Popup xác nhận đã thêm vào giỏ hàng.
 * Gọi khi người dùng bấm "Add to cart".
 */
export default function AddToCartPopup({ open, product, onClose }) {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(onClose, 2000);
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    if (!open || !product) return null;
    return (
        <div className="fixed inset-0 bg-black/30 z-[150] flex items-end justify-center">
            <div className="bg-white rounded-t-lg shadow-lg max-w-xs w-full p-4 mb-8 flex items-center gap-3">
                <img src={product.img} alt={product.name} className="w-14 h-14 rounded object-cover" />
                <div>
                    <div className="font-bold text-green-700">{product.name}</div>
                    <div className="text-xs text-gray-500">Đã thêm vào giỏ hàng!</div>
                </div>
                <button onClick={onClose} className="ml-auto text-lg text-gray-500 hover:text-green-600">&times;</button>
            </div>
        </div>
    );
}