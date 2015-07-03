#!/bin/bash

# call curl with the post request

curl -X POST \
 -H "Content-Type: application/json" \
 --data '{"amountPledged": 5, "userID": "Deep Randhawa", "projectID": "mvEBFIva0E"}' \
 http://localhost:5000/get_all_projects

echo
