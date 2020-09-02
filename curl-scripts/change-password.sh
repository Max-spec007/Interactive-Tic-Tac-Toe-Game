
curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=ba90c423eed541f6b8e71aea0d1d38c7" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
