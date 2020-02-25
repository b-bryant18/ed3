import React from "react";

function Table() {
    const Data = {
        columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150
            },
            {
                label: "Department",
                field: "department",
                sort: "asc",
                width: 150
            },
            {
                label: "ID",
                field: "id",
                sort: "asc",
                width: 150
            }
        ],
        rows: [

            {
                name: "Elon M",
                department: "programming",
                id: "1"

            },
            {
                name: "Bill G",
                department: "programming",
                id: "2"

            },
            {
                name: "Eric S",
                department: "programming",
                id: "3"

            },
            {
                name: "Jordan B",
                department: "marketing",
                id: "4"

            },
            {
                name: "Dave T",
                department: "marketing",
                id: "5"

            },
            {
                name: "Bob J",
                department: "marketing",
                id: "6"

            }
        ]
    }

return (
   <table>
       <tr>
           <th>Name</th>
           <th>Department</th>
           <th>ID:</th>
       </tr>
       <td></td>
       <td></td>
   </table> 
    )
}


export default Table;