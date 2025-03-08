import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { BookOpenText, TvMinimalPlay } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
interface ServiceProps {
  title: string;
  description: JSX.Element | string;
  icon: JSX.Element | number;
  href: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "What Are Verifiable Credentials (VCs)?",
    description: (
      <>
        This guide explains what verifiable credentials are, how they work, and
        their role in enabling secure and verifiable identity transactions.
      </>
    ),
    icon: 1,
    href: "/learn/decentralized-identity/core-concepts-&-standards/what-are-verifiable-credentials",
  },
  {
    title: "Choosing a SSI Holder Wallet",
    description: (
      <>
        A guide to help you choose the right SSI compatible wallet for your needs.
      </>
    ),
    icon: 2,
    href: "/learn/decentralized-identity/getting-started-onepass-credentials/for-holders/choosing-wallet",
  },
  {
    title: "Collecting a Credential",
    description: (
      <>
        Learn how to collect a verifiable credential from a trusted issuer.
      </>
    ),
    icon: 3,
    href: "/learn/decentralized-identity/getting-started-onepass-credentials/for-holders/collecting-credential",
  },
  {
    title: "Presenting a Credential",
    description: (
      <>
        Learn how to present a verifiable credential and prove your identity in
        OnePass Bridge.
      </>
    ),
    icon: 4,
    href: "/learn/decentralized-identity/getting-started-onepass-credentials/for-holders/collecting-credential",
  },
  {
    title: "How to verify the identity of your Legal Entity",
    description: (
      <>
        An interactive guide to help you verify the identity of your legal
        entity. <Badge variant="outline">Step by step guide</Badge>
      </>
    ),
    icon: <TvMinimalPlay />,
    href: "/learn/decentralized-identity",
  },
  {
    title: "Complete Guide to Decentralized Identity",
    description: (
      <>
        Go deeper into decentralized identity and verifiable credentials.{" "}
        <Badge variant="outline">Recommended</Badge>
      </>
    ),
    icon: <BookOpenText />,
    href: "/learn/decentralized-identity",
  },
];

export const Credentials = () => {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Get started{" "}
            </span>
            with Verifiable Credentials
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Everything you need to know about Verifiable Credentials
          </p>

          <p className="text-muted-foreground text mt-4 mb-8 ">
            Want to go deeper into decentralized identity and verifiable
            credentials?
            <br />
            Check out our{" "}
            <Link
              href="/learn/decentralized-identity"
              className="font-bold text-gray-700 dark:text-gray-400 underline"
            >
              Guide to Decentralized Identity
            </Link>
            .
          </p>
        </div>

        <div className="">
          <div className="flex flex-col gap-8">
            {serviceList.map(
              ({ icon, href, title, description }: ServiceProps) => (
                <a key={title} href={href}>
                  <Card>
                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                      <Button variant="outline" size="icon">
                        {icon}
                      </Button>
                      <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-md mt-2">
                          {description} 
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
