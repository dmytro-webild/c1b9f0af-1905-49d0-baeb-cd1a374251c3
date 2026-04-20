"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactForm from '@/components/form/ContactForm';
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
      <ContactForm
      title="Let's Build Your Dream"
      description="Fill out the form below with your full name, email, and project details and we will reach out shortly to discuss your custom tiny home."
      tag="Contact Us"
      centered={true}
      useInvertedBackground={false}
      className="max-w-2xl mx-auto py-24"
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