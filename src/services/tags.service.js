const { Tag } = require('../models/tag.model');

async function getTag(tagCode) {
  return await Event.findOne({code: tagCode});
}

async function getTags() {
  return await Tag.find().sort('title');
}

module.exports.getTag = getTag;
module.exports.getTags = getTags;