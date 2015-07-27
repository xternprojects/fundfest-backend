## Routes
### https://makeindyserver.herokuapp.com/

### GET /projects #

You can use pagination with the following parameters: `pageSize` and `pageNumber`. For example, `/issues?pageSize=5&pageNumber=2` will retrieve projects 6 through 10. Can also get a particular
project with GET `/projects/[objectId]`.

<i>Example Response:</i>

    [
        {
            "categoryId": "some category id",
            "description": "It's a description",
            "facebookURL": "www.facebook.com/suffandthings",
            "kickstarterURL": "www.kickstarter.com/stuffandthings",
            "location": "Indianapolis, IN",
            "title": "New one",
            "twitterURL": "www.twitter.com/stuffandthings",
            "voteCount": 4,
            "objectId": "UQHt6AumXC",
            "createdAt": "2015-07-22T00:02:04.728Z",
            "updatedAt": "2015-07-27T01:21:48.834Z"
        },
        ...
    ]

### POST /projects

<i>JSON Payload:</i>

    {
        "categoryId": STRING (corresponding to category object),
        "description": STRING,
        "facebookURL": STRING,
        "kickstarterURL": STRING,
        "location": STRING,
        "title": STRING,
        "twitterURL": STRING
    }

<i>Example Response:</i>

If successfully created or updated: <b>200 OK</b>
    
Returns successfully created project:

    {
        "categoryId": "some category id",
        "description": "It's a description",
        "facebookURL": "www.facebook.com/suffandthings",
        "kickstarterURL": "www.kickstarter.com/stuffandthings",
        "location": "Indianapolis, IN",
        "title": "New one",
        "twitterURL": "www.twitter.com/stuffandthings",
        "voteCount": 4,
        "objectId": "UQHt6AumXC",
        "createdAt": "2015-07-22T00:02:04.728Z",
        "updatedAt": "2015-07-27T01:21:48.834Z"
    }

If failed: <b>Status: 500</b>

    {
        "error": STRING
    }


### PUT /projects/[id]

<i>JSON Payload:</i>

    {
        "key_to_change": "new_value",
        "another_key_to_change": "new_value",
        ...
    }

<i>Example Response:</i>

If successfully created or updated: <b>200 OK</b>
    
Returns successfully updated project:

    {
        "categoryId": "some category id",
        "description": "It's a description",
        "facebookURL": "www.facebook.com/suffandthings",
        "kickstarterURL": "www.kickstarter.com/stuffandthings",
        "location": "Indianapolis, IN",
        "title": "New one",
        "twitterURL": "www.twitter.com/stuffandthings",
        "voteCount": 4,
        "objectId": "UQHt6AumXC",
        "createdAt": "2015-07-22T00:02:04.728Z",
        "updatedAt": "2015-07-27T01:21:48.834Z"
    }

If failed: <b>Status: 500</b>

    {
        "error": STRING
    }
