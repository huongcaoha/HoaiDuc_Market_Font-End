import React, { useEffect, useState } from "react";

/**
 * Nút cuộn lên đầu trang, chỉ hiện khi user scroll xuống
 */
export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        function onScroll() {
            setShow(window.scrollY > 200);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full p-3 shadow-lg z-[99]"
            aria-label="Scroll to top"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
                viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
    );
}