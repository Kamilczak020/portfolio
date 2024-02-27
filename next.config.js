/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental: {
    turbo: {
      rules: {
        ".svg": ["@svgr/webpack"],
      },
    },
  },
};

module.exports = nextConfig
