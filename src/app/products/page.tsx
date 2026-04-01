"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function ProductsPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Models", id: "/products" },
              { name: "Our Story", id: "/about" },
              { name: "Process", id: "/features" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Sutton Customized Tiny Homes - 111 S Butler St, Sutton NE"
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardFour
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "Home 1", price: "Price ", variant: "Rustic", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019572218-67juy9wv.png" },
              { id: "p2", name: "Home 2", price: "Price", variant: "Modern", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019578586-hk1h1t8a.png" },
              { id: "p3", name: "Home 3", price: "Price", variant: "Craftsman", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019582425-1lp5cx7c.png" },
            ]}
            title="Our Listings"
            description="Thoughtfully designed spaces that maximize comfort and style."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] },
              { title: "Models", items: [{ label: "Homestead", href: "/products" }, { label: "Minimalist", href: "/products" }] },
            ]}
            bottomLeftText="© 2024 SmallTown Tiny Homes"
            bottomRightText="Built with love in Small Town, USA."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}