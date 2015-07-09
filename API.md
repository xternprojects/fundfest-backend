## Routes
### https://fundfest-backend.herokuapp.com/
1. *GET* **/**
    <br> This is the home page of the application. We need to decide what page to show when user hits this.
2. *GET*  **/projects**
    <br>Will get all the projects in the database
    <br>*ARGUMENTS*: None
3. *POST* **/project**
    <br>Will put a new Project Object in the database
    <br>*ARGUMENTS:*<br>
        1. "projectID": 			"will be decided by the server"<br>
        2. "projectName": 			"projectName",<br>
        3. "projectDescription": 	"A description of the project",<br>
        4. "owners": 				"Array of owners of the project",<br>
        5. "funded": 				"total current funding",<br>
        6. "pledged": 				"total pledged funding in $",<br>
        7. "backers": 				"array of dictionaries of the form -> { "userID": "<userID>", "amountPledged": <amount pledged as integer } >",<br>
        8. "endDate": 				"last date of pledging money to this project",<br>
        9. "estimatedDelivery": 	"delivery date of the project, if funded in whole"<br>
4. *PUT* **/project**
    <br>Will update an existing project. Only updates the following fields:
    <br>*ARGUMENTS*:<br>
        1. "projectID":             "ID of the existing project in DB"<br>
        2. "projectName":           "updated Name of the project"<br>
        3. "projectDescription":    "new project description"<br>
        4. "owners":                "updated array of new set of owners. send all the owners again, not just the new one"<br>
        5. "pledged":               "new pledged amount for this project"<br>
        NOTE: If you do not send any of these arguments, its value will not change in the database
<br><br>


**NOTE:**
*all arguments must be sent as a JSON object in body of the request*
