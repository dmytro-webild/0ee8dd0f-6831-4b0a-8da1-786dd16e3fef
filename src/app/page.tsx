"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="medium"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ECO Services"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Clean Spaces, Safe Homes."
      description="ECO Services delivers premium, eco-friendly cleaning and pest control solutions. Your health and comfort are our absolute priority."
      testimonials={[
        {
          name: "Alice Green",
          handle: "@alice",
          testimonial: "Exceptional service! They made our home shine.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-professional-housekeeper-uniform-yellow-rubber-gloves-spraying-cleaner-you_171337-18302.jpg?_wi=1",
          imageAlt: "professional cleaning service worker",
        },
        {
          name: "Bob Smith",
          handle: "@bob",
          testimonial: "Very professional pest control. No chemicals, all safe.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-cleaning-building_23-2150454517.jpg?_wi=1",
          imageAlt: "professional cleaning service worker",
        },
        {
          name: "Chloe White",
          handle: "@chloe",
          testimonial: "The best cleaning team in town. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/formwork-paper-cup_23-2148889837.jpg?_wi=1",
          imageAlt: "professional cleaning service worker",
        },
        {
          name: "Dave Hall",
          handle: "@dave",
          testimonial: "Prompt and effective. Great eco-conscious company.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-realtor-looking-house-plans-together-while-wearing-medical-masks_23-2148895452.jpg?_wi=1",
          imageAlt: "professional cleaning service worker",
        },
        {
          name: "Eve Lee",
          handle: "@eve",
          testimonial: "Reliable and thorough. Will definitely book again.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-disinfecting-products-desk_23-2148848549.jpg?_wi=1",
          imageAlt: "professional cleaning service worker",
        },
      ]}
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-portrait-professional-housekeeper-uniform-yellow-rubber-gloves-spraying-cleaner-you_171337-18302.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/professional-cleaning-service-people-working-together-office_23-2150520610.jpg",
          alt: "Professional cleaning service people working together in an office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-cleaning-service-person-cleaning-office_23-2150520592.jpg",
          alt: "Professional cleaning service person cleaning office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-cleaning-service-person-cleaning-office_23-2150520588.jpg",
          alt: "Professional cleaning service person cleaning office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-kitchen_1163-2420.jpg",
          alt: "Portrait of smiling young man at the kitchen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-housewife-holding-cleaning-equipment-hands_23-2147916439.jpg",
          alt: "happy client home cleaning",
        },
      ]}
      avatarText="Trusted by 500+ happy homes"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Setting the Standard in Hygiene."
      description="With years of expertise, ECO Services provides tailored cleaning and pest management, using only biodegradable, non-toxic products."
      metrics={[
        {
          value: "100%",
          title: "Eco-friendly",
        },
        {
          value: "500+",
          title: "Homes Secured",
        },
        {
          value: "10",
          title: "Years Experience",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-cleaning-building_23-2150454517.jpg?_wi=2"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Eco Cleaning",
          description: "Safe for kids, pets, and our planet.",
          tag: "Cleaning",
          imageSrc: "http://img.b2bpic.net/free-photo/formwork-paper-cup_23-2148889837.jpg?_wi=2",
        },
        {
          id: "2",
          title: "Pest Control",
          description: "Effective, organic, and long-lasting treatments.",
          tag: "Pest",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-realtor-looking-house-plans-together-while-wearing-medical-masks_23-2148895452.jpg?_wi=2",
        },
        {
          id: "3",
          title: "Deep Sanitization",
          description: "Hospital-grade cleaning for residential and commercial.",
          tag: "Sanitize",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-disinfecting-products-desk_23-2148848549.jpg?_wi=2",
        },
      ]}
      title="Comprehensive Care"
      description="From deep sanitization to pest elimination, we handle it all with precision."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Eco Cleaning Bundle",
          price: "$129",
          variant: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-various-cleaning-products_23-2150829668.jpg",
        },
        {
          id: "2",
          name: "Total Pest Defense",
          price: "$199",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-vector/exterminator-pest-control-vector-images_98292-2226.jpg",
        },
        {
          id: "3",
          name: "Sanitization Plus",
          price: "$249",
          variant: "Advanced",
          imageSrc: "http://img.b2bpic.net/free-photo/scientific-analyzing-beach_23-2147827037.jpg",
        },
        {
          id: "4",
          name: "Maintenance Basic",
          price: "$89",
          variant: "Standard",
          imageSrc: "http://img.b2bpic.net/free-photo/red-cleaning-tools-space-left_23-2147700602.jpg",
        },
        {
          id: "5",
          name: "Office Sanitizer",
          price: "$349",
          variant: "Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/colourful-plastic-bucket-spade-background_1048-16761.jpg",
        },
        {
          id: "6",
          name: "Custom Home Care",
          price: "$499",
          variant: "Elite",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-mask-with-hand-sanitizers-around-white-containers_114579-7227.jpg",
        },
      ]}
      title="Our Service Bundles"
      description="Flexible plans designed to keep your environment pristine year-round."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$99",
          subtitle: "For small apartments",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "Kitchen Cleaning",
            "Dusting",
            "Bathroom Sanitization",
          ],
        },
        {
          id: "pro",
          badge: "Standard",
          price: "$199",
          subtitle: "For full family homes",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "Everything in Basic",
            "Pest Inspection",
            "Window Cleaning",
          ],
        },
        {
          id: "elite",
          badge: "Advanced",
          price: "$299",
          subtitle: "For deep property care",
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
          features: [
            "Everything in Standard",
            "Pest Treatment",
            "Upholstery Steam Clean",
          ],
        },
      ]}
      title="Simple, Clear Pricing"
      description="Choose the best plan to suit your lifestyle."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "99.9%",
          title: "Bacteria Removal",
          description: "Laboratory tested.",
          imageSrc: "http://img.b2bpic.net/free-photo/pile-fresh-tangerine-mixed-table_114579-46712.jpg",
        },
        {
          id: "m2",
          value: "24/7",
          title: "Support Ready",
          description: "Always here to help.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-doing-community-service-by-collecting-trash-outdoors_23-2149109145.jpg",
        },
        {
          id: "m3",
          value: "0%",
          title: "Toxic Chemicals",
          description: "Always 100% organic.",
          imageSrc: "http://img.b2bpic.net/free-photo/three-men-plastic-garbage-collecting-polluted-park_1268-20117.jpg",
        },
      ]}
      title="Evidence-Backed Results"
      description="Our numbers speak for the health and cleanliness we bring to your life."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice",
          role: "Owner",
          company: "Home",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-housewife-holding-cleaning-equipment-hands_23-2147916439.jpg",
        },
        {
          id: "t2",
          name: "Bob",
          role: "Manager",
          company: "Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2712.jpg",
        },
        {
          id: "t3",
          name: "Chloe",
          role: "Mom",
          company: "Family",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-doctor-pointing-blank-frame-protective-suit_176474-23822.jpg",
        },
        {
          id: "t4",
          name: "Dave",
          role: "CEO",
          company: "Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-successful-businesswoman-smiling-posing-office_176420-919.jpg",
        },
        {
          id: "t5",
          name: "Eve",
          role: "Agent",
          company: "RealEstate",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064919.jpg",
        },
      ]}
      title="Loved by Our Community"
      description="Hear why families and businesses trust ECO Services."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in touch"
      title="Ready for a cleaner home?"
      description="Contact our team for a free consultation today."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@ecoservices.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/portrait-smiling-excited-businesswoman-sitting-with-laptop-makes-crossed-fingers-gesture-make_1258-125410.jpg"
      logoText="ECO Services"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
