# Microbe Address Book Assessment
 
* Author: CavanCook
* Completion Date: Oct 5 2020
 
## Overview
 
   To build the backend for a simple address book using Node.js, Express.js, GraphQL and MySQL. To showcase the api and schema GraphiQL is used.
 
   This api and schema allow for all CRUD actions with the following properties:
       1.  Name
       2.  Role at Microbe Formulas
       3.  Email
       4.  Phone Number
 
## Manifest                 

   index.js - My GraphQL API
   testDB.js - I test file I tried to get to do testing for me 
   testsByHand.md - Tests I wrote to test by hand
   package.json - Dependency config
   package-lock.json - Locked in dependencies
   *schema.js - temporary schema file
   README.md - This file                                     
                                                                                                
## Building the project    

   Navigate to main folder and enter the following commands
   $ npm start
                                                                                                 
## Testing                                                                                                          
   I'm working on getting jest up and running some test cases.
   to run unit tests run
   $ jest
   I struggled to get jest working it seems like I am mssing something to make it fuction correctly. I did follow their instructions to write the the test cases so ounce the problem is fixed the test cases should work.
   In future projects I would also like to look into other testing packages such as mocha and jasmine to see if they are better for these applications.
 
   I tested by launching the server and then hand loading in queries. To insure I hit all the corner cases I queried all used cases for employees, employeeById and everything worked as expected. I then proceeded to test all mutations such as createEmployee, updateEmployee, and deleteEmployee; all of which return a boolean value to let the frontend know the mutation ran with no issue.
   You can find these by hand tests in the file testsByHand.md
 
### Known Bugs

   FIXED: I had an issue of the server timing out. I fixed this by adding some error handling that closes the connection before timeout then relaunches the connection to keep the connection fresh.
  
## Sources Used

   Starter github directory given by Conor Souhrada
   https://graphql.org/learn/
   https://graphql.org/graphql-js/
   https://github.com/mysqljs/mysql
   https://jestjs.io/docs/en/getting-started