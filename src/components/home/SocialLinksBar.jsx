import React from "react";

export default function SocialLinksBar() {
    return (
        <div className="container mx-auto mb-8 flex items-center justify-center gap-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/assets/imgs/theme/icons/icon-facebook.svg" alt="Facebook" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                <img src="/assets/imgs/theme/icons/icon-zalo.svg" alt="Zalo" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <img src="/assets/imgs/theme/icons/icon-youtube.svg" alt="Youtube" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/assets/imgs/theme/icons/icon-instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </a>
        </div>
    );
}