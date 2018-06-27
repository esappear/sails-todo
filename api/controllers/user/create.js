/**
 * Module dependencies
 */

// ...


/**
 * user/create.js
 *
 * Create user.
 */
module.exports = async function create(req, res) {

  const user = await User.create(req.body)
    .fetch()
    .intercept('E_UNIQUE', (err) => {
      return 'phoneAlreadyInUse';
    })
    .intercept('UsageError', (err) => {
      return 'invalid';
    });
  return res.json(user);

};