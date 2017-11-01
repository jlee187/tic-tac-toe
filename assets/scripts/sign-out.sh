#!/bin/bash
ID="1535"
TOKEN="BAhJIiVlMWIwMDNlYTY0MTkwN2I3MzVmY2JiZWQwNzAxMmZlZgY6BkVG--7ed30aaf0ad37c147aa6b142305c0f21309500fe"

curl --include --request DELETE http://tic-tac-toe.wdibos.com/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
