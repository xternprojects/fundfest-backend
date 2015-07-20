## Routes
### https://fundfest-backend.herokuapp.com/

### GET /projects #

You can use pagination with the following parameters: `pageSize` and `pageNumber`. For example, `/issues?pageSize=5&pageNumber=2` will retrieve projects 6 through 10. Can also get a particular
project with GET `/projects/[objectId]`.

<i>Example Response:</i>

    [
        {
            "backers": [{
                "amountPledged": 401,
                "name": "Donna Willis"
            }, {
                "amountPledged": 625,
                "name": "Brian Lema"
            }, {
                "amountPledged": 45,
                "name": "Soraya Groves"
            }, {
                "amountPledged": 177,
                "name": "Joshua Romo"
            }],
            "category": "Product and Service Development Projects",
            "endDate": {
                "__type": "Date",
                "iso": "2016-07-08T23:12:00.000Z"
            },
            "estimatedDelivery": {
                "__type": "Date",
                "iso": "2018-05-11T13:20:00.000Z"
            },
            "funded": 2398,
            "owners": ["James Wolford", "Another person"],
            "pledged": 7085,
            "projectDescription": "Dummy Description #1",
            "projectName": "Dummy Project #1",
            "objectId": "4fSAnIjIrG",
            "createdAt": "2015-07-12T20:49:19.456Z",
            "updatedAt": "2015-07-12T20:49:19.456Z"
        },
        ...
    ]

### POST /projects

<i>JSON Payload:</i>

    {
        "backers": [{
            "amountPledged": NUMBER,
            "name": STRING
        }, ...],
        "category": STRING,
        "endDate": STRING,
        "estimatedDelivery": STRING,
        "funded": NUMBER,
        "owners": STRING ARRAY,
        "pledged": NUMBER,
        "projectDescription": STRING,
        "projectName": STRING,
    }

<i>Example Response:</i>

If successfully created or updated: <b>200 OK</b>
    
Returns successfully created project:

    {
        "backers": [{
            "amountPledged": 401,
            "name": "Donna Willis"
        }, {
            "amountPledged": 625,
            "name": "Brian Lema"
        }, {
            "amountPledged": 45,
            "name": "Soraya Groves"
        }, {
            "amountPledged": 177,
            "name": "Joshua Romo"
        }],
        "category": "Product and Service Development Projects",
        "endDate": {
            "__type": "Date",
            "iso": "2016-07-08T23:12:00.000Z"
        },
        "estimatedDelivery": {
            "__type": "Date",
            "iso": "2018-05-11T13:20:00.000Z"
        },
        "funded": 2398,
        "owners": ["James Wolford", "Another person"],
        "pledged": 7085,
        "projectDescription": "Dummy Description #1",
        "projectName": "Dummy Project #1",
        "objectId": "4fSAnIjIrG",
        "createdAt": "2015-07-12T20:49:19.456Z",
        "updatedAt": "2015-07-12T20:49:19.456Z"
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
        "backers": [{
            "amountPledged": 401,
            "name": "Donna Willis"
        }, {
            "amountPledged": 625,
            "name": "Brian Lema"
        }, {
            "amountPledged": 45,
            "name": "Soraya Groves"
        }, {
            "amountPledged": 177,
            "name": "Joshua Romo"
        }],
        "category": "Product and Service Development Projects",
        "endDate": {
            "__type": "Date",
            "iso": "2016-07-08T23:12:00.000Z"
        },
        "estimatedDelivery": {
            "__type": "Date",
            "iso": "2018-05-11T13:20:00.000Z"
        },
        "funded": 2398,
        "owners": ["James Wolford", "Another person"],
        "pledged": 7085,
        "projectDescription": "Dummy Description #1",
        "projectName": "Dummy Project #1",
        "objectId": "4fSAnIjIrG",
        "createdAt": "2015-07-12T20:49:19.456Z",
        "updatedAt": "2015-07-12T20:49:19.456Z"
    }

If failed: <b>Status: 500</b>

    {
        "error": STRING
    }
