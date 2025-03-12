import { Search } from "nextra/components"

export const Hero = () => {
  return (
    <section className="container w-[90cqw] md:w-[70cqw] grid lg:grid-cols-1 place-items-center pt-20 md:pt-20 pb-10 md:pb-10 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h2 className="text-[20px]/20 font-bold">OnePass Help Center</h2>
          <h1 className="inline">What can we help you find?</h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Find product docs, support articles, guides, and learning resources.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:w-10/12 md:flex z-2">
          <Search
            className="md:scale-150 origin-left"
            placeholder="Search for a topic or question"
          />
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4"></div>
      </div>
    </section>
  );
}
