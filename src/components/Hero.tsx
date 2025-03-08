import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
import { IconLibrary, IconRocket } from "@tabler/icons-react";
import { Search } from "nextra/components";
import { Badge } from "./ui/badge";


const popularSearches: string[] = [
  "Sign up",
  "Verifiable credentials",
  "Pitch relay",
  "Documents HUB",
  "Verifications",
  "Decentralized Identity",
];

export const Hero = () => {
  return (
    <section className="container w-[70cqw] grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Get the help you need
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Find product docs, support articles, guides, and learning resources
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
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="#"
            className={`w-full md:w-1/3 h-12 ${buttonVariants({
              variant: "default",
            })}`}
          >
            <IconRocket
              size="32px"
              style={{ marginRight: "0.5rem", height: "32px" }}
            />
            Launch Demo
          </Link>

          <Link
            href="/docs"
            className={`w-full md:w-1/3 h-12 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <IconLibrary
              size="24px"
              style={{ marginRight: "0.5rem", height: "32px" }}
            />
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
};
