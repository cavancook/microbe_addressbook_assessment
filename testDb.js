const jest = require('jest');


const createMutation = `
mutation createEmployee($firstName: String!,$lastName: String!, $email: String!, $phone: String!, $role: String!) {
    createEmployee(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, role: $role) : Boolean
  }
`;

const updateMutation = `
  mutation updateEmployee(ID: $)($firstName: String!,$lastName: String!, $email: String!, $phone: String!, $role: String!) {
    updateEmployee(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, role: $role) : Boolean
  }
`;

const idQuery = `
  query employeeById($ID: Int) {
    employeeById(ID: $ID) {
      ID
      firstName
      lastName
      email
      phone
      role
    }
  }
`;

describe("resolvers", () => {
  it("create, update, and root", async () => {
    const testUser = {firstName: "bobby", lastName: "bob",email: "bob@bob.com", phone: "b2081234567", role: "frontend" };

    const createResponse = await graphqlTestCall(createMutation, {
      firstName: testUser.firstName,
      lastName: testUser.lastName,
      email: testUser.email,
      phone: testUser.phone,
      role: testUser.role
    });

    expect(createResponse).toEqual(true);

    const updateResponse = await graphqlTestCall(updateMutation, {
        ID: 131,
        firstName: testUser.firstName,
        lastName: testUser.lastName,
        email: testUser.email,
        phone: testUser.phone,
        role: testUser.role
      });
  
    expect(updateResponse).toEqual(true);

    const idQueryResponse = await graphqlTestCall(idQuery, 131);

    expect(idQueryResponse).toEqual({
        "data": {
            "employeeByID": {
              "firstName": "Miata",
              "lastName": "Tia",
              "email": "mia@email.com",
              "phone": "2081234557",
              "role": "backend"
            }
          }
    });
   });
});