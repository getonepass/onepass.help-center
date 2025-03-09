import { buttonVariants } from "./ui/button"
import { HeroCards } from "./HeroCards"
import Link from "next/link"
import { IconLibrary, IconRocket } from "@tabler/icons-react"
import { Search } from "nextra/components"
import { Badge } from "./ui/badge"

const popularSearches: string[] = [
  "Sign up",
  "Verifiable credentials",
  "Pitch relay",
  "Verifications",
  "Decentralized Identity",
]

export const Hero = () => {
  return (
    <section className="container w-[70cqw] grid lg:grid-cols-1 place-items-center pt-40 md:pt-40 pb-10 md:pb-10 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="text-[20px]/20 font-bold">OnePass Help Center</h2>
          <h1>What can we help you find?</h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Find product docs, support articles, guides, and learning resources.
        </p>

        <p className="text text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Search for a topic or question
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex z-2">
          <Search className="scale-150 origin-left" />
        </div>

        <div className="flex flex-wrap gap-4">
          <span className="text text-sm text-muted-foreground py-1 inline">
            Popular searches:{" "}
          </span>
          {popularSearches.map((feature: string) => (
            <div key={feature}>
              <Badge variant="secondary" className="text-sm">
                {feature}
              </Badge>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <hr />
        </div>
      </div>
    </section>
  )
}
