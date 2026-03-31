"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
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
        {
          name: "Models",
          id: "products",
        },
        {
          name: "Our Story",
          id: "about",
        },
        {
          name: "Process",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SmallTown Tiny Homes"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Simple Living, Crafted Locally"
      description="Building sustainable, artisan tiny homes for the simple life you've always wanted. Experience small-town craftsmanship in every square foot."
      buttons={[
        {
          text: "View Our Models",
          href: "#products",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/small-house-figurine_1161-290.jpg",
          imageAlt: "Tiny home cabin in forest",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plants-pot-with-watering-can_23-2148905227.jpg",
          imageAlt: "Tiny house exterior design",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-explores-traditional-icelandic-landscape_346278-294.jpg",
          imageAlt: "Small house sunset view",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-surface-sunset-beach-background_181624-28761.jpg",
          imageAlt: "Tiny home porch",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-sitting-outside-talking-phone_259150-58610.jpg",
          imageAlt: "Modern rustic tiny home",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/nomad-family-living-nature_23-2149431678.jpg",
          imageAlt: "Small home wooden interior",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "The Homestead",
          price: "$45,000",
          variant: "Rustic",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-walking-out-house_1303-25023.jpg",
        },
        {
          id: "p2",
          name: "The Minimalist",
          price: "$38,000",
          variant: "Modern",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-white-building-hamilton-gardens-new-zealand-blue-sky_181624-13599.jpg",
        },
        {
          id: "p3",
          name: "The Artisan",
          price: "$52,000",
          variant: "Craftsman",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-guitar-near-table-with-smartphone-notepad-cup-drink-cookies_23-2147969773.jpg",
        },
      ]}
      title="Our Models"
      description="Thoughtfully designed spaces that maximize comfort and style."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Crafted with Care"
      description="Located in the heart of our community, we believe that small spaces should have big hearts. Every home we build is a testament to quality, sustainability, and the local spirit."
      imageSrc="http://img.b2bpic.net/free-photo/artisan-doing-woodcutting_23-2150600787.jpg"
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
        {
          id: "f1",
          title: "Eco-Friendly Materials",
          description: "Sustainably sourced wood and green insulation to protect the planet.",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-house-concept-with-wooden-toy-house_23-2149595132.jpg",
        },
        {
          id: "f2",
          title: "Energy Efficient",
          description: "Designed for low impact and off-grid living options.",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-fire-fenced-with-stones-two-benches-nearby_169016-15142.jpg",
        },
        {
          id: "f3",
          title: "Smart Storage",
          description: "Every inch of your home is utilized with clever, built-in storage.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-drinking-coffee_23-2149596060.jpg",
        },
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
        {
          id: "t1",
          name: "John Doe",
          role: "Master Carpenter",
          imageSrc: "http://img.b2bpic.net/free-photo/man-crafting-instrument-his-workshop_23-2149018555.jpg",
        },
        {
          id: "t2",
          name: "Sarah Smith",
          role: "Lead Architect",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-cv-template_23-2149877778.jpg",
        },
        {
          id: "t3",
          name: "Mike Brown",
          role: "Construction Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-motivated-carpenter-standing-by-woodworking-machine-his-carpentry-workshop_342744-823.jpg",
        },
        {
          id: "t4",
          name: "Jane Wilson",
          role: "Company Founder",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-carpenter-checking-smoothness-wood-product-workshop_342744-828.jpg",
        },
      ]}
      title="Our Builders"
      description="Meet the team of local artisans bringing your dream home to life."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Homes Delivered",
          value: "150+",
          icon: Home,
        },
        {
          id: "m2",
          title: "Community Members",
          value: "300+",
          icon: Users,
        },
        {
          id: "m3",
          title: "Years of Experience",
          value: "12+",
          icon: Calendar,
        },
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
        {
          id: "1",
          name: "Elena R.",
          date: "2023-05-12",
          title: "Love my new home",
          quote: "Living in my tiny home has changed my perspective on life. Everything is so cozy and functional!",
          tag: "Happy Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-dancing_23-2149071573.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/small-house-figurine_1161-290.jpg",
          imageAlt: "tiny home wooden exterior",
        },
        {
          id: "2",
          name: "Mark L.",
          date: "2023-08-20",
          title: "Great craftsmanship",
          quote: "The team was so helpful and the craftsmanship is incredible. Couldn't be happier.",
          tag: "Homeowner",
          avatarSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/plants-pot-with-watering-can_23-2148905227.jpg",
          imageAlt: "tiny house porch garden",
        },
        {
          id: "3",
          name: "Sophie K.",
          date: "2024-01-10",
          title: "Simple living dream",
          quote: "Finally achieved my dream of owning a home. Small town lifestyle at its best.",
          tag: "Proud Owner",
          avatarSrc: "http://img.b2bpic.net/free-photo/long-shot-woman-taking-picture_23-2148258897.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-explores-traditional-icelandic-landscape_346278-294.jpg",
          imageAlt: "tiny house landscape morning",
        },
        {
          id: "4",
          name: "David W.",
          date: "2024-02-15",
          title: "Perfect fit",
          quote: "The space utilization is genius. I have everything I need in such a beautiful package.",
          tag: "Satisfied",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-tablet_23-2149986663.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-surface-sunset-beach-background_181624-28761.jpg",
          imageAlt: "cozy tiny house sunset",
        },
        {
          id: "5",
          name: "Alex P.",
          date: "2024-03-01",
          title: "Incredible value",
          quote: "Best investment I ever made. The design is smart and the building process was seamless.",
          tag: "New Owner",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-dancing_23-2149071573.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-sitting-outside-talking-phone_259150-58610.jpg",
          imageAlt: "tiny home front entrance",
        },
      ]}
      title="Happy Homeowners"
      description="Hear from those living the tiny dream."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Let's Talk"
      title="Ready to Start Your Journey?"
      description="Contact us today for a consultation and let's start planning your dream tiny home."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@smalltowntiny.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Models",
          items: [
            {
              label: "Homestead",
              href: "#products",
            },
            {
              label: "Minimalist",
              href: "#products",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 SmallTown Tiny Homes"
      bottomRightText="Built with love in Small Town, USA."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
