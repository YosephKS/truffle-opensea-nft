const fs = require('fs');
const axios = require('axios');
const metadataFolder = '../metadata/';
const images = require('../metadata/images.json');
require('dotenv').config();

try {
   if (!process.env.MORALIS_REST_API_KEY) throw new Error('No API Key found!');
   if (!images) throw new Error('No IPFS images.json found! Run imageUpload.js first to generate the file.');
   let IPFSArray = [];

   images.forEach(({ path }, index) => {
      IPFSArray.push({
         path: `metadata/${
            ("0000000000000000000000000000000000000000000000000000000000000000" + index.toString(16)).substr("-64")
         }.json`,
         content: {
            name: `Moralis Mage #${index}`,
            description: `This is Moralis Mage #${index}`,
            image: path,
            attributes: [
               {
                  trait_types: "Strength",
                  value: 100
               },
               {
                  trait_types: "Intelligence",
                  value: 100
               },
               {
                  trait_types: "Agility",
                  value: 100
               }
            ]
         }
      });
   });

   axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
      IPFSArray,
      {
         headers: {
            "X-API-KEY": process.env.MORALIS_REST_API_KEY,
            "Content-Type": "application/json",
            "accept": "application/json"
         }
      }
   ).then((res) => {
      const { data } = res || {};
      fs.writeFile(
         `${metadataFolder}metadata.json`,
         JSON.stringify(data),
         "utf8",
         (err) => {
            if(err) console.log(err);
            console.log("The file was saved!");
         }
      );                 
   }).catch((e) => {
      console.log(e);
   });
} catch(e) {
   console.error(e);
}