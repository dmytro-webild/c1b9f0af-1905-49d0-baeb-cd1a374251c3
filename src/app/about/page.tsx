"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function AboutPage() {
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
              { name: "Home", id: "/" },
              { name: "Models", id: "/products" },
              { name: "Our Story", id: "/about" },
              { name: "Process", id: "/features" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Sutton Customized Tiny Homes - 111 S Butler St, Sutton NE"
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            useInvertedBackground={false}
            title="Our Story: Crafted in Small Town, USA"
            description="Sutton Customized Tiny Homes was born from a passion for sustainable living and traditional local craftsmanship. We believe every small home should be a big reflection of your values, built with integrity right here in our community."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930662778-ltrznsvr.png?_wi=1"
            imageAlt="Small town craftsman workshop"
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