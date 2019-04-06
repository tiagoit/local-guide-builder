const { City } = require('../models/city.model');

let cachedCities;

function get(onlyActive) {
  let activeFilter = onlyActive ? {status: true} : {};
  return City.find(activeFilter);
}

// async function getCityCodesArray(onlyActive) {
//   let activeFilter = onlyActive ? {status: true} : {};
//   let cityCodesArray = await City.find(activeFilter, { code: 1, _id: 0 });
//   console.log('cityCodesArray: ', cityCodesArray);
  
//   return cityCodesArray;
// }

function getByCode(cityCode) {
  return City.findOne({code: cityCode});
}

module.exports.get = get;
// module.exports.getCityCodesArray = getCityCodesArray;
module.exports.getByCode = getByCode;