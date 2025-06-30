import React, { useState, useEffect } from "react";

/**
 * Modal popup đăng ký nhận bản tin (newsletter)
 */
export default function NewsletterModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setOpen(true), 6000); // Xuất hiện sau 6s
        return () => clearTimeout(timeout);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
                <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-lg text-gray-400 hover:text-gray-800">&times;</button>
                <h3 className="text-lg font-bold mb-2 text-center">Subscribe to our Newsletter</h3>
                <p className="text-gray-600 text-center mb-4">Get exclusive offers and updates!</p>
                <form>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="border rounded-l px-3 py-2 w-2/3"
                    />
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-r font-semibold">Subscribe</button>
                </form>
            </div>
        </div>
    );
}