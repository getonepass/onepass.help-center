import React from "react"
import type { JSX } from "react"
import { faCirclesOverlap } from "@fortawesome/pro-light-svg-icons"
import {
  faArrowsToDot,
  faFingerprint,
  faSquareDashed,
  faVault,
  faHexagonNodes,
  faCircle,
  faSquareRing as lightSquareRing,
} from "@fortawesome/pro-regular-svg-icons"

import { faSquareRing } from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SponsorProps {
  icon: JSX.Element
  name: string
  href: string
}

const sponsors: SponsorProps[] = [
  {
    icon: <FontAwesomeIcon icon={faArrowsToDot} className="pr-1" />,
    name: "HUB",
    href: "/docs/hub",
  },
  {
    icon: <FontAwesomeIcon icon={faCirclesOverlap} className="pr-1" />,
    name: "Bridge",
    href: "/docs/bridge",
  },
  {
    icon: <FontAwesomeIcon icon={faCircle} className="pr-1" />,
    name: "LaunchPad",
    href: "/docs/launchpad",
  },
  {
    icon: <FontAwesomeIcon icon={faSquareDashed} className="pr-1" />,
    name: "Pipeline",
    href: "/docs/pipeline",
  },
  {
    icon: <FontAwesomeIcon icon={faVault} className="pr-1" />,
    name: "DataRooms",
    href: "/docs/datarooms",
  },
  {
    icon: <FontAwesomeIcon icon={faFingerprint} className="pr-1" />,
    name: "Credentials",
    href: "/docs/credentials",
  },
  {
    icon: <FontAwesomeIcon icon={faHexagonNodes} className="pr-1" />,
    name: "Bridge Network",
    href: "/docs/bridge-network",
  },
]

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-10">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Explore documentation by product
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div key={name} className="flex items-center gap-1">
            <Button asChild variant="outline">
              <Link href="/login">
                {icon} {name}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
