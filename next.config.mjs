import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  //contentDirBasePath: '/docs'
})

export default withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  cleanDistDir: true,
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  // basePath: "/help",
  // Export only when building in GitHub Actions
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    unoptimized: true
  }
})
