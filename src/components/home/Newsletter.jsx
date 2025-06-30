import React from "react";
import Button from "./Button";

export default function Newsletter() {
    return (
        <section className="bg-green-50 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold mb-2">Sign up for Newsletter</h4>
                    <p className="text-gray-600">...and get updates on latest deals, promotions and more!</p>
                </div>
                <form className="flex">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="p-2 border border-gray-300 rounded-l outline-none w-60"
                    />
                    <Button className="rounded-l-none">Subscribe</Button>
                </form>
            </div>
        </section>
    );
}