'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigin.development + '/sign-up',
    method: 'POST',
    contentType: 'application/json'
  })
}

module.exports = {
  index
}
