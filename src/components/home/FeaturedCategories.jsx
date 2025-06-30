import React from "react";

const categories = [
    { icon: "/assets/imgs/theme/icons/category-1.svg", label: "Milks and Dairies" },
    { icon: "/assets/imgs/theme/icons/category-2.svg", label: "Clothing & Beauty" },
    { icon: "/assets/imgs/theme/icons/category-3.svg", label: "Pet Foods & Toy" },
    { icon: "/assets/imgs/theme/icons/category-4.svg", label: "Baking Material" },
    { icon: "/assets/imgs/theme/icons/category-5.svg", label: "Fresh Fruit" },
    { icon: "/assets/imgs/theme/icons/category-6.svg", label: "Wines & Drinks" },
    { icon: "/assets/imgs/theme/icons/category-7.svg", label: "Fresh Seafood" },
    { icon: "/assets/imgs/theme/icons/category-8.svg", label: "Fast Food" },
];

export default function FeaturedCategories() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6">Featured Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg transition">
                        <img src={cat.icon} alt={cat.label} className="w-12 h-12 mb-2" />
                        <span className="text-sm font-medium">{cat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}