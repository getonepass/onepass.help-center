import type { MetaRecord } from "nextra"

export default {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      timestamp: false,
      layout: "full",
      toc: false,
      typesetting: "default",
      sidebar: false,
      breadcrumb: false,
    },
  },
  articles: {
    title: "Articles",
    type: "page",
    display: "hidden",
  },
  guides: {
    title: "Guides",
    type: "page",
  },
  docs: {
    title: "Docs",
    type: "page",
    display: "hidden",
  },
  learn: {
    title: "Learn",
    type: "menu",
    items: {
      "decentralized-identity": {
        title: "Decentralized Identity",
        href: "/learn/decentralized-identity",
      },
    },
  },
  legal: {
    title: "Legal",
    type: "page",
    display: "hidden",
  },
} satisfies MetaRecord;
