/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac|aac)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/media/",
          publicPath: "/_next/static/media/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
