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

//Sorts employee names alphabetically
function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

//Sorts employees by their department
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

//Filters employeeList array and removes employees whose ID numbers are > 4
function filterIds(c) {
  return c.id >= 4;
}

class DataArea extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 3, employeeList }
  }

  //Changes state to sort by dept when button is clicked (below)
  sortByDepartment = () => {
    const newEmployeeList = [...this.state.employeeList];
    const res = newEmployeeList.sort(compare2);
    this.setState({ employeeList: res })
  }

  //Changes state to filter by ID numbers when button is clicked (below)
  filterById = () => {
    const newIdList = [...this.state.employeeList];
    const newRes = newIdList.filter(filterIds);
    this.setState({ employeeList: newRes })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sortByDepartment()}>Sort by Dept</button>
        <button onClick={() => this.filterById()}> Filter IDs > 4 </button>
        <Nav />
        <table>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
            <th>Department:</th>
          </tr>
          {this.state.employeeList.map(row => <tr> <td>{row.id}</td> <td>{row.name}</td> <td>{row.department}</td> </tr>)}
        </table>
      </div>
    )
  }
}
export default DataArea;

// employeeList.map(employee => <Employee id={employee.id} name={employee.name} department={employee.department} />)