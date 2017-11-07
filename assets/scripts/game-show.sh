#!/bin/bash

curl --include --request GET http://tic-tac-toe.wdibos.com/games \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
