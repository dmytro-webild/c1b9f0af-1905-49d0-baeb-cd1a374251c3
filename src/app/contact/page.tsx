"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
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
          <ContactSplitForm
            title="Let's Build Your Dream"
            description="Reach out to our team to discuss your custom tiny home project. We're here to help you every step of the way."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true }
            ]}
            textarea={{ name: "details", placeholder: "Tell us about your project...", rows: 6, required: true }}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774928722379-cr0uqxpm.jpg?_wi=1"
            imageAlt="Custom tiny house"
            mediaPosition="right"
            useInvertedBackground={false}
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