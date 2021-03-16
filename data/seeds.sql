--insert dept table
--add role
--add employees last
--view all dept, employees
use employeeDB;

-- DEPARTMENT SEEDS --
SELECT * FROM department;

INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (3, "Engineering");

INSERT INTO department (id, name)
VALUES (5, "Legal");

INSERT INTO department (id, name)
VALUES (4, "Finance");

-- ROLE SEEDS --

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 30000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Lead Engineer", 100000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Lawyer", 600000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Accountant", 150000, 4);

-- EMPLOYEE SEEDS --

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Veronica", "Smith", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rebecca", "Reynolds", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bradley", "Cooper", 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adam", "Stevens", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kaylee", "Sanders", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cody", "Thomas", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brittany", "Davidson", 4, 4);
