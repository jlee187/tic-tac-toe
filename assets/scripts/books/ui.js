'use strict'

const onSuccess = function (data) {
  if (data.credentials) {
    console.log(data.credentials)
  } else {
    console.table(data.credentials)
  }
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
