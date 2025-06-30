import React, { useState } from "react";

/**
 * Widget đăng ký nhận khuyến mãi qua SMS
 */
export default function SMSRegisterWidget() {
    const [phone, setPhone] = useState("");
    const [done, setDone] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setDone(true);
        setTimeout(() => setDone(false), 2500);
        setPhone("");
    }

    return (
        <div className="bg-green-100 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
                <div className="font-bold text-lg text-green-700 mb-1">Đăng ký nhận ưu đãi qua SMS</div>
                <div className="text-sm text-gray-700">Nhận thông tin giảm giá và quà tặng mới nhất!</div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="tel"
                    required pattern="[0-9]{10,11}"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Nhập số điện thoại"
                    className="px-3 py-2 rounded border border-gray-300 outline-none w-48"
                />
                <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 font-semibold">Đăng ký</button>
            </form>
            {done && <div className="text-green-700 font-semibold mt-2">Đã đăng ký thành công!</div>}
        </div>
    );
}