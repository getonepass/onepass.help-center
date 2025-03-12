import { Hero } from "@/components/Hero"
import { CategoriesCards } from "@/components/CategoriesCards"
import { Credentials } from "@/components/Credentials"
import { About } from "@/components/About"
import { HowItWorks } from "@/components/HowItWorks"
import { Features } from "@/components/Features"
import { Cta } from "@/components/Cta"
import { FAQ } from "@/components/FAQ"
import { Sponsors } from "@/components/Sponsors"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { Team } from "@/components/Team"
import { Pricing } from "@/components/Pricing"
import { Newsletter } from "@/components/Newsletter"
import { Separator } from "@/components/ui/separator"
import { ArticlesCards } from "@/components/PageMap"

export default function HomepageHero() {
  return (
    <>
      <Hero />
      <CategoriesCards />
      <Separator className="my-20" />
      <h2 className="text-4xl font-bold text-center">Guides</h2>
      <ArticlesCards route="/guides" />
      <Separator className="my-20" />
      <h2 className="text-4xl font-bold text-center">Support Topics</h2>
      <ArticlesCards route="/articles" />
    </>
  )
}
