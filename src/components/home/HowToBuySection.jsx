import React from "react";

const steps = [
    {
        icon: "/assets/imgs/theme/icons/icon-cart.svg",
        title: "Chọn sản phẩm",
        desc: "Duyệt danh mục hoặc tìm kiếm sản phẩm bạn muốn mua.",
    },
    {
        icon: "/assets/imgs/theme/icons/icon-bag.svg",
        title: "Thêm vào giỏ",
        desc: "Nhấn nút Thêm vào giỏ để chuẩn bị đặt hàng.",
    },
    {
        icon: "/assets/imgs/theme/icons/icon-payment.svg",
        title: "Thanh toán",
        desc: "Điền thông tin nhận hàng và chọn phương thức thanh toán.",
    },
    {
        icon: "/assets/imgs/theme/icons/icon-delivery.svg",
        title: "Nhận hàng",
        desc: "Đơn hàng được giao tận nơi, kiểm tra và thanh toán (COD).",
    },
];

export default function HowToBuySection() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Hướng dẫn mua hàng</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white p-6 rounded-lg shadow">
                        <img src={step.icon} alt={step.title} className="w-14 h-14 mb-2" />
                        <div className="font-bold mb-1">{step.title}</div>
                        <div className="text-sm text-gray-500 text-center">{step.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}