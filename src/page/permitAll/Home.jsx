import React, { useState } from "react";

import ModalQuickView from "../../components/home/ModalQuickView";
import HeroSlider from "../../components/home/HeroSlider";
import BannerSection from "../../components/home/BannerSection";
import ProductTabs from "../../components/home/ProductCard";
import Footer from "../../components/home/Footer";
import MainNav from "../../components/home/MainNav";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import Newsletter from "../../components/home/Newsletter";
import BlogSection from "../../components/home/BlogSection";
import PromoBar from "../../components/home/PromoBar";
import SideCategories from "../../components/home/SideCategories";
import StickyBar from "../../components/home/StickyBar";
import AdPopup from "../../components/home/AdPopup";
import NewsletterModal from "../../components/home/NewsletterModal";
import Breadcrumb from "../../components/home/Breadcrumb";
import FilterSidebar from "../../components/home/FilterSidebar";
import TestimonialSection from "../../components/home/TestimonialSection";
import PartnerSlider from "../../components/home/PartnerSlider";
import SupportChatButton from "../../components/home/SupportChatButton";
import ScrollToTopButton from "../../components/home/ScrollToTopButton";
import Header from "../../components/home/Header";
import AnnouncementBar from "../../components/home/AnnouncementBar";
import AuthModal from "../../components/home/AuthModal";
import InstagramGallery from "../../components/home/InstagramGallery";
import FloatingContact from "../../components/home/FloatingContact";
import FlashSaleBar from "../../components/home/FlashSaleBar";
import AddToCartPopup from "../../components/home/AddToCartPopup";
import SMSRegisterWidget from "../../components/home/SMSRegisterWidget";
import GuaranteeBar from "../../components/home/GuaranteeBar";
import MembershipBanner from "../../components/home/MembershipBanner";
import TeamIntro from "../../components/home/TeamIntro";
import SocialLinksBar from "../../components/home/SocialLinksBar";
import HowToBuySection from "../../components/home/HowToBuySection";
import VideoGallerySection from "../../components/home/VideoGallerySection";
import FAQSection from "../../components/home/FAQSection";
import StoreMap from "../../components/home/StoreMap";
import CookieBar from "../../components/home/CookieBar";

export default function Home() {
    // State cho popup/modal
    const [showQuickView, setShowQuickView] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    // Popup thêm giỏ hàng demo (nếu cần)
    const [showAddCart, setShowAddCart] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    // Hàm mẫu: khi user bấm "Thêm vào giỏ hàng"
    function handleAddToCart(product) {
        setCurrentProduct(product);
        setShowAddCart(true);
    }

    return (
        <div className="relative bg-gray-50 min-h-screen">
            {/* Thông báo trên cùng */}
            <AnnouncementBar message="Miễn phí vận chuyển đơn hàng trên 1 triệu đồng!" />
            <PromoBar />
            {/* Popup quảng cáo, đăng ký nhận tin, modal đăng nhập */}
            <AdPopup />
            <NewsletterModal />
            <AuthModal open={showAuth} onClose={() => setShowAuth(false)} />
            {/* Modal xem nhanh sản phẩm */}
            <ModalQuickView open={showQuickView} onClose={() => setShowQuickView(false)} />
            {/* Popup đã thêm vào giỏ hàng */}
            <AddToCartPopup
                open={showAddCart}
                product={currentProduct}
                onClose={() => setShowAddCart(false)}
            />

            {/* Header, Navigation */}
            <Header />
            <MainNav />
            {showMobileMenu && <MobileHeader onClose={() => setShowMobileMenu(false)} />}
            <StickyBar />

            {/* Breadcrumb */}
            <div className="container mx-auto">
                <Breadcrumb path={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
            </div>

            {/* Sidebar và main content */}
            <div className="container mx-auto flex gap-6">
                <div className="hidden xl:block">
                    <SideCategories />
                    <FilterSidebar />
                </div>
                <main className="flex-1">
                    <FlashSaleBar endTime="2025-07-01T23:59:59Z" />
                    <GuaranteeBar />
                    <HeroSlider />
                    <FeaturedCategories />
                    <BannerSection />
                    <ProductTabs onAddToCart={handleAddToCart} onQuickView={setShowQuickView} />
                    <TestimonialSection />
                    <PartnerSlider />
                    <MembershipBanner />
                    <SMSRegisterWidget />
                    <TeamIntro />
                    <HowToBuySection />
                    <VideoGallerySection />
                    <Newsletter />
                    <FAQSection />
                    <StoreMap />
                    <BlogSection />
                    <InstagramGallery />
                    <SocialLinksBar />
                </main>
            </div>

            {/* Widget nổi */}
            <SupportChatButton />
            <ScrollToTopButton />
            <FloatingContact />

            {/* Footer */}
            <Footer />
            {/* Cookie/Privacy bar */}
            <CookieBar />
        </div>
    );
}