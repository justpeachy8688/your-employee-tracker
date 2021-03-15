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
}

module.exports = new Query(connection);