const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  output: "standalone",
  // reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Only run this configuration on the client side
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            // sync + async chunks
            chunks: "all",
            // import file path containing node_modules
            test: /node_modules/,
            // name of the chunk
            name: "vendor",
          },
        },
      };
    }

    // enable top level await
    config.experiments = { ...config.experiments, topLevelAwait: true };

    // Minify JavaScript
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            // Add any necessary terser options here
          },
        })
      );
    }

    // Add your additional webpack configuration here if needed

    return config;
  },
};
