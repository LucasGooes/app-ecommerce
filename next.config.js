const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co", protocol: "https" },
      { hostname: "fakeimg.pl" },
    ],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/app/global/sass/components"),
      path.join(__dirname, "src/app/global/sass/base"),
    ],
  },
};

module.exports = nextConfig;
