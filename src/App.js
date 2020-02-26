import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataArea from "./components/dataArea";

function App() {
  const employeeList = {
    columns: [
      {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 150
      },
      {
      label: 'Department',
      field: 'department',
      sort: 'asc',
      width: 150
      },
      {
      label: 'ID',
      field: 'id',
      sort: 'asc',
      width: 150
      }

    ],
    rows: [
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
}

  // const [employees, setEmployees] = useState([]);

  // this.employees = this.state.list.map((employee, key) => 
  // <li key={employee.id}>{employee.name}</li> 
  // );

  //Puts employee list onto the webpage
  return (
    <div>
    <DataArea />
    </div>
  )
}

export default App;

//MAKE A NEW REPO
