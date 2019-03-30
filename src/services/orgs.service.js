const moment = require('moment');
const {Org} = require('../models/org');


async function getOrg(orgCode) {
  return await Org.findOne({code: orgCode});
}

module.exports.getOrg = getOrg;