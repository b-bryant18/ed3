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

export default Employee;