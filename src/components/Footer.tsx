import Image from "next/image"
import Link from "next/link"
import logo from "../assets/icon.ico"

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-4">
          <Link href="/" className="font-bold text-xl flex">
            <Image
              width={32}
              height={32}
              src={logo.src}
              className="mr-2"
              alt="Logo"
            />
            <h1>OnePass</h1>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Social</h3>
          <div>
            <a
              href="https://linkedin.com/company/getonepass"
              className="opacity-60 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/getonepass"
              className="opacity-60 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div>
            <a
              href="https://x.com/OnePass_"
              className="opacity-60 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a href="/guides" className="opacity-60 hover:opacity-100">
              Guides
            </a>
          </div>

          <div>
            <a href="/articles" className="opacity-60 hover:opacity-100">
              Support articles
            </a>
          </div>

          <div>
            <a href="/learn" className="opacity-60 hover:opacity-100">
              Learn
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
