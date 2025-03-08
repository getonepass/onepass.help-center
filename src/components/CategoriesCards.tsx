import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Check, Linkedin } from "lucide-react"
import { LightBulbIcon } from "./Icons"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export const CategoriesCards = () => {
  return (
    <section className="container w-[70cqw] grid lg:grid-cols-3 gap-5">
      {/* Reference */}
      <Card>
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
          <div className="mt-1 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Help topics</CardTitle>
            <CardDescription className="text-md mt-2">
              Essential features explained and support articles.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      {/* Docs */}
      <Card>
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
          <div className="mt-1 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Docs</CardTitle>
            <CardDescription className="text-md mt-2">
              OnePass Products documentation and guides.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      {/* Learn */}
      <Card>
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
          <div className="mt-1 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Learn</CardTitle>
            <CardDescription className="text-md mt-2">
              Learning resources and tutorials to get started.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </section>
  )
}
