// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
// initiate empty employee array
const listEmployees = [];
const collectEmployees = function () {
  // while loop starting condition
  let addEmployee = true;
  // while loop to get and save input from user in variables
  while (addEmployee) {
    const efirstName = prompt("Please enter the first name:");
    const elastName = prompt("Please enter the last name:");
    let eSalary = parseInt(prompt("Enter the salary:"));
    // condition for the salary value. Must be a number type or its replaced by 0
    if (isNaN(eSalary)) {
      eSalary = 0;
    }
    // making an object for the current employee
    const employeeObject = {
      firstName: efirstName,
      lastName: elastName,
      salary: eSalary,
    };
    // adding the employee object to the array
    listEmployees.push(employeeObject);
    // finish condition of the while loop. User confirms or deny.
    addEmployee = confirm("Do you want to add another employee?");
  }
  return listEmployees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // iniate the total salary
  let sumSalary = 0;
  // loop through all emplyees adding their salary to the total
  for (let i = 0; i < employeesArray.length; i++) {
    sumSalary = sumSalary + employeesArray[i].salary;
  }
  // calculate and log the average salary to the console
  const avgSalary = sumSalary / employeesArray.length;
  console.log(
    `The average salary between our ${employeesArray.length} employees is ${avgSalary}$`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // setting max and min values to generate a random integer index
  const minRandom = 0;
  const maxRandom = listEmployees.length - 1;
  // generate a random number in the interval
  const randomInteger = Math.floor(
    Math.random() * (maxRandom - minRandom + 1) + minRandom
  );
  // logging the full name of a random employee to the console
  console.log(
    `Congratulations to ${listEmployees[randomInteger].firstName} ${listEmployees[randomInteger].lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button.
addEmployeesBtn.addEventListener("click", trackEmployeeData);
