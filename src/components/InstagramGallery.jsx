import React from "react";

const images = [
    "/assets/imgs/instagram/insta-1.jpg",
    "/assets/imgs/instagram/insta-2.jpg",
    "/assets/imgs/instagram/insta-3.jpg",
    "/assets/imgs/instagram/insta-4.jpg",
    "/assets/imgs/instagram/insta-5.jpg",
    "/assets/imgs/instagram/insta-6.jpg",
];

export default function InstagramGallery() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Follow us on Instagram</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {images.map((img, idx) => (
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" key={idx}>
                        <img src={img} alt="Instagram" className="w-full h-32 object-cover rounded hover:opacity-90 transition" />
                    </a>
                ))}
            </div>
        </section>
    );
}