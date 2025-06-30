import React from "react";

const faqs = [
    {
        q: "Làm sao để đặt hàng?",
        a: "Bạn chỉ cần chọn sản phẩm, thêm vào giỏ và tiến hành thanh toán theo hướng dẫn."
    },
    {
        q: "Shop có hỗ trợ đổi trả không?",
        a: "Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất."
    },
    {
        q: "Tôi có thể thanh toán bằng hình thức nào?",
        a: "Bạn có thể thanh toán khi nhận hàng hoặc chuyển khoản qua ngân hàng."
    }
];

export default function FAQSection() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Câu hỏi thường gặp</h3>
            <div className="bg-white rounded-lg shadow p-6">
                {faqs.map((item, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="font-semibold text-green-700">{item.q}</div>
                        <div className="text-gray-700">{item.a}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}