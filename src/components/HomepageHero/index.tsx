"use client";

import { Hero } from "@/components/Hero";
import { CategoriesCards } from "@/components/CategoriesCards";
import { Credentials } from "@/components/Credentials";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Sponsors } from "@/components/Sponsors";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Newsletter } from "@/components/Newsletter";
import { Separator } from "@/components/ui/separator";

export default function HomepageHero() {
  return (
    <>
      <Hero />
      <CategoriesCards />
      <Sponsors />
      <About />
      <HowItWorks />
      <Separator className="my-20" />
      <Credentials />
      <Features />
      <Services />
      <Cta />
      <Newsletter />
      <FAQ />
    </>
  );
}
