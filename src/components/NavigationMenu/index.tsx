"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { LifeBuoy } from "lucide-react"

const components: {
  title: string
  href: string
  description: string
  icon: string
}[] = [
  {
    title: "Help Center",
    href: "/",
    description: "Find support articles, guides, and learning resources.",
    icon: "help",
  },
  {
    title: "Templates",
    href: "/templates",
    description:
      "Pre-designed templates to help you get started with your project.",
    icon: "templates",
  },
  {
    title: "Lists",
    href: "/lists",
    description:
      "A list is a collection of items that are related to each other in some way.",
    icon: "lists",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "A blog is a regularly updated website or web page.",
    icon: "blog",
  },
  {
    title: "Events andd Webinars",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: "events",
  },
  {
    title: "Customer Stories",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: "stories",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Help Center</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <LifeBuoy className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Help Center
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find support articles, guides, and learning resources.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/articles" title="Support articles">
                Support articles and answers to common questions.
              </ListItem>
              <ListItem href="/guides" title="Guides">
                Step by step guides and essential features explained.
              </ListItem>
              <ListItem href="/docs" title="Products docs">
                OnePass Products documentation.
              </ListItem>
              <ListItem href="/learn" title="Learning resources">
                Additional learning resources and guides.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"
