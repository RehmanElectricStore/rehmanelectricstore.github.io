import endpoint from './api.js';

const getElectricItems = async () => {
  try {
    // Fetch the data from the 'electricstore' endpoint
    const electricstoreResponse = await fetch(endpoint.electricstore, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
    if (!electricstoreResponse.ok) {
      throw new Error(`HTTP error! status: ${electricstoreResponse.status}`);
    }
    const electricstoreData = await electricstoreResponse.json();
    // console.log('Electric Store Items:', electricstoreData);
    return electricstoreData
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default getElectricItems;