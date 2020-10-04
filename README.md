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
|-----------------------------------------------------------------------------|
|index.js              | My GraphQL APi
|package.json          | Dependency config
|package-lock.json     | Locked in dependecies
|*schema.js             | temperary schema file
|README.md             | This file
|-----------------------------------------------------------------------------|                                       
                                                                                                  
## Building the project     

    Navigate to main folder and enter the following commands
    $ npm start
                                      
                                                                                                                     
## Testing                                                                                                           
    I'm working on getting jest up and running some test cases.
    to run unit tests run 
    $ jest

    I tested by launching the server and then hand loading in querys. I insure I hit all the corner cases I queried all used cases for employess, employeeById and everything worked as expected. I then proceeded to test all mutations such as createEmployee, updateEmployee, and deleteEmployee; all of which return a boolean value to let the frontend know the mutation ran with no issue.

### Known Bugs

    FIXED: I had a issue of the server timing out. I fixed this by adding some error handling that closes the connection before timeout then relaunches the connection to keep the connection fresh.

## Reflection and Self Assessment

    This project was a great deal of fun to work through.  
    
## Sources Used

    Starter github directory given by Conor Souhrada


### Extras to attempt

1.  User authentication - Not everyone should be able to use our company directory.  Allow the creation of a user account and log in.
2.  Host the project - Get the project live on Heroku or another service!
3.  Create a simple user interface - Are you a ‘Full Stack Developer’? Go for it!

### **Upon Completion:**
Please turn in this project within the time frame given.  We would rather see what you have accomplished in the time frame than need extensions on the project.

Submit a link to your project’s GitHub repo and include a README with clear instructions on how to get your project up and running locally.  If you opted to host the project submit a link to where we can view it.  

In addition to this please include a short screen recording or project write up detailing your choices and design decisions.  In this recording/write up include things you may have done differently, changes you would make if you had more time, etc.

We will be reviewing your submissions and be in contact.  We thank you for your interest and appreciate you committing your time to this project!


*Any questions? Email conor.souhrada@microbeformulas.com*