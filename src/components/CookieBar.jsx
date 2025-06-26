import React, { useState } from "react";

export default function CookieBar() {
    const [show, setShow] = useState(true);
    if (!show) return null;
    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-3 px-4 flex flex-col md:flex-row items-center justify-between z-[200]">
            <span>
                Trang web này sử dụng cookies để cải thiện trải nghiệm của bạn.{" "}
                <a href="/privacy" className="underline">Tìm hiểu thêm</a>
            </span>
            <button
                className="mt-2 md:mt-0 bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold"
                onClick={() => setShow(false)}
            >
                Đồng ý
            </button>
        </div>
    );
}