## employee w/ id #1
{
 employeeByID(ID: 131){
  firstName
  lastName
  email
  phone
  role
}
}
### Returned as expected

## employee w/ id #2
{
 employeeByID(ID: 1){
  firstName
  lastName
  email
  phone
  role
}
}
### Returned as expected

## employee w/ id #2
{
 employeeByID(ID: 11){
  firstName
  lastName
  email
  phone
  role
}
}
### Returned as expected

## employee w/o id #1
{
 employees{
  ID
  firstName
} 
}
### Returned as expected

## employee w/o id #2
{
 employees{
  ID
  firstName
  lastName
} 
}
### Returned as expected

## employee w/o id #3
{
 employees{
  ID
  firstName
  lastName
  email
  phone
  role
} 
}
### Returned as expected

## create employee #1
mutation{
  createEmployee(firstName: "Miata", lastName: "Tia", email: "mia@email.com", phone: "2081234557", role: "backend")
}
### Returned as expected

## update employee #1
mutation{
  updateEmployee(ID: 91, firstName: "Mia", lastName: "Tia", email: "mia@email.com", phone: "2081234557", role: "backend")
}
### Returned as expected


## destroy employee #1
mutation{
 deleteEmployee(ID: 101)
}
### Returned as expected

## destroy employee #2
mutation{
 deleteEmployee(ID: 111)
}
### Returned as expected