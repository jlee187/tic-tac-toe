#!/bin/bash

# curl --include --request PATCH http://tic-tac-toe.wdibos.com/games/ID \
#   --header "Content-Type: application/json" \
#   --header "Authorization: Token token=$TOKEN"
#
#   curl "${API}${URL_PATH}"\
#     --include \
#     --request POST \
#     --header "Content-type: application/json" \
#     --header "Authorization: Token token=${TOKEN}" \
#     --data:'{
#     "game": {
#       "id": 1,
#       "cells": ["","","","","","","","",""],
#       "over":false,
#       "player_x": {
#         "id": 1,
#         "email": "and@and.com"
#         },
#       "player_o": {
#         "id": 3,
#         "email":
#         "dna@dna.com"
#       }
#     }
#   }'
