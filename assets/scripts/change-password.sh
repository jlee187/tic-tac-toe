#!/bin/bash
ID="1535"
TOKEN="BAhJIiU1N2RkZWQyM2EyNTlmYzIyZmNiMmM5ZDQ2NjZjMGRiNgY6BkVG--f79549ccd7cf80803367b2647b6736a49746e416"
OLD="test"
NEW="test2"

curl --include --request PATCH http://tic-tac-toe.wdibos.com/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'
