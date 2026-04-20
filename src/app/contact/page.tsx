"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import Textarea from '@/components/form/Textarea';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

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
          <ContactText
            text="Let's Build Your Dream"
            background={{ variant: "plain" }}
            useInvertedBackground={false}
            className="max-w-2xl mx-auto py-24"
          />
          <div className="max-w-2xl mx-auto px-6 pb-24">
            <div className="flex flex-col gap-4 bg-[var(--card)] p-8 rounded-3xl">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-3 rounded-lg bg-[var(--background)] border border-[var(--accent)] text-[var(--foreground)]"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full p-3 rounded-lg bg-[var(--background)] border border-[var(--accent)] text-[var(--foreground)]"
              />
              <Textarea 
                placeholder="Project Details" 
                value={details} 
                onChange={setDetails} 
                rows={6}
              />
              <button 
                onClick={() => alert("Message sent!")}
                className="mt-4 py-3 bg-[var(--primary-cta)] text-[var(--primary-cta-text)] rounded-full font-semibold"
              >
                Send Details
              </button>
            </div>
          </div>
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