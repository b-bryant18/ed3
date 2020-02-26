import React, { Component } from "react";
import Table from "./table";
import Nav from "./nav";
import Employee from "./employee";

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

function compare (a,b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
console.log(employeeList.sort(compare))

class DataArea extends React.Component {
  state = {
    employees: [{}]
  };

  //  const [employees, setEmployees] = useState([]);
  // state should be how the employees are sorted: either alphabetically or by ID number.
  // could make ID numbers 6 digits long.
  //For every employee that gets mapped, create a table row

  render() {
    return (
      <div>
        <Nav />
        {employeeList.map(employee => <Employee id={employee.id} name={employee.name} department={employee.department} />)}
      </div>
    )
  }
}

export default DataArea;


{ employeeList.sort(function (a, b) { return a.name - b.name }) }
