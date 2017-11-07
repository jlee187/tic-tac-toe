#!/bin/bash

  API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
    URL_PATH="/games/$ID"

    curl "${API}${URL_PATH}"\
      --include \
      --request PATCH \
      --header "Content-type: application/json" \
      --header "Authorization: Token token=${TOKEN}" \
      --data '{
        "game": {
          "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
            },
          "over": "'"${OVER}"'"
          }
        }'
