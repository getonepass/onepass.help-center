import { Search } from "nextra/components";
import {
  Rocket,
  ShieldCheck,
  Network,
  Lock,
  Check,
  ArrowRight,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";



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
import { Link } from "nextra-theme-docs";


export const Landing = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black-50 to-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <Badge variant="outline" className="mb-4">
            <span class="text-primary-foreground bg-primary rounded-2xl border px-1.5 py-0.5 text-xs font-bold tracking-tight">
              Announcement
            </span>
            OnePass Bridge is out!{" "}
            <Link href="/blog/onepass-bridge">
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </Badge>
          <Badge variant="outline" className="mb-4">
            Trusted by 5,000+ startups
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Trusted Gateway for{" "}
            <span className="text-green-600">Startup-Investor</span> Connections
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            OnePass combines decentralized identity with smart matchmaking to
            help startups raise capital and investors discover vetted
            opportunities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Startups
            </Button>
          </div>
          {/* Placeholder for hero visual */}
          <div className="mt-16 bg-gray-200 rounded-xl h-96 w-full"></div>
        </section>

        {/* Hero Section 2 */}
        <section className="container mx-auto px-4 py-24 text-center">
          <Badge variant="outline" className="mb-4">
            <span class="text-primary-foreground bg-primary rounded-2xl border px-1.5 py-0.5 text-xs font-bold tracking-tight">
              Announcement
            </span>
            OnePass Bridge is out!{" "}
            <Link href="/blog/onepass-bridge">
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering{" "}
            <span className="text-green-600">Startup and Investors</span>{" "}
            Through Seamless Connections
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlock unprecedented opportunities with OnePass. Whether you're a
            startup seeking funding or an investor looking for the next big
            innovation, OnePass bridges the gap with trust and efficiency.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Join now
            </Button>
          </div>
          {/* Placeholder for hero visual */}
          <div className="mt-16 bg-gray-200 rounded-xl h-96 w-full"></div>
        </section>

        {/* Value Proposition */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Why OnePass?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
                title: "Verified Trust",
                desc: "Decentralized identity credentials eliminate fraud and streamline due diligence.",
              },
              {
                icon: <Network className="w-10 h-10 text-blue-600" />,
                title: "Intelligent Matching",
                desc: "Our algorithm connects startups with investors based on shared goals.",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                title: "Secure Collaboration",
                desc: "End-to-end encrypted document sharing with granular access controls.",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For startups",
                title: "Enhanced Visibility",
                desc: "Gain increased exposure among reputable investors globally, accelerating your path to funding",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For startups",
                title: "Trust and Credibility",
                desc: "Showcase your legitimacy with verified profiles, helping you stand out in a competitive marketplace",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For startups",
                title: "Simplified Access to Funding",
                desc: "Streamlined matchmaking processes reduce friction, saving you valuable time and resources",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For investors",
                title: "Reduced Risk",
                desc: "Reliable verification of startup credentials significantly mitigates risks associated with investments",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For investors",
                title: "Efficient Deal Flow",
                desc: "Access a curated list of verified, investment-ready startups, enhancing the efficiency of your investment",
              },
              {
                icon: <Lock className="w-10 h-10 text-blue-600" />,
                badge: "For investors",
                title: "Transparent Interactions",
                desc: "Engage with startups through a platform that ensures transparency and trust, making informed investment decisions easier",
              },
            ].map((item, i) => (
                <Card key={i} className="p-8 text-center relative">
                {item.badge && (
                  <Badge className="absolute top-2 left-2 bg-black text-white">
                  {item.badge}
                  </Badge>
                )}
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                </Card>
            ))}
          </div>
        </section>

        {/* Product Showcase */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Fundraise with Confidence
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Get investor-ready with verifiable credentials",
                  "Showcase traction with secure document sharing",
                  "Appear in curated recommendations for investors",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
              <Button>Join as a Startup</Button>
            </div>
            <div className="bg-gray-200 rounded-xl h-80"></div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Complete Profile",
                desc: "Startups/Investors provide key details + verifiable credentials",
              },
              {
                step: "2",
                title: "Get Matched",
                desc: "Our algorithm surfaces relevant connections daily",
              },
              {
                step: "3",
                title: "Engage Securely",
                desc: "Message, share docs, and track interactions in one place",
              },
            ].map((item, i) => (
              <Card key={i} className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-10 h-10 font-bold mr-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">
              <Play className="w-4 h-4 mr-2" />
              See How It Works (2 min)
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <p className="text-lg italic mb-6">
                  "OnePass cut our fundraising time by 40% by connecting us with
                  pre-vetted investors who actually understood our space."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                  <div>
                    <p className="font-bold">Startup Founder</p>
                    <p className="text-muted-foreground">Tech Company</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <p className="text-lg italic mb-6">
                  "The credential verification means I spend less time on due
                  diligence and more time on high-potential deals."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
                  <div>
                    <p className="font-bold">Investor</p>
                    <p className="text-muted-foreground">Venture Capital</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Fundraising or Investing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join today and get your first 3 matches free.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">
              I'm a Startup
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              I'm an Investor
            </Button>
          </div>
        </section>
      </div>
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
        <Testimonials />
        <Team />
        <Pricing />
        <Separator className="my-20" />
        <Cta />
        <Newsletter />
        <FAQ />
      </>
    </>
  );
};
