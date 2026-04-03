"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function ContactPage() {
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

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Contact Us"
      title="Get in Touch"
      description="Have questions about our tiny homes? Send us a message and we'll get back to you soon."
      buttons={[{ text: "Submit Inquiry", href: "#" }]}
      className="flex justify-center items-center"
      contentClassName="text-center"
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