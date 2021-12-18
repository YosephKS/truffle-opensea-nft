const imageUpload = require("./imageUpload");
const metadataUpload = require("./metadataUpload");

const IPFSIndex = async () => {
  if (!process.env.MORALIS_REST_API_KEY) throw new Error("No API Key found!");
  try {
    await imageUpload({
      onSuccess: (result) =>
        metadataUpload(result, {
          onSuccess: () => {},
          onError: console.log,
        }),
      onError: console.error,
    });
  } catch (e) {
    console.error(e);
  }
};

IPFSIndex();
