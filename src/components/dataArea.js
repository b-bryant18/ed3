import React, { Component } from "react";
// import Table from "./table";
import Nav from "./nav";
import Employee from "./employee";
import "./dataArea.css";

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
    name: "Eric G",
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

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
function compare2(a, b) {
  if (a.department < b.department) {
    return -1;
  }
  if (a.department > b.department) {
    return 1;
  }
  return 0;
}
console.log(employeeList.sort(compare))

// class DataArea extends React.Component {
//   state = {
//     employees: [{}]
//   };

// filterEmployees = () => {
//   this.setState({employees: this.state.employees.filter });
// }

// state should be how the employees are sorted: either alphabetically or by ID number.
// could make ID numbers 6 digits long.
//For every employee that gets mapped, create a table row

class DataArea extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 3, employeeList }

  }

  sortByDepartment = () => {
    const newEmployeeList = [...this.state.employeeList];
    const res = newEmployeeList.sort(compare2);
    this.setState({employeeList: res})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sortByDepartment()}>Switch</button>
      <Nav />
        <table>
            <tr>
              <th>ID:</th>
              <th>Name:</th>
              <th>Department:</th>
            </tr>
          {this.state.employeeList.map(row => <tr> <td>{row.id}</td> <td>{row.name}</td> <td>{row.department}</td> </tr>) }
        </table>
      </div>
  )
  }
}
export default DataArea;

// employeeList.map(employee => <Employee id={employee.id} name={employee.name} department={employee.department} />)