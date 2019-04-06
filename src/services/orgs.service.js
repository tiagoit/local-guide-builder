const {Org} = require('../models/org.model');

function get() {
  return Org.find();
}

function getByCode(orgCode) {
  return Org.findOne({code: orgCode});
}

module.exports.get = get;
module.exports.getByCode = getByCode;