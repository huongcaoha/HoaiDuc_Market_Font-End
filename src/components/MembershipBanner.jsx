import React from "react";

export default function MembershipBanner() {
    return (
        <section className="container mx-auto mb-12">
            <div className="bg-gradient-to-r from-green-500 to-green-300 text-white rounded-lg flex flex-col md:flex-row items-center justify-between p-8 shadow-lg">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Thành viên nhận ưu đãi đặc biệt!</h2>
                    <p>Đăng ký tài khoản để tích điểm, nhận voucher và chương trình riêng cho khách hàng thân thiết.</p>
                </div>
                <a
                    href="/register"
                    className="mt-4 md:mt-0 bg-white text-green-700 font-bold px-6 py-3 rounded shadow hover:bg-green-100 transition"
                >
                    Đăng ký ngay
                </a>
            </div>
        </section>
    );
}