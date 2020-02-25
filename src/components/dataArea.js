import React, {useState} from "react";
import Table from "./table";

function DataArea () {
   const [employees, setEmployees] = useState([]);
   const employees =[
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
}

