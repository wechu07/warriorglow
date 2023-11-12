const ImageKit = require("imagekit");
require("dotenv").config()

const imagekit = new ImageKit({
  publicKey: "IMAGEKIT_PUBLIC_KEY",
  privateKey: "IMAGEKIT_PRIVATE_KEY",
  urlEndpoint: "IMAGEKIT_ENDPOINT",
});

module.exports = imagekit;