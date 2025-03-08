import type { MetaRecord } from 'nextra'

export default {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      timestamp: false,
      layout: "full",
      toc: false,
      typesetting: "default",
    },
  },
  reference: {
    title: "Reference",
    type: "page",
  },
  articles: {
    title: "Articles",
    type: "page",
    href: "/reference/articles",
  },
  docs: {
    title: "Docs",
    type: "page",
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
} satisfies MetaRecord;
