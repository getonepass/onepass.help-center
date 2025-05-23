import { normalizePages } from "nextra/normalize-pages"
import { getPageMap } from "nextra/page-map"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  BookOpenText,
  TvMinimalPlay,
  FileText,
  Folder,
  BookText,
} from "lucide-react"

async function getPosts(path: string): Promise<ServiceProps[]> {
  const { directories } = normalizePages({
    list: await getPageMap(path),
    route: path,
  })
  return directories
    .filter((post) => post.name !== "index")
    .filter((post) => post.type !== "separator") as unknown as ServiceProps[]
}

interface FrontMatter {
  id: string
  icon: string
  title: string
  filePath: string
  timestamp: Date
  intro: string
  description?: string
  asIndexPage?: boolean
}

interface ServiceProps {
  name: string
  route: string
  title: string
  type: string
  frontMatter: FrontMatter
  href: string
  children: Array<{
    title: string
    route: string
  }>
}

interface ArticlesCardsProps {
  route: string
}

export const ArticlesCards = async ({ route }: ArticlesCardsProps) => {
  const posts = await getPosts(route)
  const serviceList = posts
  const index = 1
  return (
    <div className="mt-[60px] grid gap-y-3 md:grid-cols-2 md:gap-6 lg:mt-[60px] lg:grid-cols-3">
      {serviceList.map(
        ({ name, route, title, type, children, frontMatter }: ServiceProps) => (
          <Card key={name} className="h-full flex flex-col">
            <CardHeader className="flex-1">
              <Link href={route}>
                <Button variant="outline" size="icon">
                  {frontMatter?.icon ? (
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                    <div
                      dangerouslySetInnerHTML={{ __html: frontMatter.icon }}
                    />
                  ) : (
                    (() => {
                      if (children?.length) return <BookText />
                      if (frontMatter?.asIndexPage) return <Folder />
                      switch (type) {
                        case "doc":
                          return <FileText /> // book
                        case "page":
                          return <BookText /> // folder
                        case "guide":
                          return <TvMinimalPlay /> // video
                        default:
                          return <FileText /> // article
                      }
                    })()
                  )}
                </Button>
              </Link>
              <div className="mt-3">
                <CardTitle className="text-lg">
                  <Link href={route}>{title}</Link>
                </CardTitle>
                <CardDescription className="text-sm">
                  <span className="mt-2 overflow-hidden text-ellipsis line-clamp-2 min-h-[40px]">
                    {frontMatter?.description}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {children?.slice(0, 5).map((child) => (
                <div key={child.title}>
                  {route ? (
                    <Link href={child.route}>
                      <CardDescription>{child.title}</CardDescription>
                    </Link>
                  ) : (
                    <CardDescription>{child.title}</CardDescription>
                  )}
                </div>
              ))}
              {children && children.length > 5 && (
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                  + {children.length - 5} more articles
                </CardDescription>
              )}
            </CardContent>
          </Card>
        ),
      )}
    </div>
  )
}

export const ArticlesCardsList = async ({ route }: ArticlesCardsProps) => {
  const posts = await getPosts(route)
  const serviceList = posts
  const index = 1
  return (
    <div className="mt-[60px] grid gap-y-3 md:grid-cols-2 md:gap-6 lg:mt-[60px] lg:grid-cols-1">
      {serviceList.map(
        ({ name, route, title, type, children, frontMatter }: ServiceProps) => (
          <Link key={route} href={route}>
            <Card>
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <Button variant="outline" size="icon">
                  {frontMatter?.icon ||
                    (() => {
                      if (children?.length) return <BookText />
                      if (frontMatter?.asIndexPage) return <Folder />
                      switch (type) {
                        case "doc":
                          return <FileText /> // book
                        case "page":
                          return <BookText /> // folder
                        case "guide":
                          return <TvMinimalPlay /> // video
                        default:
                          return <FileText /> // article
                      }
                    })()}
                </Button>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {frontMatter?.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ),
      )}
    </div>
  )
}
