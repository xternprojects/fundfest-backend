## Routes
### https://fundfest-backend.herokuapp.com/
1. *POST*  **/get_all_projects**
    <br>Will get all the projects in the database
    <br>arguments: None
2. *POST* **/new_project**
    <br>Will put a new Project Object in the database
    <br>arguments:<br>
        1. "projectID": 			"will be decided by the server"<br>
        2. "projectName": 			"projectName",<br>
        3. "projectDescription": 	"A description of the project",<br>
        4. "owners": 				"Array of owners of the project",<br>
        5. "funded": 				"total current funding",<br>
        6. "pledged": 				"total pledged funding in $",<br>
        7. "backers": 				"array of dictionaries of the form -> { "userID": "<userID>", "amountPledged": <amount pledged as integer } >",<br>
        8. "endDate": 				"last date of pledging money to this project",<br>
        9. "estimatedDelivery": 	"delivery date of the project, if funded in whole"<br>
    **NOTE:** <br><br>
    *the arguments must be sent as a JSON object in body of the request*
