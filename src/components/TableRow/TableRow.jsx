import React from "react";
import { Button } from "reactstrap";

export default function TableRow({data, changeMode, deleteRow}){
    return(
        <tr>
            {Object.keys(data).map(key =>{
                let cell = data[key]
                if (key != 'changeMode'){
                    return(<td>{cell}</td>)
                }
                
            })}
            <td><Button color="primary" onClick={() => changeMode(data.id)}>Change</Button></td>
            <td><Button color="danger" onClick={() => deleteRow(data.id)}>Delete</Button></td>
        </tr>
    )
}