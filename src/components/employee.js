import React, {Component} from "react";

function Employee(props) {
        return (
            <div>
                <tr>
                <p>{props.id}</p>
                </tr>
                <tr>
                <p>{props.name}</p>
                </tr>
                <tr>
                <p>{props.department}</p>
                </tr>
            </div>
        )
}

//make tablerows inside of return statement
//Need html for a table
//Each row is its own component

export default Employee;