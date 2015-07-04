## Routes
### https://fundfest-backend.herokuapp.com/
1. *GET* **/**
    <br> This is the home page of the application. We need to decide what page to show when user hits this.
2. *GET*  **/get_all_projects**
    <br>Will get all the projects in the database
    <br>*ARGUMENTS*: None
3. *POST* **/new_project**
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
4. *POST* **/add_owner**
    <br> Will add a owner to the project
    <br>*ARGUMENTS:*<br>
        1. "projectID":             "the unique projectID",<br>
        2. "ownerName":             "the new owner name",<br>
5. *POST* **/change_project_name**
    <br> Will change the name of the project
    <br>*ARGUMENTS:*<br>
        1. "projectID":             "the unique projectID",<br>
        2. "newName":               "new project name"<br>
6. *POST* **/change_project_desc**
    <br> Will change the description of the project:
    <br>*ARGUMENTS:*<br>
        1. "projectID":             "the unique projectID",<br>
        2. "newDescription":        "the new desc"<br>
7. *POST* **/add_funding**
    <br> Will add funding amount to the current amount
   <br>*ARGUMENTS:*<br>
        1. "projectID":             "the unique projectID",<br>
        2. "addFunds":              "will add this much funding to the project"<br>
8. *POST* **/add_backer**
    <br> Will add a new backer to this project
    <br>*ARGUMENTS:*<br>
        1. "projectID":             "the unique projectID",<br>
        2. "amountPledged":         "this user donated this much amount to this project"<br>
        3. "userID":                "unique userID"<br>
<br><br>
**NOTE:**
*all arguments must be sent as a JSON object in body of the request*
