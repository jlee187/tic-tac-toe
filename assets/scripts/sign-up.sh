#!/bin/bash

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

# curl --include --request POST "http://tic-tac-toe.wdibos.com${ID}" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "another@example.email",
#       "password": "an example password",
#       "password_confirmation": "an example password"
#     }
#   }'
