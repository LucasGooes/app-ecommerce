const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/app/global/sass/components"),
      path.join(__dirname, "src/app/global/sass/base"),
    ],
  },
};

module.exports = nextConfig;
