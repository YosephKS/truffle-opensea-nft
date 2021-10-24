const fs = require('fs');
const axios = require('axios');
const imagesFolder = '../images/';
const metadataFolder = '../metadata/';
require('dotenv').config();

console.log(process.ENV);

try {
   let IPFSArray = [];
   let promises = [];
   fs.readdir(imagesFolder, (dirErr, files) => {
      if (dirErr) throw rej();
      files.forEach(file => {
         promises.push(new Promise((res, rej) => {
            fs.readFile(`${imagesFolder}${file}`, (fileErr, data) => {
               if (fileErr) throw rej();
               IPFSArray.push({
                  path: `images/${file}`,
                  content: data.toString('base64')
               });
               res();
            });
         }));
      });

      Promise.all(promises).then(() => {
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
               `${metadataFolder}images.json`,
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
      })
   });
} catch(e) {
   console.error(e);
}