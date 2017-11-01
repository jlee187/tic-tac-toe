#!/bin/bash

# doesn't work!!!!!!!!!!!!!!!!!!!!!

TOKEN="BAhJIiU5Y2IwOGJmNTBmZTUxZDYzODA5MWY3OGNlYjUzODIxZAY6BkVG--e4ababa6597082209d931480ad71024299edb0ae"

curl --include --request PATCH http://tic-tac-toe.wdibos.com/games/ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
