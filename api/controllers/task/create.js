/**
 * Module dependencies
 */

// ...


/**
 * task/create.js
 *
 * Create task.
 */
module.exports = async function create(req, res) {
  const {
    body
  } = req;
  const tags = [];
  if (body.tags && body.tags) {
    for(let item of body.tags) {
      let tag = await sails.helpers.createTag(item);
      tags.push(tag.id);
    }
  }
  const task = await Task.create({
    ...body,
    tags,
  }).fetch();
  return res.json(task);
};