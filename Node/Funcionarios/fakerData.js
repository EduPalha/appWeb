const fs = require('fs');
const faker = require('faker');

const numberOfEmployees = 1000; // Change this number to the desired number of employees

const employees = [];

for (let i = 0; i < numberOfEmployees; i++) {
  const employee = {
    name: faker.name.findName(),
    age: Math.floor(Math.random() * 40) + 20, // Random age between 20 and 59
    sex: faker.random.arrayElement(['Male', 'Female']),
    company: faker.company.companyName(),
    salary: faker.random.number({ min: 30000, max: 100000 }),
    jobTitle: faker.name.jobTitle(),
    country: faker.address.country()
  };
  employees.push(employee);
}

const jsonData = JSON.stringify(employees, null, 2);

fs.writeFile('funcionarios.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the JSON file:', err);
  } else {
    console.log('funcionarios.json file created successfully');
  }
});