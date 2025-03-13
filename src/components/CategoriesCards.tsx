import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { BookText, BookOpenText, GraduationCap, Signpost } from "lucide-react"
import Link from "next/link"

export const CategoriesCards = () => {
  return (
    <section className="container w-[90cqw] grid lg:grid-cols-2 gap-5">
      {/* Guides */}
      <Link href="/guides">
        <Card>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
            <div>
              <Signpost />
            </div>
            <div>
              <CardTitle>Guides</CardTitle>
              <CardDescription className="text-md mt-2">
                Step by step guides and essential features explained.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </Link>
      {/* Learn */}
      <Link href="/learn/decentralized-identity">
        <Card>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
            <div>
              <GraduationCap />
            </div>
            <div>
              <CardTitle>Learn</CardTitle>
              <CardDescription className="text-md mt-2">
                Additional learning resources and guides.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </Link>
    </section>
  )
}
