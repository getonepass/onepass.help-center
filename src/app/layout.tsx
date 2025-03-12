import { Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"
import type { Metadata } from "next"
import { NavigationMenuDemo } from "@/components/NavigationMenu"
import ThemeToggle from "@/widgets/theme-toggle"
import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"
import logo from "../assets/icon.ico"
import Image from "next/image"
import { Footer } from "@/components/Footer"
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "./_components/ThemeProvider"
import "./styles/index.css"
import "./layout.css"
import "./styles/md.css"

const REPO_URL = "https://github.com/getonepass/onepass.help-center/tree/main"

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL("https://help.getonepass.eu"),
  icons: "/favicon.ico",
} satisfies Metadata

const fontSans = localFont({
  src: "../assets/fonts/AvenirLTStd-Medium.woff",
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

const navbar = (
  <Navbar
    logo={
      <>
        <Image
          width={36}
          height={36}
          src={logo.src}
          className="mr-2"
          alt="Logo"
        />
        <h1 className="text-xl">OnePass Help Center</h1>
      </>
    }
    projectLink="https://getonepass.eu"
    projectIcon={<Globe />}
  >
    <ThemeToggle className="max-md:hidden" />
  </Navbar>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const title = "OnePass Help Center"
  const description =
    "Find product docs, support articles, guides, and learning resources."
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      className="dark"
    >
      <Head
        color={{
          hue: { dark: 0, light: 0 },
          saturation: { dark: 0, light: 0 },
          lightness: {
            light: 40,
            dark: 100,
          },
        }}
        // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="onepass-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            darkMode={true}
            navbar={navbar}
            sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
            pageMap={await getPageMap()}
            docsRepositoryBase={
              REPO_URL
                ? REPO_URL
                : "https://github.com/getonepass/onepass.help-center/tree/main"
            }
            footer={<Footer />}
            // ... Your additional layout options
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
