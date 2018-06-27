module.exports = {


  friendlyName: 'Create tag',


  description: '',


  inputs: {
    name: {
      type: 'string',
      example: 'Ami',
      description: 'The name of the tag.',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var tag = await Tag.findOne({
      name: inputs.name,
    });
    if (!tag) {
      tag = await Tag.create(inputs).fetch();
    }
    return exits.success(tag);
  }


};

