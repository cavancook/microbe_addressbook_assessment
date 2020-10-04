// ----- Begin your project below! -----
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors())

const schema = buildSchema(`
  type Employee {
    ID: Int!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    role: String!
  }
  type Query {
    employees: [Employee],
    employeeByID(ID: Int) : Employee
  }
  type Mutation {
    updateEmployee(ID: Int, firstName: String, lastName: String, email: String, phone: String, role: String) : Boolean
    createEmployee(firstName: String, lastName: String, email: String, phone: String, role: String) : Boolean
    deleteEmployee(ID: Int) : Boolean
  }
`);

const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
        if (err)
            return reject(err);
        rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
    });
});

//Resolvers
const root = {
  employees: (args, req) => queryDB(req, "select * from employee").then(data => data),
  employeeByID: (args, req) => queryDB(req, "select * from employee where ID = ?", [args.ID]).then(data => data[0]),
  updateEmployee: (args, req) => queryDB(req, "update employee SET ? where ID = ?", [args, args.ID]).then(data => data),
  createEmployee: (args, req) => queryDB(req, "insert into employee SET ?", args).then(data => data),
  deleteEmployee: (args, req) => queryDB(req, "delete from employee where ID = ?", [args.ID]).then(data => data)
};

app.use((req, res, next) => {
 //DB login credentials
  const db_config = {
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bff5e7fefe1857',
    password: 'a89fe87f',
    database: 'heroku_a68252a4ff42392'
  };
  
 
  // Makes server connection and Handles server timing out problem
  function handleDisconnect() {
    req.mysqlDb = mysql.createConnection(db_config); // Recreates the connection, old one gets killed.
  
    req.mysqlDb.connect(function(err) {
      if(err) {
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // Delay before reconnect, to avoid a hot loop
      }
    });
    req.mysqlDb.on('error', function(err) {         // The server is down or restarting
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to server lost due to connnection idle timeout
        handleDisconnect();
      } else {
        throw err;
      }
    });
  }
  handleDisconnect();
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');