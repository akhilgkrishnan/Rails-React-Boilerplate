const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { globalMutableWebpackConfig, merge } = require("shakapacker");

const aliasConfig = require("./alias");

let customConfig = {
  plugins: [new ForkTSCheckerWebpackPlugin()],
};

const resolveOptions = {
  resolve: {
    extensions: [
      ".css",
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".png",
      ".svg",
      ".gif",
      ".jpeg",
      ".jpg",
      ".woff",
      ".woff2",
      ".ico",
      ".scss",
    ],
  },
};

customConfig = merge({}, customConfig, resolveOptions, aliasConfig);

module.exports = merge(globalMutableWebpackConfig, customConfig);
