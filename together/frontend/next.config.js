/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/order
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const generateBuildId = async () => {
  if (process.env.BUILD_ID) {
    return process.env.BUILD_ID;
  } else {
    return `${new Date().getTime()}`;
  }
};

module.exports = (phase, { _defaultConfig }) => {
  const commonConfigs = {
    compiler: {
      styledComponents: {
        // Enabled by default in development, disabled in production to reduce file size,
        // setting this will override the default for all environments.
        displayName: true,
        // Enabled by default.
        ssr: true,
      },
    },
    reactStrictMode: false,
    devIndicators: {
      buildActivity: false,
    },
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/explore',
        },
        {
          source: '/api/graphql',
          destination: process.env.HASURA_GRAPHQL_URL
        }
      ];
    },
    webpack: (
      config,
      { _buildId, _dev, _isServer, _defaultLoaders, _nextRuntime, _webpack }
    ) => {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader",
      });
      config.module.rules.push({
        test: /\.svg$/,
        use: "@svgr/webpack",
      });

      // Important: return the modified config
      return config;
    },
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /* development only config options here */
    return {
      ...commonConfigs,
    };
  }

  /* config options for all phases except development here */
  return {
    ...commonConfigs,
    distDir: "build",
    generateBuildId: generateBuildId,
  };
};
