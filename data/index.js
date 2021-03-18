const connection = require('./connection');

class Query {
    constructor(connection) {
        this.connection = connection
    }

    addDepartment(department) {
        return this.connection.query(
            'INSERT INTO department SET ?', department
        )
    }

    addRole(role) {
        return this.connection.query(
            'INSERT INTO role SET ?', role
        )
    }

    addEmployee(employee) {
        return this.connection.query(
            'INSERT INTO employee SET ?', employee
        )
    }
    viewAllEmp(employee) {
        return this.connection.query(
            'SELECT * FROM employee', employee
        )
    }

viewAllDepts() {
    return this.connection.query(
        'SELECT * FROM department'
    )
}

viewAllRoles() {
    return this.connection.query(
        'SELECT * FROM role'
    )
}

    // viewAllEmpByDept(department) {
    //     return this.connection.query(
    //         'SELECT * FROM department', department
    //     )
    // }
}

//WILL I NEED TO ADD ALL FUNCTIONS TO THIS ONE QUERY?

module.exports = new Query(connection);