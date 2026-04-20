"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Calendar, Home, Users } from "lucide-react";

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Simple Living, Crafted Locally"
      description="Building sustainable, artisan tiny homes for the simple life you've always wanted. Experience small-town craftsmanship in every square foot."
      buttons={[
        { text: "View Our Listings", href: "/products" },
        { text: "Contact Us", href: "/contact" },
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774928722379-cr0uqxpm.jpg", imageAlt: "Tiny home cabin in forest" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930538517-9ju843gs.jpg", imageAlt: "Tiny house exterior design" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774928761031-xjd7rlmt.webp", imageAlt: "Small house sunset view" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930545087-5q4lr7c2.jpg", imageAlt: "Tiny home porch" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930549937-d91rem2n.jpg", imageAlt: "Modern rustic tiny home" },
        { imageSrc: "http://img.b2bpic.net/free-photo/nomad-family-living-nature_23-2149431678.jpg", imageAlt: "Small home wooden interior" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Home 1", price: "Price ", variant: "Rustic", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930580867-6k2twyhd.jpg?_wi=2" },
        { id: "p2", name: "Home 2", price: "Price", variant: "Modern", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930569259-dfpcoz3p.jpg?_wi=2" },
        { id: "p3", name: "Home 3", price: "Price", variant: "Craftsman", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930053573-kwkura2j.jpg?_wi=2" },
      ]}
      title="Our Listings"
      description="Thoughtfully designed spaces that maximize comfort and style."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Crafted with Care"
      description="Located in the heart of our community, we believe that small spaces should have big hearts. Every home we build is a testament to quality, sustainability, and the local spirit."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1774930662778-ltrznsvr.png"
      imageAlt="Small town craftsman workshop"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Affordable Price", description: "Sustainably sourced wood and green insulation to protect the planet.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775018948436-fkv33kt3.png?_wi=1" },
        { id: "f2", title: "Sleek Design", description: "Designed for low impact and off-grid living options.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019299166-r7r3oqah.jpg" },
        { id: "f3", title: "Smart Storage", description: "Every inch of your home is utilized with clever, built-in storage.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019064234-o9i72oeb.png?_wi=1" },
      ]}
      title="Why Choose Us"
      description="We don't just build homes; we build lifestyle solutions for the modern dreamer."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      members={[
        { id: "t1", name: "1", role: "Master Carpenter", imageSrc: "http://img.b2bpic.net/free-photo/man-crafting-instrument-his-workshop_23-2149018555.jpg" },
        { id: "t2", name: "2", role: "Lead Architect", imageSrc: "http://img.b2bpic.net/free-photo/concentrated-colleagues-watching-statistic-charts-talking-about-work-professional-senior-managers-young-assistant-preparing-business-plan-teamwork-management-partnership-concept_74855-14229.jpg?id=12615850" },
      ]}
      title="Our Team"
      description="Meet the team of local artisans bringing your dream home to life."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", title: "Homes Delivered", value: "150+", icon: Home },
        { id: "m2", title: "Community Members", value: "300+", icon: Users },
        { id: "m3", title: "Years of Experience", value: "12+", icon: Calendar },
      ]}
      title="Our Impact"
      description="We are proud of our contributions to the small town living experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Elena R.", date: "2023-05-12", title: "Love my new home", quote: "Living in my tiny home has changed my perspective on life. Everything is so cozy and functional!", tag: "Happy Customer", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-dancing_23-2149071573.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775018948436-fkv33kt3.png?_wi=2", imageAlt: "tiny home wooden exterior" },
        { id: "2", name: "Mark L.", date: "2023-08-20", title: "Great craftsmanship", quote: "The team was so helpful and the craftsmanship is incredible. Couldn't be happier.", tag: "Homeowner", avatarSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775018980521-qp2x99ur.png", imageAlt: "tiny house porch garden" },
        { id: "3", name: "Sophie K.", date: "2024-01-10", title: "Simple living dream", quote: "Finally achieved my dream of owning a home. Small town lifestyle at its best.", tag: "Proud Owner", avatarSrc: "http://img.b2bpic.net/free-photo/long-shot-woman-taking-picture_23-2148258897.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019028461-lzf57euz.png", imageAlt: "tiny house landscape morning" },
        { id: "4", name: "David W.", date: "2024-02-15", title: "Perfect fit", quote: "The space utilization is genius. I have everything I need in such a beautiful package.", tag: "Satisfied", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-tablet_23-2149986663.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775019064234-o9i72oeb.png?_wi=2", imageAlt: "cozy tiny house sunset" },
        { id: "5", name: "Alex P.", date: "2024-03-01", title: "Incredible value", quote: "Best investment I ever made. The design is smart and the building process was seamless.", tag: "New Owner", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-dancing_23-2149071573.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bh2MMhzp0UbH8j3hec2XpuT0pd/uploaded-1775018926307-7w6s3rn7.png", imageAlt: "tiny home front entrance" },
      ]}
      title="Happy Homeowners"
      description="Hear from those living the tiny dream."
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
