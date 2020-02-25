import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";
import Employee from "./components/employee";

function App() {
  const employeeList = [
    {
      id: 1,
      name: "Elon M",
      department: "Programming"
    },

    {
      id: 2,
      name: "Bill G",
      department: "Programming"
    },
    {
      id: 3,
      name: "Eric S",
      department: "Programming"
    },
    {
      id: 4,
      name: "Jordan B",
      department: "Marketing"
    },
    {
      id: 5,
      name: "Dave T",
      department: "Marketing"
    },

    {
      id: 6,
      name: "Bob J",
      department: "Marketing"
    }
  ]
  // const [employees, setEmployees] = useState([]);

  // this.employees = this.state.list.map((employee, key) => 
  // <li key={employee.id}>{employee.name}</li> 
  // );

  // const allEmployees = employeeList.map((employee) =>
  // <li>{employee}</li>
  // )

  //Puts employee list onto the webpage
  return (
    <div>
    <Nav />
      {/* {employeeList.map(employee => <li> {employee.id},  {employee.name} </li>)} */}

      {employeeList.map(employee => <Employee  id = {employee.id} name = {employee.name} department = {employee.department}/> )}
    </div>
  )
}

export default App;
