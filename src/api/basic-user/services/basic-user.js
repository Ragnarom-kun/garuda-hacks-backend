'use strict';

/**
 * basic-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::basic-user.basic-user');
