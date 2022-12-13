/** @type {import('next').NextConfig} */
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve("./blimeo-wasm"),
        args: "--log-level warn",
      })
    );
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = nextConfig;
