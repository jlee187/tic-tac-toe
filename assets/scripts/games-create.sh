#!/bin/bash
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
  URL_PATH="/games/"

  curl "${API}${URL_PATH}"\
    --include \
    --request PATCH \
    --header "Content-type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "game": {
        "id": ,
        "cells": ["","","","","","","","",""],
        "over": ,
        "player_x": {
          "id": "'"${ID}"'",
          "email": "'"${EMAIL}"'"
        },
        "player_o": null
      }
    }'

  echo
