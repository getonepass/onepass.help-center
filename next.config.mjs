import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  //contentDirBasePath: '/docs'
})

const isProduction = process.env.NODE_ENV === "production"
const repositoryName = "onepass.help-center"
const assetPrefix = isProduction ? `/${repositoryName}` : "" // Just if deployed as org.github.io/repo

export default withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  cleanDistDir: true,
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  // assetPrefix: assetPrefix,
  // basePath: assetPrefix,
  // Export only when building in GitHub Actions
  output: process.env.GITHUB_ACTION ? 'export' : undefined,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    unoptimized: true
  },
})
