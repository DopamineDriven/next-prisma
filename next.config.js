const { withSuperjson } = require("next-superjson");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

const withRpc = require("next-rpc")();

require("eslint-config-next/parser");

const {
  env: { ANALYZE }
} = process;

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/

module.exports = withSuperjson()({
  webpack(config, options) {
    if (ANALYZE) {
      config.plugins.push(new withRpc("stats.txt"));
    }
    // config.context = join(process.cwd(), "./");
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }]
    });
    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ["graphql-let/schema/loader"]
    });
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader"
    });
    return config;
  },
  async headers() {
    return [
      {
        source: "/fonts/inter-var-latin.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        source: "/fonts/inter-var-latin.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  },
  swcMinify: true,
  webpack5: true,
  sourceMaps: {
    productionBrowserSourceMaps: true
  },
  experimental: {
    outputStandalone: true
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "avatars.githubusercontent.com",
      "secure.gravatar.com",
      "en.gravatar.com",
      "c.tenor.com",
      "unsplash.com",
      "images.unsplash.com",
      "tailwindui.com",
      "avatars.githubusercontent.com",
      "gravatar.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "cortinahealth.com",
      "wpengine.com",
      "placeimage.com",
      "placeimg.com",
      "getcortina.com",
      "www.getcortina.com",
      "cortinaai.wpengine.com",
      "cortinacare.com",
      "github.githubassets.com",
      "api.github.com",
      "dev-to-uploads.s3.amazonaws.com",
      "repository-images.githubusercontent.com",
      "i0.wp.com",
      "i1.wp.com",
      "i2.wp.com",
      "www.facebook.com"
    ]
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "andrewross.com",
        defaultLocale: "en-US"
      }
    ]
  }
});

console.log("[next.config.js]: ", JSON.stringify(module.exports, null, 2));

/**
// Fixes npm packages that depend on `fs` module
config.node = {
  fs: 'empty',
}
 */
