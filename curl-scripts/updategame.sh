curl "https://tic-tac-toe-api-production.herokuapp.com/games/5f4c14fc69d3ef0017aa0af2" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ba90c423eed541f6b8e71aea0d1d38c7" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo
