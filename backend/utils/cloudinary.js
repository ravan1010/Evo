const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.cloudinaryName,
  api_key: process.env.cloudinaryAPIkey,
  api_secret: process.env.cloudinarySecretKey,
});

module.exports = cloudinary;
