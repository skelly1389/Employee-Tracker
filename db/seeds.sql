USE employeedb;

INSERT INTO department (name)
VALUES ("QA"), ("Development"), ("Sales");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Nomates", 1, 2), ("Big", "Money", 2, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 50000, 2), ("Tester", 30000, 1); 