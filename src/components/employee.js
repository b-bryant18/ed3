import React, {Component} from "react";

function Employee(props) {
        return (
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.department}</p>
            </div>
        )
}

//make tablerows inside of return statement
//Need html for a table
//Each row is its own component

export default Employee;