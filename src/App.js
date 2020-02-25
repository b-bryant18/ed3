import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";

function App() {
  const employeeList =[
    { id: 1,
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
      id: 4 ,
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

  this.employees = this.state.list.map((employee, key) => 
  <li key={employee.id}>{employee.name}</li> 
  );

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
