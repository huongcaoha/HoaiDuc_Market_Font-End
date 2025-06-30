import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-12 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 flex items-center">
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" className="w-32 mr-4" />
                    <span className="text-sm">&copy; 2024 Nest. All rights reserved.</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-green-400 transition">Facebook</a>
                    <a href="#" className="hover:text-green-400 transition">Twitter</a>
                    <a href="#" className="hover:text-green-400 transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
}