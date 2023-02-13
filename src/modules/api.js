const baseUrl = `https://cdn.contentful.com/spaces/20wsojjwdirk/environments/master/entries/`;
// const baseUrl2 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementID}`;

const endpoint = {
  electricstore: `${baseUrl}?select=&content_type=electricStoreItems`,
  stitchingmaterial: `${baseUrl}?select=&content_type=stitchingMaterial`,
};

export default endpoint;