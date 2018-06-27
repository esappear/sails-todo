/**
 * Module dependencies
 */

// ...


/**
 * tag/create.js
 *
 * Create tag.
 */
module.exports = async function create(req, res) {

  var tag = await Tag.findOne({
    name: req.body.name,
  });
  if (!tag) {
    tag = await Tag.create(req.body).fetch();
  }
  return res.json(tag);

};