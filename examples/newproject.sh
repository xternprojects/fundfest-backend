#!/bin/bash

# call curl with the post request

curl -X POST \
 -H "Content-Type: application/json" \
 --data @data.json \
 http://localhost:5000/new_project

echo
