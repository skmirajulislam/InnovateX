import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/f/**',
      },
    ],
  },
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  // Add CORS configuration to handle UTFS requests properly
  async rewrites() {
    return [
      {
        source: '/api/utfs/:path*',
        destination: 'https://utfs.io/:path*',
      },
    ];
  },

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    interface FileLoaderRule {
      test?: RegExp;
      issuer?: object;
      resourceQuery?: {
        not?: RegExp[];
      };
      exclude?: RegExp;
    }

    const fileLoaderRule: FileLoaderRule | undefined = config.module.rules.find(
      (rule: FileLoaderRule) => rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] }, // Exclude *.svg?url
          use: ["@svgr/webpack"],
        }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;