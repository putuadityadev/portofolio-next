// next.config.mjs
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-reconciler': path.resolve(__dirname, 'node_modules/react-reconciler')
    }
    return config
  },
  basePath: process.env.GITHUB_PAGES ? '/portofolio-next' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/portofolio-next/' : '',
}

export default nextConfig