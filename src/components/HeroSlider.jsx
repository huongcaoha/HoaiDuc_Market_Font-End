import React from "react";

export default function HeroSlider() {
    return (
        <section className="container mx-auto mt-8 mb-12">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {/* Slider */}
                <div className="xl:col-span-2 rounded-lg p-8 flex flex-col justify-center bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/imgs/slider/slider-3.png')" }}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Pure Coffee <br /> Big discount
                    </h1>
                    <p className="text-lg mb-8">Save up to 50% off on your first order</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded-l border border-gray-300 outline-none w-60"
                        />
                        <button className="bg-green-600 text-white font-bold rounded-r px-6">Subscribe</button>
                    </form>
                </div>
                {/* Banner Right */}
                <div className="hidden xl:flex flex-col bg-gray-200 rounded-lg justify-between p-8">
                    <h2 className="text-3xl font-bold mb-6">
                        Delivered <br />
                        to <span className="text-green-600">your home</span>
                    </h2>
                    <a href="/shop-grid-right" className="bg-green-600 text-white rounded px-6 py-2 mt-4 flex items-center justify-between w-max">
                        Shop Now <span className="ml-2">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}