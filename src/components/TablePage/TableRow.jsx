import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { changeMode, deleteRow } from "../../store/tableReduser";

export default function TableRow({data, width}){
    const dispatch = useDispatch()

    return(
        <tr>
            {Object.keys(data).map(key =>{
                let cell = data[key]
                if (key != 'changeMode'){
                    return(<td width={width}>{cell}</td>)
                }
            })}
            <td width={'10%'}><Button color="primary" onClick={() => dispatch(changeMode(data.id))}>Change</Button></td>
            <td width={'10%'}><Button color="danger" onClick={() => dispatch(deleteRow(data.id))}>Delete</Button></td>
        </tr>
    )
}