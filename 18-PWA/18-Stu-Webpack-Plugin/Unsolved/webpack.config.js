const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist/",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [new WebpackPwaManifest({
      name: "Images App",
      short_name: "Images App",
      filename: 'manifest.json',
      inject: false,
      fingerprints: false,
      icons: [
        {
          src: "public/assets/images/icons/icon-72x72.png",
          size: "72x72"
        },
        {
          src: "public/assets/images/icons/icon-96x96.png",
          size: "96x96"
        },
        {
          src: "public/assets/images/icons/icon-128x128.png",
          size: "128x128"
        },
        {
          src: "public/assets/images/icons/icon-144x144.png",
          size: "144x144"
        },
        {
          src: "public/assets/images/icons/icon-152x152.png",
          size: "152x152"
        },
        {
          src: "public/assets/images/icons/icon-192x192.png",
          size: "192x192"
        },
        {
          src: "public/assets/images/icons/icon-384x384.png",
          size: "384x384"
        },
        {
          src: "public/assets/images/icons/icon-512x512.png",
          size: "512x512"
        }
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone"
  })]
};

module.exports = config;
