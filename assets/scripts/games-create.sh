#!/bin/bash
TOKEN="BAhJIiU2ZWVjZDBkZDc0ZWJhZmJmZDY2MzJmMTc1MTlhOTlhNgY6BkVG--ba46366d97fb5537240e3f976f1d26db6a4a4c4d"

curl --include --request POST http://tic-tac-toe.wdibos.com/games \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
