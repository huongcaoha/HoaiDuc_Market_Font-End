import React from "react";

export default function BannerSection() {
    return (
        <section className="container mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative rounded-lg overflow-hidden">
                    <img src="/assets/imgs/banner/banner-1.png" className="w-full" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-white/90 to-transparent">
                        <h4 className="text-lg font-semibold mb-2">
                            Everyday Fresh & <br />Clean with Our<br />Products
                        </h4>
                        <a href="/shop-grid-right" className="inline-block bg-green-600 text-white rounded px-4 py-1 text-sm">
                            Shop Now &rarr;
                        </a>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img src="/assets/imgs/banner/banner-2.png" className="w-full" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-white/90 to-transparent">
                        <h4 className="text-lg font-semibold mb-2">
                            Make your Breakfast<br />Healthy and Easy
                        </h4>
                        <a href="/shop-grid-right" className="inline-block bg-green-600 text-white rounded px-4 py-1 text-sm">
                            Shop Now &rarr;
                        </a>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden hidden md:block">
                    <img src="/assets/imgs/banner/banner-3.png" className="w-full" alt="" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-white/90 to-transparent">
                        <h4 className="text-lg font-semibold mb-2">The best Organic <br />Products Online</h4>
                        <a href="/shop-grid-right" className="inline-block bg-green-600 text-white rounded px-4 py-1 text-sm">
                            Shop Now &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}