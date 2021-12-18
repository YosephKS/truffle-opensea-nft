const fs = require("fs");
const axios = require("axios");
const imagesFolder = "./images/";
require("dotenv").config();

const imageUpload = async ({ onSuccess, onError }) => {
  try {
    let IPFSArray = [];
    let promises = [];
    fs.readdir(imagesFolder, (dirErr, files) => {
      if (dirErr) throw dirErr;
      files.forEach((file) => {
        promises.push(
          new Promise((res, rej) => {
            fs.readFile(`${imagesFolder}${file}`, (fileErr, data) => {
              if (fileErr) throw rej();
              IPFSArray.push({
                path: `images/${file}`,
                content: data.toString("base64"),
              });
              res();
            });
          })
        );
      });

      Promise.all(promises).then(() => {
        axios
          .post(
            "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
            IPFSArray,
            {
              headers: {
                "X-API-KEY": process.env.MORALIS_REST_API_KEY,
                "Content-Type": "application/json",
                accept: "application/json",
              },
            }
          )
          .then((res) => {
            const { data } = res || {};
            onSuccess(data);
          })
          .catch((e) => {
            onError(e);
          });
      });
    });
  } catch (e) {
    onError(e);
  }
};

module.exports = imageUpload;
