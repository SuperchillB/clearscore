const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = ({ env }: { env: any }) => {
  // We get access here to env variables that we passed from package.json file
  // First we grab the correct config based on current environment
  const envConfig = require(`./webpack.${env}.ts`);
  // Then we merge that config with our common config and return the merged config
  const config = merge(commonConfig, envConfig);
  return config;
};
