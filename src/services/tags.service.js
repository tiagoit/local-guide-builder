const { Tag } = require('../models/tag.model');

function get() {
  return Tag.find().sort('title');
}

function getByCode(tagCode) {
  return Event.findOne({code: tagCode});
}

module.exports.get = get;
module.exports.getByCode = getByCode;