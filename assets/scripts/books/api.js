'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigins.development + '/sign-up',
    method: 'POST',
    contentType: 'application/json'
  })
}

module.exports = {
  index
}
