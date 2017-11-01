#!/bin/bash
TOKEN="BAhJIiU4YWQyZTVlMTAwZWM2M2EzNThiYmQzM2IxNzA2MjU0MgY6BkVG--8a339fde3fb04f3108f28d3abc543123da3146ad"

curl --include --request GET http://tic-tac-toe.wdibos.com/games \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
