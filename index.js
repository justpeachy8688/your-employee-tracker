const inquirer = require('inquirer');
const db = require('./data');
let cTable = require("console.table");
const database = require('./data/connection');
let queries = require("./data/index.js");


async function basicQuestions() {
    const { choice } = await inquirer.prompt([
        {
            name: "choice",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add employee",
                "Add role",
                "Add department",
                "Update employee role",
            ]
        }]);
    //Switch case depending on each user option
    switch (choice) {
        case 'View all employees':
            return viewAllEmp();

        case 'View all departments':
            return viewAllDepts();

        case 'View all roles':
            return viewAllRoles();

        case 'Add employee':
            return addEmployee();

        case 'Add role':
            return addRole();

        case 'Add department':
            return addDept();

        case 'Update employee role':
            return updateEmpRole();
    }
}
// ADD DEPARTMENT
async function addDept() {
    const department = await inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    await db.addDepartment(department)
    console.log(`\n ADDED ${department.name}! \n`)
    basicQuestions();
}

// ADD ROLE
async function addRole() {
    const role = await inquirer.prompt([
        {
            name: "title",
            message: 'What role would you like to add?'
        },
        {
            name: "salary",
            message: "What is their salary?"
        },
        {
            name: "department_id",
            message: "What is their department id?"
        }
    ])
    // await console.log(role)
    await db.addRole(role)
    console.log(`\n ADDED ${role.title}! \n`)
    basicQuestions();
}

// //ADD EMPLOYEE
async function addEmployee() {
    const emp = await inquirer.prompt([
        {
            name: "first_name",
            message: 'What is their first name?'
        },
        {
            name: 'last_name',
            message: 'What is their last name?'
        },
        {
            name: 'role_id',
            message: 'What is their role id?'
        },
        {
            name: 'manager_id',
            message: 'What is their manager id?'
        }
    ])
    await db.addEmployee(emp)
    console.log(`\n ADDED ${emp.first_name}! \n`)
    basicQuestions();
}

//VIEW ALL EMPLOYEES
async function viewAllEmp() {
    // SELECT * FROM employee;
    const query = "SELECT * FROM employee";
    const rows = await database.query(query);
    console.table(rows);

    basicQuestions();
}

//VIEW ALL DEPARTMENTS
async function viewAllDepts() {
    const query = "SELECT * FROM department";
    const rows = await database.query(query);
    console.table(rows);

    basicQuestions();
}

//VIEW ALL ROLES
async function viewAllRoles() {
    const query = 'SELECT * FROM role';
    const rows = await database.query(query);
    console.table(rows);

    basicQuestions();
}

//STILL WORKING ON THE LAST FUNCTION

// //UPDATE EMPLOYEE ROLE
// async function updateEmpRole() {
//     const employees = await database.query('SELECT id, CONCAT(first_name, " ", last_name AS name FROM employee');

//     const employeeChoices = employees.map(employee => ({
//         name: `${employee.first_name} ${employee.last_name}`,
//         value: employee.id
//     }));

//     inquirer.prompt([
//         {
//             name: "empID",
//             type: "list",
//             message: "For which employee?",
//             choices: employeeChoices
//         }
//     ])
//     // .then(empAnswers => {

//     // })

//     const roles = await database.query('SELECT id, CONCAT(title , salary, department_id AS title FROM role');

//     const roleChoices = roles.map(role => ({
//         name: `${role.title} ${role.salary}`,
//         value: role.id
//     }));

//     inquirer.prompt([
//         {
//             name: "newRole",
//             type: "list",
//             message: "Change their role to:",
//             choices: roleChoices
//         }
//     ])

//     // .then(answers => {

//     //     })

// }


basicQuestions();