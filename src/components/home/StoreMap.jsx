import React from "react";

export default function StoreMap() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Địa chỉ cửa hàng</h3>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="mb-3 font-semibold text-green-700">
                    123 Đường ABC, Quận 1, TP.HCM
                </div>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="300"
                    className="rounded"
                    style={{ border: 0, minHeight: 200, maxWidth: 600 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502063730941!2d106.70042341428714!3d10.77637449232157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e4b8f2b2d%3A0x9b6a7f8e6636c6c!2zMTIzIMSQxrDhu51uZyBBQkMsIFF14bqtbiAxLCBUaOG7pyDEkOG7kWkgTmjhuq1uLCBIQ00!5e0!3m2!1svi!2s!4v1685762210543!5m2!1svi!2s"
                ></iframe>
            </div>
        </section>
    );
}