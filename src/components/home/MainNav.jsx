
import CategoriesDropdown from "./CategoriesDropdown";
import MegaMenu from "./MegaMenu";
import Hotline from "./Hotline";

export default function MainNav() {

    return (
        <div className="container mx-auto flex items-center justify-between py-2">
            <div className="hidden lg:flex items-center gap-4 flex-1">
                <CategoriesDropdown />
                <nav className="flex gap-6 ml-8">
                    <a href="/" className="hover:text-green-600 font-semibold">Home</a>
                    <a href="/shop-grid-right" className="hover:text-green-600 font-semibold">Shop</a>
                    <MegaMenu />
                    <a href="/blog-category-grid" className="hover:text-green-600 font-semibold">Blog</a>
                    <a href="/page-contact" className="hover:text-green-600 font-semibold">Contact</a>

                </nav>
            </div>
            {/* Hotline */}
            <Hotline />
            {/* Burger menu for mobile (demo, chưa làm hiệu ứng động) */}
            <div className="lg:hidden flex items-center">
                <button className="p-2">
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                </button>
            </div>
        </div>
    );
}