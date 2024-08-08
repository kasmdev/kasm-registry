/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Whitecliffe SoIT',
    description: 'Student Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasmdev.github.io/kasm-registry/',
    contactUrl: 'https://whitecliffe.ac.nz/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
