const inquirer = require('inquirer');
const db = require('./data');

async function basicQuestions() {
    const {choice} = await inquirer.prompt([
        {
        name: "choice",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
             "View all employees",
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role"
        ]
    }]);
        //Switch case depending on each user option
        switch (choice) {
        case 'View all employees':
          return viewAllEmp();

        case 'View all employees by role':
           return viewAllEmpByRole();

        case 'View all employees by department':
          return viewAllEmpByDept();

        case 'View all employees by manager':
          return viewAllEmpByManager();

        case 'Add employee':
          return addEmp();
          
        case 'Add role':
          return addRole();

        case 'Add department':
          return addDept();

        case 'Update employee role':
          return updateEmpRole();

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
    }
}

async function addDept() {
    const department = await inquirer.prompt ([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    await db.addDepartment(department)
    console.log(`Added ${department.name}`)
    basicQuestions();
}

/* Function to call above

viewAllEmp();
viewAllEmpByRole();
viewAllEmpByDept();
viewAllEmpByManager();
addEmp();
addRole();
addDept();
updateEmpRole();
*/
basicQuestions();