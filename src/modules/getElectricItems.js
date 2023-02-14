import endpoint from './api.js';

const getElectricItems = async () => {
  let electricItems = null;
  try {
    const response = await fetch(endpoint.electricstore);
    if (response.ok) {
      const data = await response.json();
      electricItems = data;
      console.log(electricItems);
    }
  } catch (error) {
    return error.message;
  }
  return electricItems;
};

export default getElectricItems;
