import React, {Component} from "react";

class Employee extends Component {
    render() {
        return (
            <div>
                <p>{this.props.employee.id}</p>
                <p>{this.props.employee.name}</p>
                <p>{this.props.employee.department}</p>
            </div>
        )
    }
}

export default Employee;