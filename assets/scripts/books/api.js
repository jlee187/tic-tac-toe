// 'use strict'
//
// const config = require('../config.js')
//
// const signUp = function (data) {
//   return $.ajax({
//     url: config.apiOrigin.development + '/sign-up',
//     method: 'POST',
//     contentType: 'application/json',
//     data
//   })
// }
//
// module.exports = {
//   signUp
// }
//
'use strict'

const config = require('../config')

const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
    // shortcut for data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
    // shortcut for data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // shortcut for data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const index = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games[?over=]',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (game) {
  let data = {
    game: {
      cell: {
        index: store.game.cells.index,
        value: store.game.cells.value
      },
      over: false
    }
  }
  data = JSON.stringify(data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

// const signUp = (data) =>
//   new Promise(function (resolve, reject) {
//     if (Math.random() > 0.5) {
//       resolve('in signUp')
//     } else {
//       const error = new Error('Random')
//       error.data = data
//       reject(error)
//     }
//   })

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  // index,
  showGame,
  update
}
