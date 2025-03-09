import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { BookText, BookOpenText, GraduationCap } from "lucide-react"
import Link from "next/link"

export const CategoriesCards = () => {
  return (
    <section className="container w-[80cqw] grid lg:grid-cols-3 gap-5">
      {/* Reference */}
      <Link href="/reference">
        <Card>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
            <div>
              <BookText />
            </div>
            <div>
              <CardTitle>Reference</CardTitle>
              <CardDescription className="text-md mt-2">
                Essential features explained and support articles.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </Link>
      {/* Docs */}
      <Link href="/docs">
        <Card>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
            <div>
              <BookOpenText />
            </div>
            <div>
              <CardTitle>Docs</CardTitle>
              <CardDescription className="text-md mt-2">
                OnePass Products documentation and guides.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </Link>
      {/* Learn */}
      <Link href="/learn">
        <Card>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-3">
            <div>
              <GraduationCap />
            </div>
            <div>
              <CardTitle>Learn</CardTitle>
              <CardDescription className="text-md mt-2">
                Learning resources and tutorials to get started.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </Link>
    </section>
  )
}
