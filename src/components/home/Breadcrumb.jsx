import React from "react";

/**
 * Breadcrumb navigation, truyền mảng path dạng [{label: "Home", href: "/"}, ...]
 */
export default function Breadcrumb({ path }) {
    return (
        <nav className="text-sm py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-600">
                {path.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                        {idx > 0 && <span className="mx-1">/</span>}
                        {item.href ? (
                            <a href={item.href} className="hover:text-green-600">{item.label}</a>
                        ) : (
                            <span className="font-semibold">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}