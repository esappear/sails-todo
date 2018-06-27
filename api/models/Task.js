/**
 * Task.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    title: {
      type: 'string',
      required: true,
    },
    desc: {
      type: 'string',
    },
    created_by: {
      model: 'user',
      required: true,
    },
    completed: {
      type: 'boolean',
      defaultsTo: false,
    },
    completed_at: {
      type: 'number',
      allowNull: true,
    },
    deadline: {
      type: 'number',
      allowNull: true,
    },
    notified_at: {
      type: 'number',
      allowNull: true,
    },
    check_items: {
      collection: 'CheckItem',
      via: 'task',
    },
    tags: {
      collection: 'tag',
      via: 'tasks',
    },

  },

};

