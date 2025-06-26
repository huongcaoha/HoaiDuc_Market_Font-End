import React from "react";

const testimonials = [
    {
        avatar: "/assets/imgs/page/avatar-1.jpg",
        name: "Nguyen Van A",
        title: "Khách hàng",
        comment: "Dịch vụ và sản phẩm rất tuyệt vời, mình sẽ quay lại mua lần sau!",
    },
    {
        avatar: "/assets/imgs/page/avatar-2.jpg",
        name: "Le Thi B",
        title: "Khách hàng",
        comment: "Shop giao hàng nhanh, đóng gói cẩn thận và giá cả hợp lý.",
    },
    {
        avatar: "/assets/imgs/page/avatar-3.jpg",
        name: "Tran Van C",
        title: "Khách hàng",
        comment: "Chất lượng sản phẩm tốt, đội ngũ tư vấn nhiệt tình.",
    },
];

export default function TestimonialSection() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Khách hàng nói về chúng tôi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
                        <div className="text-lg font-semibold">{item.name}</div>
                        <div className="text-xs text-gray-400 mb-2">{item.title}</div>
                        <p className="text-gray-600">{item.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}