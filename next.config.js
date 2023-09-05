/** @type {import('next').NextConfig} */

/*const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCss(withPurgeCss());


*/
/*const nextConfig = {}

module.exports = nextConfig

/*

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {}

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}

*/

const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(nextConfig)