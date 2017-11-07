#!/bin/bash
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
  URL_PATH="/games[?over=]"

  curl "${API}${URL_PATH}"\
    --include \
    --request GET \
    --header "Content-type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "game": {
        "id": 3,
        "cells": ["","","","","","","","",""],
        "over": false,
        "player_x": {
          "id": ,
          "email": "test10@"
        },
        "player_o": null
      }
    }'

  echo
