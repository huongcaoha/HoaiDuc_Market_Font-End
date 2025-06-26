import React, { useState } from "react";

import ModalQuickView from "../../components/ModalQuickView";
import HeroSlider from "../../components/HeroSlider";
import BannerSection from "../../components/BannerSection";
import ProductTabs from "../../components/ProductCard";
import Footer from "../../components/Footer";
import MainNav from "../../components/MainNav";
import FeaturedCategories from "../../components/FeaturedCategories";
import Newsletter from "../../components/Newsletter";
import BlogSection from "../../components/BlogSection";
import PromoBar from "../../components/PromoBar";
import SideCategories from "../../components/SideCategories";
import StickyBar from "../../components/StickyBar";
import AdPopup from "../../components/AdPopup";
import NewsletterModal from "../../components/NewsletterModal";
import Breadcrumb from "../../components/Breadcrumb";
import FilterSidebar from "../../components/FilterSidebar";
import TestimonialSection from "../../components/TestimonialSection";
import PartnerSlider from "../../components/PartnerSlider";
import SupportChatButton from "../../components/SupportChatButton";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Header from "../../components/Header";
import AnnouncementBar from "../../components/AnnouncementBar";
import AuthModal from "../../components/AuthModal";
import InstagramGallery from "../../components/InstagramGallery";
import FloatingContact from "../../components/FloatingContact";
import FlashSaleBar from "../../components/FlashSaleBar";
import AddToCartPopup from "../../components/AddToCartPopup";
import SMSRegisterWidget from "../../components/SMSRegisterWidget";
import GuaranteeBar from "../../components/GuaranteeBar";
import MembershipBanner from "../../components/MembershipBanner";
import TeamIntro from "../../components/TeamIntro";
import SocialLinksBar from "../../components/SocialLinksBar";
import HowToBuySection from "../../components/HowToBuySection";
import VideoGallerySection from "../../components/VideoGallerySection";
import FAQSection from "../../components/FAQSection";
import StoreMap from "../../components/StoreMap";
import CookieBar from "../../components/CookieBar";

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