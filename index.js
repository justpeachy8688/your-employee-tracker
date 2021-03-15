const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'password',
  database: 'employeeDB',
});


connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  //CALL FUNCTIONS HERE
});

// const employeeQuestions = () => {
//     inquirer.prompt({
//         name: "toDo",
//         type: "rawlist",
//         message: "What would you like to do?",
//         choices: [
//             'View All Employees',
//             'View All Employees by Department',
//             'View All Employees by Manager',
//             'Add Employee',
//             'Remove Employee Role',
//             'Update Employee Role',
//             'Update Employee Manager',
//             'View All Roles'
//         ]
//     }).then((answer) => {

//     })
}