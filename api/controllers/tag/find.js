/**
 * Module dependencies
 */

// ...


/**
 * tag/find.js
 *
 * Find tag.
 */
module.exports = async function find(req, res) {

  const tags = await Tag.find(req.params).omit(['tasks']);
  return res.json(tags);

};
