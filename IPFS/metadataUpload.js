const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const metadataUpload = async (images, { onSuccess, onError }) => {
  try {
    if (!images)
      throw new Error(
        "No IPFS images.json found! Run imageUpload.js first to generate the file."
      );
    let IPFSArray = [];

    images.forEach(({ path }, index) => {
      IPFSArray.push({
        path: `metadata/${(
          "0000000000000000000000000000000000000000000000000000000000000000" +
          index.toString(16)
        ).substr("-64")}.json`,
        content: {
          name: `Moralis Mage #${index}`,
          description: `This is Moralis Mage #${index}`,
          image: path,
          attributes: [
            {
              trait_type: "Strength",
              value: 50,
              max_value: 100,
            },
            {
              trait_type: "Intelligence",
              value: 75,
              max_value: 100,
            },
            {
              trait_type: "Agility",
              value: 90,
              max_value: 100,
            },
          ],
        },
      });
    });

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
      .then(async (res) => {
        const { data } = res || {};
        fs.writeFile(
          `./IPFS/ipfs.json`,
          JSON.stringify(data),
          "utf8",
          (err) => {
            if (err) console.log(err);
            console.log("The file was saved!");
          }
        );
        await onSuccess();
      })
      .catch((e) => {
        onError(e);
      });
  } catch (e) {
    onError(e);
  }
};

module.exports = metadataUpload;
