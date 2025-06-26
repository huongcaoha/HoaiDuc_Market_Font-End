import React from "react";

const guarantees = [
    { icon: "/assets/imgs/theme/icons/icon-delivery.svg", label: "Miễn phí vận chuyển", detail: "Đơn hàng từ 1 triệu đồng" },
    { icon: "/assets/imgs/theme/icons/icon-return.svg", label: "Đổi trả miễn phí", detail: "Trong 7 ngày" },
    { icon: "/assets/imgs/theme/icons/icon-support.svg", label: "Hỗ trợ 24/7", detail: "Tư vấn tận tâm" },
    { icon: "/assets/imgs/theme/icons/icon-payment.svg", label: "Thanh toán linh hoạt", detail: "Nhiều hình thức" },
];

export default function GuaranteeBar() {
    return (
        <div className="container mx-auto my-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((g, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white rounded shadow p-4">
                    <img src={g.icon} alt={g.label} className="w-10 h-10" />
                    <div>
                        <div className="font-bold text-green-700">{g.label}</div>
                        <div className="text-xs text-gray-500">{g.detail}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}