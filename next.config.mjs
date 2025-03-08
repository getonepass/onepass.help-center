import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  //contentDirBasePath: '/docs'
})

const isProduction = process.env.NODE_ENV === "production"
const repositoryName = "onepass.docs"
const assetPrefix = isProduction ? `/${repositoryName}/` : ""

export default withNextra({
  eslint: {
    ignoreDuringBuilds: false,
  },
  cleanDistDir: true,
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  assetPrefix: assetPrefix,
  // basePath: assetPrefix,
  // Export only when building in GitHub Actions
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    unoptimized: true
  }
})
