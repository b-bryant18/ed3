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

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
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
    this.state = { size: 3 }
  }
//   render() {
//     let rows = [];
//     for (var i = 0; i < this.state.size; i++) {
//       let rowID = `row$[i]`
//       let cell = []
//       for (var idx = 0; idx < this.state.size; idx++) {
//         let cellID = `cell${i}-${idx}`
//         cell.push(<td key={cellID} id={cellID}></td>)
//       }
//       rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//     }
//     return (
//       <div className="container">
//         <div className="col s12 board">
//           <table id="simple-board">
//             <tbody>

//             </tbody>
//           </table>
//         </div>
//       </div>
//     )
//   }
// }

render() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID:</th>
          <th>Name:</th>
          <th>Department:</th>
          <Nav />
          
        </tr>
      </thead>
      <tbody>
        {
          this.employeeList.map(row =>(
            <tr>
            <td>{Employee.id}</td>
            <td>{Employee.name}</td>
            <td>{Employee.department}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
}
export default DataArea;

// employeeList.map(employee => <Employee id={employee.id} name={employee.name} department={employee.department} />)