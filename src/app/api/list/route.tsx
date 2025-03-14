
import type { NextRequest } from "next/server"
import { normalizePages } from "nextra/normalize-pages";
import { getPageMap } from "nextra/page-map";

interface ServiceProps {
  name: string;
  title: string;
  route: string;
  type: string;
  frontMatter?: Record<string, any>;
  // Add any other properties that you need
}


async function getPosts(path: string): Promise<ServiceProps[]> {
  const { directories } = normalizePages({
    list: await getPageMap(path),
    route: path,
  })
  return directories
    .filter((post) => post.name !== "index")
    .filter((post) => post.type !== "separator") as unknown as ServiceProps[]
}


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const route = searchParams.get("route") || "";
  const posts = await getPosts(route);


  return new Response(JSON.stringify(posts), {
    headers: { "content-type": "application/json" },
  });
}
