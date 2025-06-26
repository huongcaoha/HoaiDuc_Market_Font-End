import React from "react";

/**
 * Slider đối tác/nhãn hàng (hiện logo đối tác), có thể dùng thư viện slider nếu muốn hiệu ứng động
 */
const partners = [
    "/assets/imgs/theme/brand-1.png",
    "/assets/imgs/theme/brand-2.png",
    "/assets/imgs/theme/brand-3.png",
    "/assets/imgs/theme/brand-4.png",
    "/assets/imgs/theme/brand-5.png",
    "/assets/imgs/theme/brand-6.png",
];

export default function PartnerSlider() {
    return (
        <section className="container mx-auto mb-8">
            <div className="bg-white rounded-lg shadow p-4 flex flex-wrap items-center justify-center gap-8">
                {partners.map((logo, idx) => (
                    <img src={logo} key={idx} className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition" alt="brand" />
                ))}
            </div>
        </section>
    );
}