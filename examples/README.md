This directory will have all of examples to API calls to be made by the client. For every API call, that a client can make, there will be a simple CURl example that shows what type of data the server takes as parameters, and what's the format of the data that is returned by it. These scripts can also be used for testing while development. 

We will be making REST API, so it should be really easy to integrate with client side code. The API calls will be based of issues (as posted on Github), and the user stories

Feel free to reach out to us if there is some more functionality you would like to see here.


--------- EXAMPLE ------------


#!/bin/bash

# call curl with the post request
DATA="{ parameter01 : value01, parameter02 : value02 }"

curl -H "Content-Type: application/json" -b cookiejar --data @ex.json http://<server-address>:<port>/<route-name>

echo
